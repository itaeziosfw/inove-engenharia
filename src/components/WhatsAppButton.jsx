import React from "react";
import "./WhatsAppButton.css";
import whatsappIcon from "../assets/whatsapp.png";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5562993622559" 
      className="whatsapp-button pulse"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;
