import React, { useState, useEffect } from 'react';
import { SiWhatsapp } from 'react-icons/si';
import './WhatsAppWidget.css';

const WhatsAppWidget = () => {
  const [hasBot, setHasBot] = useState(false);

  useEffect(() => {
    const isBotPresent = () => {
      return Boolean(
        document.getElementById('zanderio-widget-host') ||
        document.querySelector('script[src*="zanderio.ai"]') ||
        document.querySelector('script[data-id="wdg_gQObdOpjtTb3qjycmllWrWDo"]')
      );
    };

    if (isBotPresent()) {
      setHasBot(true);
    } else {
      const observer = new MutationObserver(() => {
        if (isBotPresent()) {
          setHasBot(true);
          observer.disconnect();
        }
      });

      observer.observe(document.body, { childList: true, subtree: true });
      const timeout = setTimeout(() => observer.disconnect(), 6000);

      return () => {
        observer.disconnect();
        clearTimeout(timeout);
      };
    }
  }, []);

  return (
    <a
      href="https://wa.me/923157324013"
      className={`whatsapp-widget ${hasBot ? 'has-bot' : ''}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <SiWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppWidget;
