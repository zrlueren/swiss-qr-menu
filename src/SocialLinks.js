import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a
        href="https://www.instagram.com/swiss_hairdresser?igsh=aDMwMDd1MHI1dHFq"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link instagram"
      >
        <FaInstagram className="icon" /> Instagram
      </a>
      <a
        href="https://wa.me/905437121254"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link whatsapp"
      >
        <FaWhatsapp className="icon" /> WhatsApp
      </a>
    </div>
  );
};

export default SocialLinks;
