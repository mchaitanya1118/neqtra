import { ConsoleLayout } from "@/components/layout/ConsoleLayout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
    Plus,
    Play,
    Pause,
    MoreHorizontal,
    Search,
    Filter,
    ArrowUpDown
} from "lucide-react";
import { useState } from "react";

export default function WorkflowList() {
    const [searchTerm, setSearchTerm] = useState("");

    const workflows = [
        {
            id: 1,
            name: "Customer Support Triaging",
            status: true,
            tags: ["Support", "Production"],
            updated: "2 mins ago",
            executions: 1245
        },
        {
            id: 2,
            name: "Data Extraction Pipeline",
            status: false,
            tags: ["Data", "Test"],
            updated: "2 days ago",
            executions: 89
        },
        {
            id: 3,
            name: "SEO Content Generator",
            status: true,
            tags: ["Marketing"],
            updated: "4 hours ago",
            executions: 456
        },
        {
            id: 4,
            name: "Lead Qualification",
            status: true,
            tags: ["Sales", "Production"],
            updated: "1 week ago",
            executions: 892
        }
    ];

    const filteredWorkflows = workflows.filter(w =>
        w.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <ConsoleLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Workflows</h2>
                        <p className="text-muted-foreground">Manage and monitor your automation pipelines.</p>
                    </div>
                    <Link href="/console/workflows/new">
                        <Button className="font-medium gap-2">
                            <Plus className="w-4 h-4" />
                            New Workflow
                        </Button>
                    </Link>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-4 bg-card p-2 rounded-lg border border-border">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search workflows..."
                            className="pl-9 border-0 bg-transparent focus-visible:ring-0"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="h-6 w-px bg-border mx-2" />
                    <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
                        <Filter className="w-4 h-4" />
                        Tags
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
                        <ArrowUpDown className="w-4 h-4" />
                        Sort
                    </Button>
                </div>

                {/* Table */}
                <div className="border border-border rounded-lg overflow-hidden bg-card">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-muted/50 hover:bg-muted/50">
                                <TableHead className="w-[50px]"></TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Tags</TableHead>
                                <TableHead>Executions</TableHead>
                                <TableHead>Last Updated</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredWorkflows.map((workflow) => (
                                <TableRow key={workflow.id} className="group cursor-pointer hover:bg-muted/20">
                                    <TableCell className="text-center font-mono text-xs text-muted-foreground">
                                        #{workflow.id}
                                    </TableCell>
                                    <TableCell>
                                        <Link href={`/console/workflows/${workflow.id}`}>
                                            <a className="font-medium hover:underline text-primary">
                                                {workflow.name}
                                            </a>
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Switch checked={workflow.status} />
                                            <span className={`text-xs ${workflow.status ? 'text-green-500' : 'text-muted-foreground'}`}>
                                                {workflow.status ? 'Active' : 'Inactive'}
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex gap-1 flex-wrap">
                                            {workflow.tags.map(tag => (
                                                <Badge key={tag} variant="secondary" className="text-xs font-normal">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-1 text-muted-foreground">
                                            <Play className="w-3 h-3" />
                                            {workflow.executions.toLocaleString()}
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-muted-foreground">
                                        {workflow.updated}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                                            <MoreHorizontal className="w-4 h-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </ConsoleLayout>
    );
}
