import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <nav className="bg-white/10 backdrop-blur-xl border border-slate-700/50 rounded-2xl px-3 py-3 shadow-2xl">
        <ul className="flex items-center gap-2">

          <li>
            <NavLink
              to="/admin"
              end
              className={({ isActive }) =>
                `px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              Uers
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/contacts"
              className={({ isActive }) =>
                `px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              Contacts
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              Home
            </NavLink>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default AdminNavbar;