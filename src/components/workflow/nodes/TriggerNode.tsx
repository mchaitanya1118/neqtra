import { Handle, Position } from '@xyflow/react';
import { Play } from 'lucide-react';

export function TriggerNode({ data }: { data: { label: string } }) {
    return (
        <div className="px-4 py-2 shadow-md rounded-md bg-card border-2 border-primary w-40">
            <div className="flex items-center">
                <div className="rounded-full w-8 h-8 flex items-center justify-center bg-primary/10 text-primary mr-2">
                    <Play className="w-4 h-4" />
                </div>
                <div className="text-sm font-bold">{data.label}</div>
            </div>
            <Handle type="source" position={Position.Right} className="w-3 h-3 bg-primary" />
        </div>
    );
}
