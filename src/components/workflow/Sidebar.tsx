import { Play, Zap, FileJson } from 'lucide-react';

export function Sidebar() {
    const onDragStart = (event: React.DragEvent, nodeType: string) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <aside className="w-64 border-r border-border bg-card p-4 flex flex-col gap-4">
            <div className="font-semibold mb-2 text-sm text-muted-foreground uppercase tracking-wider">Triggers</div>
            <div
                className="flex items-center gap-2 p-3 bg-background border border-border rounded cursor-grab hover:border-primary transition-colors"
                onDragStart={(event) => onDragStart(event, 'trigger')}
                draggable
            >
                <Play className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Webhook</span>
            </div>

            <div className="font-semibold mb-2 mt-4 text-sm text-muted-foreground uppercase tracking-wider">Actions</div>
            <div
                className="flex items-center gap-2 p-3 bg-background border border-border rounded cursor-grab hover:border-primary transition-colors"
                onDragStart={(event) => onDragStart(event, 'action')}
                draggable
            >
                <Zap className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">AI Model</span>
            </div>
            <div
                className="flex items-center gap-2 p-3 bg-background border border-border rounded cursor-grab hover:border-primary transition-colors"
                onDragStart={(event) => onDragStart(event, 'action')}
                draggable
            >
                <FileJson className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">JSON Transform</span>
            </div>
        </aside>
    );
}
