import React from "react";

const ContactModal = ({ contact, onClose }) => {
  if (!contact) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-lg shadow-2xl">

        {/* Header */}
        <div className="flex justify-between items-center border-b border-slate-700 p-5">
          <h2 className="text-xl font-bold text-white">
            Contact Details
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">

          <div>
            <label className="text-gray-400 text-sm">Username</label>
            <p className="text-white font-medium mt-1">
              {contact.username}
            </p>
          </div>

          <div>
            <label className="text-gray-400 text-sm">Email</label>
            <p className="text-white font-medium mt-1 break-all">
              {contact.email}
            </p>
          </div>

          <div>
            <label className="text-gray-400 text-sm">Message</label>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 mt-2">
              <p className="text-gray-200 whitespace-pre-wrap">
                {contact.message}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-700 p-5 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition"
          >
            Back
          </button>
        </div>

      </div>
    </div>
  );
};

export default ContactModal;