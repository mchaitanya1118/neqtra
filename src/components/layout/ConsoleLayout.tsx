
import {
    Menu,
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { GlobalSidebar } from "@/components/layout/GlobalSidebar";

interface ConsoleLayoutProps {
    children: React.ReactNode;
}

export function ConsoleLayout({ children }: ConsoleLayoutProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
        if (!link) return;

        const originalIcon = link.href;
        link.href = '/logo.svg';

        return () => {
            link.href = '/favicon.png';
        };
    }, []);

    return (
        <div className="min-h-screen bg-background flex">
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <GlobalSidebar
                className={cn(
                    "fixed inset-y-0 left-0 transition-transform md:translate-x-0 md:static md:h-screen",
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                )}
            />

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0">
                <header className="h-16 border-b border-border flex items-center justify-between px-6 bg-background/50 backdrop-blur-sm sticky top-0 z-30">
                    <button
                        className="md:hidden p-2 -ml-2 text-muted-foreground"
                        onClick={() => setIsSidebarOpen(true)}
                    >
                        <Menu className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-4 ml-auto">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                            JS
                        </div>
                    </div>
                </header>

                <div className="flex-1 p-6 md:p-8 overflow-y-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
