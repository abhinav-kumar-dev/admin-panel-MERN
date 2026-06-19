import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateUser = () => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [data, setData] = useState({
        username: "",
        email: "",
        phone: ""
    });

    const params = useParams();
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const getUserDataById = async () => {
        try {
            let response = await fetch(`http://localhost:5000/api/v1/admin/getuser/${params.id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.ok) {
                response = await response.json();
                if (response.success) {
                    setData({
                        username: response.data.username,
                        email: response.data.email,
                        phone: response.data.phone,
                    });
                }
            }
        } catch (error) {
            toast.warn("Something Went Wrong");
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let response = await fetch(`http://localhost:5000/api/v1/admin/updateuser/${params.id}`,{
                method: "PUT",
                headers: {
                    "Content-Type" : "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    username: data.username,
                    email: data.email,
                    phone: data.phone
                })
            });

            if(response.ok){
                response = await response.json();
                toast.success(response.message);
                navigate("/admin")
            }else{
                toast.error("Something Went Wrong");
            }
        } catch (error) {
            toast.warn("Something Went Wrong");
        }
    }

    useEffect(() => {
        getUserDataById();
    }, [])
    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
            <div className="w-full max-w-2xl">

                {/* Heading */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white">
                        Update User
                    </h1>

                    <p className="text-slate-400 mt-2">
                        Modify user details and save changes.
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white/5 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-xl">

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Username */}
                        <div>
                            <label className="block text-slate-300 mb-2 font-medium">
                                Username
                            </label>

                            <input
                                type="text"
                                name="username"
                                value={data.username}
                                onChange={handleOnChange}
                                placeholder="Enter username"
                                className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-slate-300 mb-2 font-medium">
                                E-mail
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={handleOnChange}
                                placeholder="Enter email"
                                className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-slate-300 mb-2 font-medium">
                                Phone
                            </label>

                            <input
                                type="text"
                                name="phone"
                                value={data.phone}
                                onChange={handleOnChange}
                                placeholder="Enter phone number"
                                className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
                            />
                        </div>

                        {/* Update Button */}
                        <button
                            type="submit"
                            className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300"
                        >
                            Update User
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateUser;