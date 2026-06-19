import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Login = () => {

  const navigate = useNavigate();

  const { storeTokenInLS } = useAuth();

  const [user, setUser] = useState({
    email: "",
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
      let response = await fetch(`http://localhost:5000/api/v1/login`, {
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
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.warn(error);
    }
  }

  return <>
    <div className="h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl min-h-96 grid lg:grid-cols-2 overflow-hidden rounded-2xl border border-slate-800 bg-white/5 backdrop-blur-xl shadow-2xl">

        {/* Left Side Image */}
        <div className="hidden lg:flex items-center justify-center bg-slate-900 p-4">
          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
            alt="Login"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Right Side Login Form */}
        <div className="flex flex-col justify-center p-6">
          <h1 className="text-2xl font-bold text-white mb-1">
            Login Here
          </h1>

          <p className="text-sm text-slate-400 mb-5">
            Welcome back! Sign in to continue.
          </p>

          {/* Email */}
          <div className="mb-3">
            <p className="text-sm text-slate-300 mb-1">
              Email
            </p>
            <input
              type="email"
              placeholder="Enter email"
              required
              name="email"
              value={user.email}
              onChange={handleOnChange}
              className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <p className="text-sm text-slate-300 mb-1">
              Password
            </p>
            <input
              type="password"
              placeholder="Enter password"
              required
              name="password"
              value={user.password}
              onChange={handleOnChange}
              className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white outline-none focus:border-blue-500 transition"
            />
          </div>

          <button onClick={handleSubmit} className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-all duration-300 shadow-lg shadow-blue-600/20">
            Login
          </button>

          <p className="text-center text-xs text-slate-400 mt-4">
            Don't have an account?{" "}
            <NavLink to="/register">
              <span className="text-blue-400 cursor-pointer hover:text-blue-300">
                Register
              </span>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  </>
};

export default Login;