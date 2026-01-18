import { Handle, Position, NodeProps } from '@xyflow/react';
import { NODE_TYPES } from '../NodeRegistry';
import { cn } from '@/lib/utils';
import { Play, MoreHorizontal, Trash, Plus } from 'lucide-react';

export function UniversalNode({ id, type, data, selected }: NodeProps) {
    const nodeDef = NODE_TYPES[type || 'webhook'];
    const Icon = nodeDef?.icon || NODE_TYPES['webhook'].icon;
    const isTrigger = nodeDef?.category === 'trigger';

    return (
        <div className={cn(
            "group relative flex items-center bg-[#202020] rounded-xl border transition-all min-w-[200px] h-[64px]",
            selected ? "border-primary shadow-[0_0_0_2px_rgba(37,99,235,0.3)]" : "border-white/10 hover:border-white/30",
            "shadow-xl"
        )}>
            {/* Action Toolbar on Hover (Top) */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity bg-[#1e1e1e] border border-white/10 rounded-lg p-1 shadow-xl z-50 pointer-events-none group-hover:pointer-events-auto">
                <button className="p-1.5 hover:bg-white/10 rounded-md text-green-500 transition-colors">
                    <Play className="w-3.5 h-3.5" />
                </button>
                <div className="w-px h-3 bg-white/10" />
                <button className="p-1.5 hover:bg-white/10 rounded-md text-red-400 transition-colors">
                    <Trash className="w-3.5 h-3.5" />
                </button>
            </div>

            {/* Input Handle */}
            {!isTrigger && (
                <Handle
                    type="target"
                    position={Position.Left}
                    className="w-3 h-3 !bg-white !border-4 !border-[#121212] transition-transform hover:scale-125 focus:ring-0"
                />
            )}

            {/* Icon Section */}
            <div className="w-[50px] h-full flex items-center justify-center border-r border-white/5 bg-white/5 relative overflow-hidden">
                <div className={cn(
                    "absolute inset-0 opacity-10",
                    isTrigger ? "bg-green-500" : "bg-blue-500"
                )} />
                <Icon className={cn(
                    "w-6 h-6 z-10",
                    isTrigger ? "text-green-500" : "text-blue-500"
                )} />
            </div>

            {/* Content Section */}
            <div className="flex-1 px-4 py-2 flex flex-col justify-center overflow-hidden">
                <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[13px] font-semibold text-white/90 truncate mr-2">
                        {data.label as string || nodeDef?.label}
                    </span>
                    <MoreHorizontal className="w-4 h-4 text-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-[11px] text-white/40 truncate">
                    {nodeDef?.description}
                </span>
            </div>

            {/* Output Handle */}
            <Handle
                type="source"
                position={Position.Right}
                className="w-3 h-3 !bg-white !border-4 !border-[#121212] transition-transform hover:scale-125 focus:ring-0"
            />

            {/* Add Node Button (Hover) */}
            <div className="absolute -right-7 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-[opacity,transform] duration-200 z-50 pl-2 pointer-events-none group-hover:pointer-events-auto">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        window.dispatchEvent(new CustomEvent('neqtra:add-node-click', { detail: { nodeId: id } }));
                    }}
                    className="w-6 h-6 bg-[#808080] hover:bg-white rounded-full flex items-center justify-center text-white hover:text-black shadow-lg transition-all hover:scale-110 cursor-pointer"
                >
                    <Plus className="w-3.5 h-3.5" strokeWidth={3} />
                </button>
            </div>
        </div>
    );
}
