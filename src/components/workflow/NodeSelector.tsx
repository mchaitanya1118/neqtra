import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { REGISTERED_NODES } from "./NodeRegistry";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface NodeSelectorProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSelect: (type: string) => void;
    isTriggerSelection?: boolean;
}

export function NodeSelector({ open, onOpenChange, onSelect, isTriggerSelection }: NodeSelectorProps) {
    const [search, setSearch] = useState("");

    const filteredNodes = REGISTERED_NODES.filter(node =>
        node.label.toLowerCase().includes(search.toLowerCase()) ||
        node.description.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Sheet open={open} onOpenChange={onOpenChange} modal={false}>
            <SheetContent side="right" overlay={false} className="w-[400px] sm:w-[500px] bg-[#2d2d2d] border-l border-white/10 text-white p-0 gap-0 shadow-2xl">
                <SheetHeader className="p-6 pb-4 text-left">
                    <SheetTitle className="text-xl font-semibold mb-1 tracking-tight text-white">
                        {isTriggerSelection ? "What triggers this workflow?" : "What happens next?"}
                    </SheetTitle>
                    <div className="text-white/60 text-sm mb-4">
                        {isTriggerSelection
                            ? "A trigger is a step that starts your workflow"
                            : "Choose an action to perform"}
                    </div>

                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                        <Input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search nodes..."
                            className="bg-[#1e1e1e] border-none pl-9 text-white placeholder:text-white/40 h-10 rounded-md focus-visible:ring-1 focus-visible:ring-primary/50"
                        />
                    </div>
                </SheetHeader>

                <div className="h-full overflow-y-auto px-4 pb-4">
                    <div className="grid grid-cols-1 gap-1 pb-20">
                        {filteredNodes.map((node) => (
                            <button
                                key={node.type}
                                onClick={() => {
                                    onSelect(node.type);
                                    onOpenChange(false);
                                }}
                                className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors text-left group w-full"
                            >
                                <div className="mt-1 p-1">
                                    <node.icon className="w-5 h-5 text-white/90" />
                                </div>
                                <div className="flex-1">
                                    <div className="font-medium text-[15px] text-white/90 mb-0.5">{node.label}</div>
                                    <div className="text-sm text-white/50 leading-snug">{node.description}</div>
                                </div>
                                {node.category === 'trigger' && (
                                    <div className="self-center opacity-0 group-hover:opacity-100 transition-opacity text-white/30 px-2">
                                        →
                                    </div>
                                )}
                            </button>
                        ))}
                        {filteredNodes.length === 0 && (
                            <div className="p-8 text-center text-white/30 text-sm">
                                No nodes found matching "{search}"
                            </div>
                        )}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
