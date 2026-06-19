import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <AdminNavbar />

      <div className="pt-28 px-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;