import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
    const isAuthenticated =
        sessionStorage.getItem("isAuthenticated") === "true";

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}
