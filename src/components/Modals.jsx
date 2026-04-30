import React, { useRef, useEffect } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick ";

const Modal = ({ open, onClose }) => {
  const modalRef = useRef(null);

  useOutsideClick(modalRef, onClose, open);


  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div
        ref={modalRef}
        className="bg-white p-6 rounded-xl w-[350px]"
      >
        <h2 className="text-lg font-semibold mb-2">Modal</h2>
        <p className="text-sm text-gray-500">
          This is your modal under SearchBar
        </p>

        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-black text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;