import React, { useState, useEffect, useRef } from "react";
import profilePic from "../../assets/profile.jpg";
import "./AboutMe.css";
import { FaDownload, FaCheck, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const AboutMe = ({ darkMode }) => {
  const fullText =
    "Passionate IT undergraduate skilled in full-stack web development (React, Angular, PHP, Laravel). Builds responsive, scalable applications with strong database and API expertise. Problem-solver with Git proficiency, eager to deliver innovative solutions in a team environment.";

  const [text, setText] = useState("");
  const [btnText, setBtnText] = useState("Download My CV");
  const [btnIcon, setBtnIcon] = useState(<FaDownload />);
  const [showSocial, setShowSocial] = useState(false);
  const indexRef = useRef(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const typing = setInterval(() => {
      if (indexRef.current < fullText.length) {
        setText(fullText.slice(0, indexRef.current + 1));
        indexRef.current += 1;
      } else {
        clearInterval(typing);
        setShowSocial(true);
      }
    }, 30);

    return () => clearInterval(typing);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleButtonClick = () => {
    setBtnText("Generating...");
    setBtnIcon(<span className="loading-dots"></span>);
    
    setTimeout(() => {
      setBtnText("Downloaded!");
      setBtnIcon(<FaCheck />);
      
      setTimeout(() => {
        setBtnText("Download My CV");
        setBtnIcon(<FaDownload />);
      }, 2000);
    }, 1500);
  };

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/DinithaNipunaka", name: "GitHub" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/dinitha-nipunaka-28178731b", name: "LinkedIn" },
    { icon: <FaWhatsapp />, url: "https://wa.me/94712345678", name: "WhatsApp" }
    
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`about-section ${darkMode ? "dark" : "light"}`}
    >
      <div className="profile-container">
        <div className="profile-img-wrapper">
          <img
            src={profilePic}
            alt="Dinitha Nipunaka"
            className="profile-img"
          />
          <div className="profile-glow"></div>
        </div>
      </div>

      <div className="content-container">
        <div className="text-content">
          <div className="title-group">
            <h1 className="name-title">Dinitha Nipunaka</h1>
            <p className="subtitle">Full Stack Developer</p>
            <div className="title-decoration"></div>
          </div>

          <div className={`text-box ${darkMode ? "dark" : "light"}`}>
            <p className="about-description">
              {text}
              <span className="typing-cursor">|</span>
            </p>
          </div>

          <div className="action-buttons">
            <a
              href="/Full Stack Developer.pdf"
              className="cv-button"
              download
              onClick={handleButtonClick}
            >
              <span className="button-icon">{btnIcon}</span>
              {btnText}
            </a>

            {showSocial && (
              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;