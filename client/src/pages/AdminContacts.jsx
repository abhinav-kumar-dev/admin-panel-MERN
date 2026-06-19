import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ContactModal from "../components/ContactModal";

const AdminContacts = () => {

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [data, setData] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [contactId, setContactId] = useState(null);

  // For Contact Modal
  const [selectedContact, setSelectedContact] = useState(null);

  const getAllContacts = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/v1/admin/contacts", {
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
      };

    } catch (error) {
      toast.error("Something Went Wrong");
    };
  };

  const deleteContact = async (id) => {
    try {
      let response = await fetch(`http://localhost:5000/api/v1/admin/contact/delete/${contactId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.ok) {
        response = await response.json();
        setShowModal(false)
        getAllContacts()
        toast.success(response.message);
      }
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  }

  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <>
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-white">
            Contact Management
          </h1>

          <p className="text-slate-400 mt-2">
            Manage contact form submissions and customer inquiries.
          </p>
        </div>

        {/* Table Container */}
        <div className="bg-white/5 backdrop-blur-xl border border-slate-800 rounded-3xl overflow-hidden">

          {/* Header */}
          <div className="grid grid-cols-12 gap-4 bg-white/5 border-b border-slate-800 px-6 py-5">
            <div className="col-span-2 text-slate-300 font-semibold">
              Username
            </div>

            <div className="col-span-3 text-slate-300 font-semibold">
              E-mail
            </div>

            <div className="col-span-4 text-slate-300 font-semibold">
              Message
            </div>

            <div className="col-span-3 text-center text-slate-300 font-semibold">
              Actions
            </div>
          </div>

          {/* Contact Row 1 */}

          {data.map((item, index) => {
            return (
              <div key={index} className="grid grid-cols-12 gap-4 items-center px-6 py-5 border-b border-slate-800 hover:bg-white/5 transition-all duration-300">

                <div className="col-span-2 text-white">
                  {item.username}
                </div>

                <div className="col-span-3 text-slate-300 break-all">
                  {item.email}
                </div>

                <div className="col-span-4 text-slate-300">
                  {item.message.length <= 35 ? item.message : `${item.message.slice(0, 31)}...`}
                </div>

                <div className="col-span-3 flex justify-center gap-2">

                  <button
                    onClick={() => setSelectedContact(item)}
                    className="cursor-pointer px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition">
                    View
                  </button>

                  <button onClick={() => {
                    setShowModal(true);
                    setContactId(item._id.toString());

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
                Are you sure you want to delete this Message?
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
                  onClick={deleteContact}
                  className="cursor-pointer px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white"
                >
                  Delete
                </button>

              </div>
            </div>
          </div>
        )
      }

      <ContactModal
        contact={selectedContact}
        onClose={() => setSelectedContact(null)}
      />
    </>
  );
};

export default AdminContacts;