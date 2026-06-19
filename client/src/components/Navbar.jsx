import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Navbar = () => {

  const { isLoggedIn } = useAuth();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const logoutToast = () => {
    toast.success("You Are Logged Out");
  }

  return (
    <nav className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-15">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-3xl font-extrabold bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
          >
            AdminHub
          </NavLink>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Login Button */}

            {isLoggedIn ? <NavLink
              to="/logout"
              onClick={logoutToast}
              className={({ isActive }) =>
                `px-5 py-2 rounded-xl font-medium transition-all duration-300 ${isActive
                  ? "bg-cyan-500 text-slate-950"
                  : "bg-blue-600 text-white hover:bg-blue-700"
                }`
              }
            >
              Logout
            </NavLink> : <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `px-5 py-2 rounded-xl border font-medium transition-all duration-300 ${isActive
                    ? "border-blue-500 bg-blue-500/10 text-blue-400"
                    : "border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-400"
                  }`
                }
              >
                Login
              </NavLink>

              {/* Register Button */}
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `px-5 py-2 rounded-xl font-medium transition-all duration-300 ${isActive
                    ? "bg-cyan-500 text-slate-950"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                  }`
                }
              >
                Register
              </NavLink>
            </>}

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;