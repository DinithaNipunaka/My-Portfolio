import React from "react";
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

const Contact = ({ darkMode }) => {
  const contactItems = [
    {
      icon: <FaPhone />,
      label: "Phone",
      detail: "+94 77 1631 321",
      link: "tel:+9477 1631 321",
      color: "#3b82f6",
    },
      {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      detail: "+94 71 0852 093",
      link: "https://wa.me/94710852093",
      color: "#25D366", 
  },
    {
      icon: <FaEnvelope />,
      label: "Email",
      detail: "dinithanipunaka181@gmail.com",
      link: "mailto:dinithanipunaka181@gmail.com",
      color: "#ef4444",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Address",
      detail: "No 65, 2nd Lane, Kandurata Sandella, Mailapitiya",
      link: "https://maps.google.com",
      color: "#10b981",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      detail: "dinitha-nipunaka",
      link: "https://www.linkedin.com/in/dinitha-nipunaka-28178731b",
      color: "#0a66c2",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      detail: "DinithaNipunaka",
      link: "https://github.com/DinithaNipunaka",
      color: "#333",
    },
  ];

  return (
    <section id="contact" className={`contact-section ${darkMode ? "dark" : "light"}`}>
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Feel free to reach out through any of these channels</p>
        
        <div className="contact-grid">
          {contactItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              style={{ "--icon-color": item.color }}
              aria-label={item.label}
            >
              <div className="contact-icon">
                {item.icon}
              </div>
              <div className="contact-info">
                <h3 className="contact-label">{item.label}</h3>
                <p className="contact-detail">{item.detail}</p>
              </div>
            </a>
          ))}
        </div>
        
        
      </div>
    </section>
  );
};

export default Contact;