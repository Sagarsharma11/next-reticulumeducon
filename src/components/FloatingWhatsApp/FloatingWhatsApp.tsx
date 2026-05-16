"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
    const phoneNumber = "918862851969";
    const message = "Hello, I want to know more about MBBS counseling";

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group flex flex-col items-center gap-1"
        >
            <div className="relative flex items-center justify-center">

                {/* Pulse effect */}
                <span className="absolute inline-flex h-16 w-16 rounded-full bg-green-500 opacity-30 animate-ping"></span>

                {/* Button */}
                <div className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 transform hover:scale-110">
                    <FaWhatsapp size={34} />
                </div>
            </div>

            {/* Bold text below */}
            <span className="text-[11px] font-bold text-green-600 tracking-wide drop-shadow-sm">
                Chat Us
            </span>
        </a>
    );
}