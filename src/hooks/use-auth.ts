import { useState, useEffect } from "react";

export function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem("token");
            setIsAuthenticated(!!token);
            setIsLoading(false);
        };

        checkAuth();

        // Listen for storage events to sync across tabs
        window.addEventListener('storage', checkAuth);

        // Custom event for same-tab updates if needed (optional but helpful)
        window.addEventListener('auth-change', checkAuth);

        return () => {
            window.removeEventListener('storage', checkAuth);
            window.removeEventListener('auth-change', checkAuth);
        };
    }, []);

    return { isAuthenticated, isLoading };
}
