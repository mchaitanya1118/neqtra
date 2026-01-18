import { useAuth } from "@/hooks/use-auth";
import { Redirect } from "wouter";

interface ProtectedRouteProps {
    component: React.ComponentType<any>;
    [key: string]: any;
}

export function ProtectedRoute({ component: Component, ...rest }: ProtectedRouteProps) {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return null; // Or a loading spinner
    }

    if (!isAuthenticated) {
        return <Redirect to="/login" />;
    }

    return <Component {...rest} />;
}
