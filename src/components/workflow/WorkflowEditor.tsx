import { executeWorkflow } from '@/lib/workflowEngine';
import { useCallback, useState, useRef, useMemo } from 'react';
import {
    ReactFlow,
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    Connection,
    Edge,
    ReactFlowProvider,
    BackgroundVariant,
    Panel,
    useReactFlow,
    Node
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Button } from '@/components/ui/button';
import { Layers, LayoutTemplate, MousePointer2, ChevronUp, Maximize2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { NodeConfigPanel } from './NodeConfigPanel';
import { EditorHeader } from './EditorHeader';
import { NodeSelector } from './NodeSelector';
import { Plus } from 'lucide-react';
import { NODE_TYPES } from './NodeRegistry';
import { UniversalNode } from './nodes/UniversalNode';

// No initial nodes - Empty State
const initialNodes: any[] = [];
const initialEdges: any[] = [];

function Flow() {
    const reactFlowWrapper = useRef<HTMLDivElement>(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const { toast } = useToast();
    const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
    const [isExecuting, setIsExecuting] = useState(false);
    const [showNodeSelector, setShowNodeSelector] = useState(false);
    const { screenToFlowPosition, getNodes } = useReactFlow();

    // Derived state
    const selectedNode = nodes.find(n => n.id === selectedNodeId);

    // Dynamic nodeTypes including all registered types
    const nodeTypes = useMemo(() => {
        const types: Record<string, any> = {};
        Object.keys(NODE_TYPES).forEach(type => {
            types[type] = UniversalNode;
        });
        return types;
    }, []);

    const onConnect = useCallback(
        (params: Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    const onDragOver = useCallback((event: React.DragEvent) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event: React.DragEvent) => {
            event.preventDefault();

            const type = event.dataTransfer.getData('application/reactflow');
            if (typeof type === 'undefined' || !type || !NODE_TYPES[type]) {
                return;
            }

            const position = screenToFlowPosition({
                x: event.clientX,
                y: event.clientY,
            });

            const nodeDef = NODE_TYPES[type];
            const newNode: Node = {
                id: `${type}-${nodes.length + 1}`,
                type,
                position,
                data: {
                    label: nodeDef.label,
                    ...nodeDef.defaultData
                },
            };

            setNodes((nds) => nds.concat(newNode));
        },
        [screenToFlowPosition, nodes.length, setNodes],
    );

    const onAddNode = (type: string) => {
        const nodeDef = NODE_TYPES[type];
        const currentNodes = getNodes();
        const yOffset = currentNodes.length * 50;

        const newNode: Node = {
            id: `${type}-${nodes.length + 1}`,
            type,
            position: { x: 100, y: 100 + yOffset },
            data: {
                label: nodeDef.label,
                ...nodeDef.defaultData
            },
        };
        setNodes((nds) => nds.concat(newNode));
    };

    const handleExecute = async () => {
        setIsExecuting(true);
        try {
            const results = await executeWorkflow(nodes, edges);
            console.log("Workflow Execution Results:", results);

            toast({
                title: "Execution Successful",
                description: `Workflow ran successfully. ${results.length} nodes executed. See console for details.`,
                className: "bg-green-500 text-white border-green-600"
            });
        } catch (error) {
            console.error(error);
            toast({
                title: "Execution Failed",
                description: "Check console for errors.",
                variant: "destructive"
            });
        } finally {
            setIsExecuting(false);
        }
    };

    const handleSave = () => {
        toast({ title: "Saved", description: "Workflow saved." });
    };

    const updateNodeData = (newData: any) => {
        setNodes((nds) => nds.map((node) => node.id === selectedNodeId ? { ...node, data: { ...node.data, ...newData } } : node));
    };

    const deleteNode = () => {
        setNodes((nds) => nds.filter(n => n.id !== selectedNodeId));
        setEdges((eds) => eds.filter(e => e.source !== selectedNodeId && e.target !== selectedNodeId));
        setSelectedNodeId(null);
    }



    return (
        <div className="flex h-screen w-full bg-[#121212] text-white overflow-hidden">
            {/* Removed NodesPalette */}

            <div className="flex-1 flex flex-col h-full relative">
                <EditorHeader
                    isExecuting={isExecuting}
                    onExecute={handleExecute}
                    onSave={handleSave}
                />

                <div className="flex-1 relative" ref={reactFlowWrapper}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges.map(e => ({ ...e, animated: isExecuting, style: isExecuting ? { stroke: '#22c55e', strokeWidth: 2 } : { stroke: '#555' } }))}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        onNodeClick={(_, node) => setSelectedNodeId(node.id)}
                        onPaneClick={() => setSelectedNodeId(null)}
                        onDragOver={onDragOver}
                        onDrop={onDrop}
                        nodeTypes={nodeTypes}
                        fitView
                        className="bg-[#151515]"
                        minZoom={0.5}
                        maxZoom={2}
                    >
                        <Background color="#333" gap={20} size={1} variant={BackgroundVariant.Dots} />

                        {/* Bottom Left Controls */}
                        <Panel position="bottom-left" className="m-6 flex gap-2">
                            <Button variant="ghost" size="icon" className="bg-[#1e1e1e] border border-white/10 hover:bg-[#2a2a2a] text-white/70">
                                <LayoutTemplate className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="bg-[#1e1e1e] border border-white/10 hover:bg-[#2a2a2a] text-white/70">
                                <Layers className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="bg-[#1e1e1e] border border-white/10 hover:bg-[#2a2a2a] text-white/70">
                                <MousePointer2 className="w-4 h-4" />
                            </Button>
                        </Panel>

                        {/* Empty State Placeholder */}
                        {nodes.length === 0 && (
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                                <div className="flex flex-col items-center gap-4 pointer-events-auto">
                                    <button
                                        onClick={() => setShowNodeSelector(true)}
                                        className="w-32 h-32 rounded-3xl border-2 border-dashed border-white/20 flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all group"
                                    >
                                        <Plus className="w-10 h-10 text-white/40 group-hover:text-primary transition-colors" />
                                    </button>
                                    <div className="text-center space-y-2">
                                        <div
                                            onClick={() => setShowNodeSelector(true)}
                                            className="text-white text-xl font-medium cursor-pointer hover:text-primary transition-colors"
                                        >
                                            Add first step...
                                        </div>
                                        <button className="text-primary hover:underline text-base font-normal">
                                            or start from a template
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Top Right Floating Controls */}
                        <Panel position="top-right" className="m-6 flex flex-col gap-2">
                            <Button onClick={() => setShowNodeSelector(true)} size="icon" className="h-10 w-10 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95">
                                <Plus className="w-6 h-6" />
                            </Button>
                        </Panel>

                    </ReactFlow>

                    <NodeSelector
                        open={showNodeSelector}
                        onOpenChange={setShowNodeSelector}
                        onSelect={onAddNode}
                        isTriggerSelection={nodes.length === 0}
                    />

                    {/* Config Panel */}
                    {selectedNodeId && (
                        <NodeConfigPanel
                            nodeId={selectedNodeId}
                            nodeType={selectedNode?.type || null}
                            nodeData={selectedNode?.data || {}}
                            onClose={() => setSelectedNodeId(null)}
                            onUpdateData={updateNodeData}
                            onDelete={deleteNode}
                        />
                    )}
                </div>

                {/* Logs Footer */}
                <div className="h-9 border-t border-white/10 bg-[#121212] flex items-center px-4 justify-between z-10">
                    <div className="text-white/70 text-xs font-medium cursor-pointer hover:text-white flex items-center gap-1">
                        Logs
                    </div>
                    <div className="flex items-center gap-2">
                        <Maximize2 className="w-3 h-3 text-white/50 cursor-pointer hover:text-white" />
                        <ChevronUp className="w-3 h-3 text-white/50 cursor-pointer hover:text-white" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export function WorkflowEditor() {
    return (
        <ReactFlowProvider>
            <Flow />
        </ReactFlowProvider>
    );
}
