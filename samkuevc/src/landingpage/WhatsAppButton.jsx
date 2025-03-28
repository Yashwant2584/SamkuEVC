import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon

const WhatsAppButton = () => {
  const phoneNumber = "+919561137963"; // Replace with your WhatsApp number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-4 md:bottom-10 md:right-8 bg-green-500 text-white p-2 md:p-2.5 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-100"
    >
      <FaWhatsapp className="text-2xl md:text-2xl" /> {/* Bigger Icon */}
    </a>
  );
};

export default WhatsAppButton;
