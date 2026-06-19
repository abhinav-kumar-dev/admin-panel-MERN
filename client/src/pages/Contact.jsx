import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Contact = () => {
  const { userData } = useAuth();

  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: ""
  });


  const handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setContact({ ...contact, [name]: value });
  };

  useEffect(() => {
    setContact((prev) => ({
      ...prev,
      username: userData?.username || "",
      email: userData?.email || "",
    }));
  }, [userData]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch("https://admin-panel-backend-mtq8.onrender.com/api/v1/contact",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(contact)
      });

      if(response.ok){
        response = await response.json();
        toast.success(response.message);
        setContact({...contact,message:""});
      };
    } catch (error) {
      toast.error(`${error.message}`)
    };
  };

  return (
    <div className="bg-slate-950 min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 overflow-hidden rounded-2xl border border-slate-800 bg-white/5 backdrop-blur-xl shadow-2xl">

        {/* Left Side Image */}
        <div className="hidden lg:flex items-center justify-center bg-slate-900 p-4">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692"
            alt="Contact Us"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Right Side Form */}
        <div className="p-6 lg:p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-white mb-2">
            Contact Us
          </h1>

          <p className="text-slate-400 mb-6">
            Have a project in mind or need assistance? We'd love to hear from you.
          </p>

          {/* Username */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={contact.username}
              required
              onChange={handleOnChange}
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={contact.email}
              required
              onChange={handleOnChange}
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Message */}
          <div className="mb-5">
            <textarea
              rows="5"
              placeholder="Write your message here..."
              name="message"
              value={contact.message}
              required
              onChange={handleOnChange}
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white outline-none focus:border-blue-500 transition resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <button
            onClick={handleSubmit}
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300 shadow-lg shadow-blue-600/20">
            Send Message
          </button>

          <p className="text-center text-sm text-slate-500 mt-4">
            We usually respond within 24 hours.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Contact;
