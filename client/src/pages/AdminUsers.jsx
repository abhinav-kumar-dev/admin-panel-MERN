import { useEffect, useState } from "react"; import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AdminUsers = () => {

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [data, setData] = useState([]);

  // Delete Confirmation Modal Logic
  const [showModal, setShowModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  // Fetch All Users
  const getAllusersData = async () => {
    try {
      let response = await fetch("https://admin-panel-backend-mtq8.onrender.com/api/v1/admin/users", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.ok) {
        response = await response.json();
        setData(response.data);
      } else {
        toast.error("Something Went Wrong")
      }
    } catch (error) {
      toast.error("Something Went Wrong");
    };
  };

  // Delete User Logic 

  const deleteuserWithId = async () => {
    try {
      let response = await fetch(`https://admin-panel-backend-mtq8.onrender.com/api/v1/admin/delete/${selectedUserId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.ok) {
        response = await response.json();
        toast.success(response.message);
        setShowModal(false);
        getAllusersData()
      }
    } catch (error) {
      toast.warn("Something Went Wrong");
    }
  }

  useEffect(() => {
    getAllusersData();
  }, [])

  return (
    <>
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-white">
            Users Management
          </h1>

          <p className="text-slate-400 mt-2">
            Manage registered users and perform administrative actions.
          </p>
        </div>

        {/* Table Container */}
        <div className="bg-white/5 backdrop-blur-xl border border-slate-800 rounded-3xl overflow-hidden">

          {/* Header */}
          <div className="grid grid-cols-12 gap-4 bg-white/5 border-b border-slate-800 px-6 py-5">
            <div className="col-span-3 text-slate-300 font-semibold">
              Username
            </div>

            <div className="col-span-4 text-slate-300 font-semibold">
              E-mail
            </div>

            <div className="col-span-2 text-slate-300 font-semibold">
              Phone
            </div>

            <div className="col-span-3 text-center text-slate-300 font-semibold">
              Actions
            </div>
          </div>

          {/* User Row */}
          {data.map((item, index) => {
            return (
              <div key={index} className="grid grid-cols-12 gap-4 items-center px-6 py-5 border-b border-slate-800 hover:bg-white/5 transition-all duration-300">

                <div className="col-span-3 text-white">
                  {item.username}
                </div>

                <div className="col-span-4 text-slate-300 break-all">
                  {item.email}
                </div>

                <div className="col-span-2 text-slate-300">
                  {item.phone}
                </div>

                <div className="col-span-3 flex justify-center gap-2">
                  <Link to={`/admin/users/${item._id.toString()}/edit`}>
                    <button className="cursor-pointer px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition">
                      Update
                    </button>
                  </Link>

                  <button onClick={() => {
                    setSelectedUserId(item._id.toString());
                    setShowModal(true);
                  }} className="cursor-pointer px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition">
                    Delete
                  </button>
                </div>
              </div>
            )
          })}


        </div>
      </div>

      {
        showModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">

            <div className="w-[90%] max-w-md bg-slate-900 border border-slate-700 rounded-3xl p-6">

              <h2 className="text-2xl font-bold text-white mb-3">
                Confirm Delete
              </h2>

              <p className="text-slate-400 mb-6">
                Are you sure you want to delete this user?
                This action cannot be undone.
              </p>

              <div className="flex justify-end gap-3">

                <button
                  onClick={() => setShowModal(false)}
                  className="cursor-pointer px-5 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-white"
                >
                  Cancel
                </button>

                <button
                  onClick={deleteuserWithId}
                  className="cursor-pointer px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white"
                >
                  Delete
                </button>

              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

export default AdminUsers;