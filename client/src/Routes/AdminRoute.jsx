import { useAuth } from "../store/auth";
import { Outlet, Navigate } from "react-router-dom";

const AdminRoute = () => {
    const { userData } = useAuth();

    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // Loading Variable
    if (!userData) {
        return <p>Loading...</p>;
    }

    if (!userData?.isAdmin) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default AdminRoute;