"use client";
import { useState } from "react";
import Modal from "./Modal";
import CounsellingForm from "../CounsellingForm/CounsellingForm";
import { sendToWhatsApp } from "../../utils/helper";
import { FiX } from "react-icons/fi";

export default function CounsellingModal({ open, setOpen }: any) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        neetScore: "",
        twelfthPercent: "",
        country: "",
        university: "",
        query: ""
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Modal isOpen={open} onClose={() => setOpen(false)}>
            <div className="relative w-full">
                <button
                    onClick={() => setOpen(false)}
                    className="absolute top-3 right-3 z-20 bg-white border border-gray-200 rounded-full p-1.5 shadow-md text-gray-400 hover:text-orange-600 hover:border-orange-300 transition-all cursor-pointer"
                >
                    <FiX size={18} />
                </button>

                <CounsellingForm
                    formData={formData}
                    handleChange={handleChange}
                    sendToWhatsApp={sendToWhatsApp}
                />
            </div>
        </Modal>
    );
}