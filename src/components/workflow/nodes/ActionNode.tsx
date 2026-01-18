import { Handle, Position } from '@xyflow/react';
import { Zap } from 'lucide-react';

export function ActionNode({ data }: { data: { label: string } }) {
    return (
        <div className="px-4 py-2 shadow-md rounded-md bg-card border-2 border-border w-40">
            <Handle type="target" position={Position.Left} className="w-3 h-3 bg-muted-foreground" />
            <div className="flex items-center">
                <div className="rounded-full w-8 h-8 flex items-center justify-center bg-secondary text-secondary-foreground mr-2">
                    <Zap className="w-4 h-4" />
                </div>
                <div className="text-sm font-bold">{data.label}</div>
            </div>
            <Handle type="source" position={Position.Right} className="w-3 h-3 bg-muted-foreground" />
        </div>
    );
}
