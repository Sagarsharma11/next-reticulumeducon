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
            className="fixed bottom-6 right-6 z-50 group"
        >
            <div className="relative flex items-center justify-center">

                {/* Pulse effect */}
                <span className="absolute inline-flex h-14 w-14 rounded-full bg-green-500 opacity-30 animate-ping"></span>

                {/* Button */}
                <div className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 transform hover:scale-110">
                    <FaWhatsapp size={26} />
                </div>
            </div>
        </a>
    );
}