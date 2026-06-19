import { use, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Register = () => {

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: ""
  });

  const handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(`https://admin-panel-backend-mtq8.onrender.com/api/v1/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });

      let data = await response.json();

      if (response.ok) {
        storeTokenInLS(data.token);
        toast.success(data.message);
        navigate("/login");
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      console.warn(error);
    };
  };

  return <>
    <div className="bg-slate-950 min-h-[calc(100vh-72px)] flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-3xl grid lg:grid-cols-2 overflow-hidden rounded-2xl border border-slate-800 bg-white/5 backdrop-blur-xl shadow-2xl">

        {/* Left Side Image */}
        <div className="hidden lg:flex items-center justify-center bg-slate-900 p-4">
          <img
            src="/images/Register-image.png"
            alt="Register"
            className="w-full h-80 object-cover rounded-xl"
          />
        </div>

        {/* Right Side Form */}
        <div className="p-4 sm:p-5 lg:p-6">
          <h1 className="text-2xl font-bold text-white mb-1">
            Register Here
          </h1>

          <p className="text-sm text-slate-400 mb-4">
            Create your account and get started.
          </p>

          {/* Username */}
          <div className="mb-2.5">
            <p className="text-sm text-slate-300 mb-1">Username</p>
            <input
              type="text"
              placeholder="Enter username"
              name="username"
              required
              value={user.username}
              onChange={handleOnChange}
              className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Email */}
          <div className="mb-2.5">
            <p className="text-sm text-slate-300 mb-1">Email</p>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              required
              value={user.email}
              onChange={handleOnChange}
              className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-2.5">
            <p className="text-sm text-slate-300 mb-1">Phone Number</p>
            <input
              type="number"
              placeholder="Enter phone number"
              name="phone"
              required
              value={user.phone}
              onChange={handleOnChange}
              className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <p className="text-sm text-slate-300 mb-1">Password</p>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              required
              value={user.password}
              onChange={handleOnChange}
              className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white outline-none focus:border-blue-500 transition"
            />
          </div>

          <button onClick={handleSubmit} className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-sm font-semibold text-white transition-all duration-300 shadow-lg shadow-blue-600/20">
            Register
          </button>

          <p className="text-center text-xs text-slate-400 mt-3">
            Already have an account?{" "}
            <NavLink to="/login">
              <span className="text-blue-400 cursor-pointer hover:text-blue-300">
                Login
              </span>
            </NavLink>
          </p>
        </div>
      </div>
    </div>

  </>
};

export default Register;