import { ConsoleLayout } from "@/components/layout/ConsoleLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Plus,
    ArrowRight,
    Zap,
    Mail,
    FileText,
    Clock,
    MoreHorizontal,
    Play,
    Share2
} from "lucide-react";
import { Link } from "wouter";

export default function ConsoleDashboard() {
    const templates = [
        {
            title: "Webhook to Slack",
            description: "Post a message to Slack whenever a webhook is called.",
            icon: Zap,
            color: "text-orange-500",
            bg: "bg-orange-500/10"
        },
        {
            title: "Google Forms to Email",
            description: "Send an email notification on new form submission.",
            icon: Mail,
            color: "text-blue-500",
            bg: "bg-blue-500/10"
        },
        {
            title: "Daily Report Generator",
            description: "Fetch data and generate a summary report every morning.",
            icon: Clock,
            color: "text-green-500",
            bg: "bg-green-500/10"
        }
    ];

    const recentWorkflows = [
        { id: 1, name: "Customer Support Triaging", updated: "2 mins ago", status: "Active" },
        { id: 3, name: "SEO Content Generator", updated: "4 hours ago", status: "Active" },
        { id: 2, name: "Data Extraction Pipeline", updated: "2 days ago", status: "Paused" },
    ];

    return (
        <ConsoleLayout>
            <div className="space-y-10 max-w-6xl mx-auto">
                {/* Welcome Section */}
                <div className="space-y-1">
                    <h1 className="text-3xl font-bold tracking-tight">Let's build an automation</h1>
                    <p className="text-muted-foreground text-lg">Create a workflow from scratch or start with a template.</p>
                </div>

                {/* Start from Scratch & Templates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Main "Start from Scratch" Card */}
                    <Link href="/console/workflows/new">
                        <Card className="md:col-span-1 h-full cursor-pointer hover:border-primary transition-colors border-dashed border-2 flex flex-col items-center justify-center p-6 text-center group bg-muted/5">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Plus className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-semibold text-lg">Start from scratch</h3>
                            <p className="text-sm text-muted-foreground mt-2">Design a custom workflow with blank canvas.</p>
                        </Card>
                    </Link>

                    {/* Templates */}
                    {templates.map((template) => (
                        <Card key={template.title} className="cursor-pointer hover:border-primary/50 transition-colors">
                            <CardHeader className="pb-3">
                                <div className={`w-10 h-10 rounded-lg ${template.bg} ${template.color} flex items-center justify-center mb-2`}>
                                    <template.icon className="w-5 h-5" />
                                </div>
                                <CardTitle className="text-base">{template.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="line-clamp-2">
                                    {template.description}
                                </CardDescription>
                                <Button variant="ghost" className="w-full mt-4 justify-between p-0 h-auto hover:bg-transparent text-primary hover:text-primary/80 group">
                                    Use Template <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Recent Workflows */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold tracking-tight">Recent Workflows</h2>
                        <Link href="/console/workflows">
                            <a className="text-sm text-primary hover:underline">View all</a>
                        </Link>
                    </div>

                    <div className="grid gap-4">
                        {recentWorkflows.map((workflow) => (
                            <Link key={workflow.id} href={`/console/workflows/${workflow.id}`}>
                                <Card className="hover:bg-muted/5 transition-colors cursor-pointer">
                                    <div className="p-4 flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="p-2 bg-primary/5 rounded-md">
                                                <Share2 className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold">{workflow.name}</h4>
                                                <div className="text-sm text-muted-foreground flex items-center gap-2">
                                                    Edited {workflow.updated}
                                                    <span className="text-xs text-muted-foreground">•</span>
                                                    <span className={workflow.status === 'Active' ? "text-green-500" : "text-yellow-500"}>
                                                        {workflow.status}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Button variant="ghost" size="icon" onClick={(e) => e.preventDefault()}>
                                                <Play className="w-4 h-4 opacity-70" />
                                            </Button>
                                            <Button variant="ghost" size="icon" onClick={(e) => e.preventDefault()}>
                                                <MoreHorizontal className="w-4 h-4 opacity-70" />
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </ConsoleLayout>
    );
}
