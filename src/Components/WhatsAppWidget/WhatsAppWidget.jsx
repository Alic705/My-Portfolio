import React from 'react';
import { SiWhatsapp } from 'react-icons/si';
import './WhatsAppWidget.css';

const WhatsAppWidget = () => {
  return (
    <a
      href="https://wa.me/923157324013"
      className="whatsapp-widget"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <SiWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppWidget;
