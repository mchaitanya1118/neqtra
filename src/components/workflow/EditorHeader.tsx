import { Button } from "@/components/ui/button";
import { ChevronLeft, MoreHorizontal, Clock, Star, Play, Loader2 } from "lucide-react";
import { Link } from "wouter";
import { Switch } from "@/components/ui/switch";

interface EditorHeaderProps {
    isExecuting: boolean;
    onExecute: () => void;
    onSave: () => void;
}

export function EditorHeader({ isExecuting, onExecute, onSave }: EditorHeaderProps) {
    return (
        <div className="h-14 border-b border-white/10 bg-[#121212] px-4 flex items-center justify-between text-white shadow-sm z-50 relative">
            <div className="flex items-center gap-4">
                <Link href="/console/workflows">
                    <Button variant="ghost" size="icon" className="hover:bg-white/10 text-white/70 hover:text-white">
                        <ChevronLeft className="w-5 h-5" />
                    </Button>
                </Link>
                <div className="flex items-center gap-2 text-sm">
                    <span className="text-white/50 flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center text-xs">P</div>
                        Personal
                    </span>
                    <span className="text-white/30">/</span>
                    <span className="font-medium text-white hover:underline cursor-pointer">My workflow 2</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-white/50 cursor-pointer hover:bg-white/20 ml-2">
                        + Add tag
                    </span>
                </div>
            </div>

            <div className="bg-white/5 p-1 rounded-lg flex gap-1 transform scale-90">
                <Button variant="ghost" size="sm" className="bg-white/10 text-white hover:bg-white/20 h-8 px-4 text-xs font-medium">Editor</Button>
                <Button variant="ghost" size="sm" className="text-white/50 hover:text-white h-8 px-4 text-xs font-medium">Executions</Button>
            </div>

            <div className="flex items-center gap-2">
                <Button variant="ghost" className="text-white/50 hover:text-white h-8 text-xs font-medium bg-white/5 border border-white/5 hover:border-white/20">
                    Publish
                </Button>
                <Button
                    onClick={onSave}
                    className="h-8 bg-[#ff6d5a] hover:bg-[#ff6d5a]/90 text-white text-xs font-medium"
                >
                    Save
                </Button>
                <div className="h-4 w-px bg-white/10 mx-1" />
                <Button variant="ghost" size="icon" className="h-8 w-8 text-white/50 hover:text-white">
                    <Clock className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-white/50 hover:text-white">
                    <MoreHorizontal className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
}
