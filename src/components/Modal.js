import React, { useState } from "react";

const Modal = ({ onSave, onClose }) => {
  const [data, setData] = useState("");

  const handleSave = () => {
    onSave(data);
    onClose();
  };

  return (
    <div className="modal fixed top-0 left-0 w-full h-full bg-slate-900/[0.8] flex justify-center items-center">
      <div className="modal-content bg-white p-5 rounded-md shadow-md">
        <h1 className="text-lg text-indigo-500 font-bold mb-5 uppercase">
          Add information
        </h1>
        <label className="text-xs text-gray-700">Reason: </label>
        <input
          className="rounded-md mb-3 p-2 w-full border-blue-200 border-[1px]"
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button
          className="py-2 px-4 mr-5 bg-blue-800 text-white rounded-md shadow hover:shadow-lg disabled:bg-gray-500"
          onClick={handleSave}
          disabled={data?.length < 10}
        >
          Save
        </button>
        <button
          className="py-2 px-4 mr-5 bg-gray-900 text-white rounded-md hover:shadow-md"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
