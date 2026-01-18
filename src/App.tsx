import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { Suspense, lazy } from "react";
import { Loader2 } from "lucide-react";

// Website Pages (Lazy Load)
const Home = lazy(() => import("@/apps/website/pages/home"));
const Platform = lazy(() => import("@/apps/website/pages/platform"));
const Solutions = lazy(() => import("@/apps/website/pages/solutions"));
const Developers = lazy(() => import("@/apps/website/pages/developers"));
const Enterprise = lazy(() => import("@/apps/website/pages/enterprise"));
const Pricing = lazy(() => import("@/apps/website/pages/pricing"));
const Privacy = lazy(() => import("@/apps/website/pages/privacy"));
const Terms = lazy(() => import("@/apps/website/pages/terms"));
const NotFound = lazy(() => import("@/apps/website/pages/not-found"));

// Auth Pages (Lazy Load)
const Login = lazy(() => import("@/apps/console/pages/auth/login"));
const Signup = lazy(() => import("@/apps/console/pages/auth/signup"));

// Console Pages (Lazy Load)
const ConsoleDashboard = lazy(() => import("@/apps/console/pages/console"));
const WorkflowList = lazy(() => import("@/apps/console/pages/console/workflows"));
const WorkflowEditorPage = lazy(() => import("@/apps/console/pages/console/workflow-editor"));

// Loading Component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <Loader2 className="w-8 h-8 animate-spin text-primary" />
  </div>
);

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        {/* Website Routes */}
        <Route path="/" component={Home} />
        <Route path="/platform" component={Platform} />
        <Route path="/solutions" component={Solutions} />
        <Route path="/developers" component={Developers} />
        <Route path="/enterprise" component={Enterprise} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />

        {/* Auth Routes */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />

        {/* Console Routes */}
        <Route path="/console">
          <ProtectedRoute component={ConsoleDashboard} />
        </Route>
        <Route path="/console/workflows">
          <ProtectedRoute component={WorkflowList} />
        </Route>
        <Route path="/console/workflows/:id">
          {(params) => <ProtectedRoute component={WorkflowEditorPage} params={params} />}
        </Route>

        {/* Catch-all */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
