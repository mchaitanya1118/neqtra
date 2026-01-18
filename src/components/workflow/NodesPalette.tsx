import { REGISTERED_NODES } from "./NodeRegistry";
import { Card } from "@/components/ui/card";

export function NodesPalette() {
    const onDragStart = (event: React.DragEvent, nodeType: string) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <aside className="w-64 border-r border-white/10 bg-[#151515] flex flex-col h-full">
            <div className="p-4 border-b border-white/10">
                <h2 className="font-semibold text-white">Nodes</h2>
                <p className="text-xs text-white/50">Drag nodes to the canvas</p>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {['trigger', 'action'].map((category) => (
                    <div key={category}>
                        <h3 className="text-xs uppercase font-bold text-white/40 mb-3 tracking-wider">
                            {category}s
                        </h3>
                        <div className="space-y-2">
                            {REGISTERED_NODES.filter(n => n.category === category).map((node) => (
                                <div
                                    key={node.type}
                                    className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/20 cursor-grab active:cursor-grabbing transition-all group"
                                    draggable
                                    onDragStart={(event) => onDragStart(event, node.type)}
                                >
                                    <div className="p-2 rounded bg-[#1e1e1e] group-hover:bg-[#252525] text-white/70 group-hover:text-white transition-colors">
                                        <node.icon className="w-4 h-4" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-white/90 group-hover:text-white">
                                            {node.label}
                                        </span>
                                        <span className="text-[10px] text-white/40">
                                            {node.description}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
}
