import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { useState } from "react";
import {
    Home,
    User,
    MessageSquare,
    LayoutTemplate,
    BarChart2,
    HelpCircle,
    Settings,
    Plus,
    Search,
    PanelLeft,
    ChevronRight,
    Users,
    Shield,
    Terminal,
    Key,
    Globe,
    Lock,
    Network,
    ScrollText,
    Box,
    FileText,
    LogOut,
    CreditCard
} from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";

interface GlobalSidebarProps {
    className?: string;
}

export function GlobalSidebar({ className }: GlobalSidebarProps) {
    const [location, setLocation] = useLocation();
    const [isCollapsed, setIsCollapsed] = useState(false);

    // Mock location for visual matching if needed, or rely on actual routing
    const isActive = (path: string) => location === path || (path === '/console' && location === '/console/');

    return (
        <aside
            className={cn(
                "bg-[#e9ecef] border-r border-black/10 flex flex-col justify-between text-black h-screen font-sans select-none z-50 transition-all duration-300 ease-in-out",
                isCollapsed ? 'w-[68px]' : 'w-[240px]',
                className
            )}
        >
            <div>
                {/* Header / Logo Area */}
                <div className={`h-14 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between px-4'}`}>
                    {!isCollapsed && (
                        <div className="flex items-center gap-2">
                            <div className="text-primary">
                                {/* Simple node-like logo to match n8n style */}
                                {/* Simple node-like logo to match n8n style */}
                                <img src="/logo.svg" alt="Neqtra Logo" className="w-6 h-6" />
                            </div>
                            <span className="font-bold tracking-tight text-black text-[15px]">neqtra</span>
                        </div>
                    )}

                    {/* Collapsed Logo */}
                    {isCollapsed && (
                        <div className="text-primary">
                            <img src="/logo.svg" alt="Neqtra Logo" className="w-6 h-6" />
                        </div>
                    )}

                    {!isCollapsed && (
                        <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon" className="h-7 w-7 text-black/70 hover:text-black hover:bg-black/10 rounded-md">
                                <Plus className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-7 w-7 text-black/70 hover:text-black hover:bg-black/10 rounded-md">
                                <Search className="w-4 h-4" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-7 w-7 text-black/70 hover:text-black hover:bg-black/10 rounded-md"
                                onClick={() => setIsCollapsed(!isCollapsed)}
                            >
                                <PanelLeft className="w-4 h-4" />
                            </Button>
                        </div>
                    )}
                </div>

                {/* Collapsed Actions (Plus, Search, Toggle) */}
                {isCollapsed && (
                    <div className="flex flex-col items-center gap-1 mb-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-black/70 hover:text-black hover:bg-black/10 rounded-md"
                        >
                            <Plus className="w-4 h-4" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-black/70 hover:text-black hover:bg-black/10 rounded-md"
                        >
                            <Search className="w-4 h-4" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-black/70 hover:text-black hover:bg-black/10 rounded-md"
                            onClick={() => setIsCollapsed(!isCollapsed)}
                        >
                            <PanelLeft className="w-4 h-4" />
                        </Button>
                    </div>
                )}

                {/* Main Menu */}
                <div className="px-2 py-2 space-y-1">
                    <Link href="/console">
                        <a
                            className={`
                                flex items-center gap-3 px-3 py-2 rounded-md text-[14px] font-medium transition-colors 
                                ${location === '/console' ? 'bg-black/10 text-black' : 'text-black/80 hover:bg-black/5 hover:text-black'}
                                ${isCollapsed ? 'justify-center px-2' : ''}
                            `}
                            title={isCollapsed ? "Overview" : ""}
                        >
                            <Home className="w-[18px] h-[18px]" />
                            {!isCollapsed && "Overview"}
                        </a>
                    </Link>

                    <Link href="/console/workflows">
                        <a
                            className={`
                                flex items-center gap-3 px-3 py-2 rounded-md text-[14px] font-medium transition-colors 
                                ${location.includes('/workflows') ? 'bg-black/10 text-black' : 'text-black/80 hover:bg-black/5 hover:text-black'}
                                ${isCollapsed ? 'justify-center px-2' : ''}
                            `}
                            title={isCollapsed ? "Personal" : ""}
                        >
                            <User className="w-[18px] h-[18px]" />
                            {!isCollapsed && "Personal"}
                        </a>
                    </Link>

                    <Link href="/console/chat">
                        <a
                            className={`
                                flex items-center gap-3 px-3 py-2 rounded-md text-[14px] font-medium text-black/80 hover:bg-black/5 hover:text-black transition-colors
                                ${isCollapsed ? 'justify-center px-2' : ''}
                            `}
                            title={isCollapsed ? "Chat" : ""}
                        >
                            <MessageSquare className="w-[18px] h-[18px]" />
                            {!isCollapsed && (
                                <>
                                    Chat
                                    <span className="ml-2 text-[10px] bg-[#dcdcf9] text-[#5c5cff] px-1.5 py-0.5 rounded-sm font-bold leading-none">
                                        beta
                                    </span>
                                </>
                            )}
                        </a>
                    </Link>
                </div>
            </div>

            {/* Bottom Menu */}
            <div className="px-2 py-2 space-y-1 pb-4">
                <Link href="/templates">
                    <a
                        className={`
                            flex items-center gap-3 px-3 py-2 rounded-md text-[14px] font-medium text-black/80 hover:bg-black/5 hover:text-black transition-colors
                            ${isCollapsed ? 'justify-center px-2' : ''}
                        `}
                        title={isCollapsed ? "Templates" : ""}
                    >
                        <LayoutTemplate className="w-[18px] h-[18px]" />
                        {!isCollapsed && "Templates"}
                    </a>
                </Link>

                <Link href="/insights">
                    <a
                        className={`
                            flex items-center gap-3 px-3 py-2 rounded-md text-[14px] font-medium text-black/80 hover:bg-black/5 hover:text-black transition-colors
                            ${isCollapsed ? 'justify-center px-2' : ''}
                        `}
                        title={isCollapsed ? "Insights" : ""}
                    >
                        <BarChart2 className="w-[18px] h-[18px]" />
                        {!isCollapsed && "Insights"}
                    </a>
                </Link>

                <Link href="/help">
                    <a
                        className={`
                            flex items-center gap-3 px-3 py-2 rounded-md text-[14px] font-medium text-black/80 hover:bg-black/5 hover:text-black transition-colors group
                            ${isCollapsed ? 'justify-center px-2' : 'justify-between'}
                        `}
                        title={isCollapsed ? "Help" : ""}
                    >
                        <div className="flex items-center gap-3 relative">
                            <HelpCircle className="w-[18px] h-[18px]" />
                            {!isCollapsed && "Help"}
                            {/* Red dot notification */}
                            <span className={`absolute top-0 right-0 w-1.5 h-1.5 bg-primary rounded-full border border-black/10 ${isCollapsed ? '-right-1 -top-1' : 'left-3'}`}></span>
                        </div>
                        {!isCollapsed && <ChevronRight className="w-4 h-4 text-black/30 group-hover:text-black/70" />}
                    </a>
                </Link>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button
                            className={`
                                flex items-center gap-3 px-3 py-2 rounded-md text-[14px] font-medium text-black/80 hover:bg-black/5 hover:text-black transition-colors group w-full outline-none
                                ${isCollapsed ? 'justify-center px-2' : 'justify-between'}
                            `}
                            title={isCollapsed ? "Settings" : ""}
                        >
                            <div className="flex items-center gap-3">
                                <Settings className="w-[18px] h-[18px]" />
                                {!isCollapsed && "Settings"}
                            </div>
                            {!isCollapsed && <ChevronRight className="w-4 h-4 text-black/30 group-hover:text-black/70" />}
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        side="right"
                        align="end"
                        className="w-56 bg-[#e9ecef] border border-black/10 text-black p-1"
                        sideOffset={10}
                    >
                        <DropdownMenuItem className="focus:bg-black/5 focus:text-black cursor-pointer gap-2 px-3 py-2">
                            <CreditCard className="w-4 h-4" />
                            <span>Usage and plan</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="focus:bg-black/5 focus:text-black cursor-pointer gap-2 px-3 py-2">
                            <User className="w-4 h-4" />
                            <span>Personal</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="focus:bg-black/5 focus:text-black cursor-pointer gap-2 px-3 py-2">
                            <Users className="w-4 h-4" />
                            <span>Users</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="focus:bg-black/5 focus:text-black cursor-pointer gap-2 px-3 py-2">
                            <Shield className="w-4 h-4" />
                            <span>Project roles</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="focus:bg-black/5 focus:text-black cursor-pointer gap-2 px-3 py-2">
                            <Terminal className="w-4 h-4" />
                            <span>n8n API</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="focus:bg-black/5 focus:text-black cursor-pointer gap-2 px-3 py-2">
                            <Key className="w-4 h-4" />
                            <span>External Secrets</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="focus:bg-black/5 focus:text-black cursor-pointer gap-2 px-3 py-2">
                            <Globe className="w-4 h-4" />
                            <span>Environments</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="focus:bg-black/5 focus:text-black cursor-pointer gap-2 px-3 py-2">
                            <Lock className="w-4 h-4" />
                            <span>SSO</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="focus:bg-black/5 focus:text-black cursor-pointer gap-2 px-3 py-2">
                            <Network className="w-4 h-4" />
                            <span>LDAP</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="focus:bg-black/5 focus:text-black cursor-pointer gap-2 px-3 py-2">
                            <ScrollText className="w-4 h-4" />
                            <span>Log Streaming</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="focus:bg-black/5 focus:text-black cursor-pointer gap-2 px-3 py-2">
                            <Box className="w-4 h-4" />
                            <span>Community nodes</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="focus:bg-black/5 focus:text-black cursor-pointer gap-2 px-3 py-2">
                            <FileText className="w-4 h-4" />
                            <span>Migration Report</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="focus:bg-black/5 focus:text-black cursor-pointer gap-2 px-3 py-2">
                            <LayoutTemplate className="w-4 h-4" />
                            <span>Instance-level MCP</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="focus:bg-black/5 focus:text-black cursor-pointer gap-2 px-3 py-2">
                            <MessageSquare className="w-4 h-4" />
                            <span>Chat</span>
                        </DropdownMenuItem>

                        <DropdownMenuSeparator className="bg-black/10 my-1" />

                        <DropdownMenuItem
                            className="focus:bg-black/5 focus:text-black cursor-pointer gap-2 px-3 py-2"
                            onClick={() => {
                                localStorage.removeItem("token");
                                window.dispatchEvent(new Event("auth-change"));
                                setLocation("/");
                            }}
                        >
                            <LogOut className="w-4 h-4" />
                            <span>Sign out</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </aside>
    );
}
