import { WorkflowEditor } from "@/components/workflow/WorkflowEditor";
import { GlobalSidebar } from "@/components/layout/GlobalSidebar";

export default function WorkflowEditorPage() {
    return (
        <div className="flex bg-[#121212]">
            <GlobalSidebar />
            <div className="flex-1 h-screen overflow-hidden">
                <WorkflowEditor />
            </div>
        </div>
    );
}
