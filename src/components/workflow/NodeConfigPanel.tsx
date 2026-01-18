import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X, Play, Copy, ExternalLink, Trash } from "lucide-react";
import { NODE_TYPES } from "./NodeRegistry";

interface NodeConfigPanelProps {
    nodeId: string | null;
    nodeType: string | null;
    nodeData: any;
    onClose: () => void;
    onUpdateData: (data: any) => void;
    onDelete: () => void;
}

export function NodeConfigPanel({
    nodeId,
    nodeType,
    nodeData,
    onClose,
    onUpdateData,
    onDelete
}: NodeConfigPanelProps) {
    if (!nodeId || !nodeType) return null;

    const nodeDef = NODE_TYPES[nodeType];
    const Icon = nodeDef?.icon || ExternalLink;

    const updateField = (field: string, value: any) => {
        onUpdateData({ [field]: value });
    };

    return (
        <div className="absolute top-0 right-0 h-full w-96 bg-background border-l border-border shadow-xl z-20 flex flex-col animate-in slide-in-from-right duration-200">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${nodeDef?.category === 'trigger' ? 'bg-primary/10 text-primary' : 'bg-secondary text-secondary-foreground'}`}>
                        <Icon className="w-4 h-4" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-sm">Configure Node</h3>
                        <p className="text-xs text-muted-foreground capitalize">{nodeDef?.label || nodeType}</p>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" onClick={() => onDelete()} className="text-destructive hover:bg-destructive/10">
                        <Trash className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={onClose}>
                        <X className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <div className="space-y-2">
                    <Label>Node Name</Label>
                    <Input
                        value={nodeData.label || ''}
                        onChange={(e) => updateField('label', e.target.value)}
                    />
                </div>

                {nodeType === 'webhook' && (
                    <>
                        <div className="space-y-2">
                            <Label>HTTP Method</Label>
                            <div className="flex gap-2">
                                <Button
                                    variant={nodeData.method === 'GET' ? 'secondary' : 'outline'}
                                    size="sm"
                                    onClick={() => updateField('method', 'GET')}
                                    className={nodeData.method === 'GET' ? "bg-green-500/10 text-green-600 hover:bg-green-500/20" : ""}
                                >
                                    GET
                                </Button>
                                <Button
                                    variant={nodeData.method === 'POST' ? 'secondary' : 'outline'}
                                    size="sm"
                                    onClick={() => updateField('method', 'POST')}
                                    className={nodeData.method === 'POST' ? "bg-blue-500/10 text-blue-600 hover:bg-blue-500/20" : ""}
                                >
                                    POST
                                </Button>
                            </div>
                        </div>

                        <div className="p-4 bg-muted/50 rounded-lg space-y-2 border border-border">
                            <Label className="text-xs uppercase text-muted-foreground">Webhook URL</Label>
                            <div className="flex items-center gap-2">
                                <code className="text-xs bg-background p-2 rounded border border-border flex-1 overflow-hidden text-ellipsis whitespace-nowrap block">
                                    https://api.neqtra.com/hooks/{nodeId}
                                </code>
                                <Button size="icon" variant="ghost" className="h-8 w-8">
                                    <Copy className="w-3 h-3" />
                                </Button>
                            </div>
                        </div>
                    </>
                )}

                {nodeType === 'http-request' && (
                    <>
                        <div className="space-y-2">
                            <Label>Method</Label>
                            <select
                                className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm"
                                value={nodeData.method}
                                onChange={(e) => updateField('method', e.target.value)}
                            >
                                <option>GET</option>
                                <option>POST</option>
                                <option>PUT</option>
                                <option>DELETE</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <Label>URL</Label>
                            <Input
                                value={nodeData.url}
                                onChange={(e) => updateField('url', e.target.value)}
                            />
                        </div>
                        {nodeData.method !== 'GET' && (
                            <div className="space-y-2">
                                <Label>Body (JSON)</Label>
                                <Textarea
                                    className="font-mono text-xs"
                                    value={nodeData.body}
                                    onChange={(e) => updateField('body', e.target.value)}
                                />
                            </div>
                        )}
                    </>
                )}

                {nodeType === 'llm' && (
                    <>
                        <div className="space-y-2">
                            <Label>Model</Label>
                            <select
                                className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm"
                                value={nodeData.model}
                                onChange={(e) => updateField('model', e.target.value)}
                            >
                                <option value="gpt-4o">GPT-4o</option>
                                <option value="claude-3-5-sonnet">Claude 3.5 Sonnet</option>
                                <option value="gemini-1.5-pro">Gemini 1.5 Pro</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <Label>System Prompt</Label>
                            <Textarea
                                value={nodeData.systemPrompt}
                                onChange={(e) => updateField('systemPrompt', e.target.value)}
                                className="min-h-[100px] font-mono text-xs"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>User Prompt</Label>
                            <Textarea
                                value={nodeData.prompt}
                                onChange={(e) => updateField('prompt', e.target.value)}
                                className="min-h-[60px] font-mono text-xs"
                                placeholder="Input prompt..."
                            />
                        </div>
                    </>
                )}

                {nodeType === 'code' && (
                    <div className="space-y-2">
                        <Label>JavaScript Code</Label>
                        <Textarea
                            value={nodeData.code}
                            onChange={(e) => updateField('code', e.target.value)}
                            className="min-h-[200px] font-mono text-xs"
                        />
                    </div>
                )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-border bg-muted/5">
                <Button className="w-full" onClick={onClose}>
                    Done
                </Button>
            </div>
        </div>
    );
}
