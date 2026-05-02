import React, { useRef } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick ";

const Sidebar = ({ open, onClose }) => {
  const sideRef = useRef(null);

  useOutsideClick(sideRef, onClose, open);

  return (
    <div className={`fixed inset-0 z-50 ${open ? "block" : "hidden"}`}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div
        ref={sideRef}
        className={`absolute top-0 left-0 h-full w-[260px] bg-white p-5 shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
        <ul className="space-y-2">
          <li>Home</li>
          <li>Profile</li>
          <li>Settings</li>
        </ul>
        <button
          onClick={onClose}
          className="mt-5 px-3 py-2 bg-black text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Sidebar;