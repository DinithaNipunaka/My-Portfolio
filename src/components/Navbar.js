import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: "about", label: "About Me" },
    { id: "Education", label: "Education" },
    { id: "Certifications", label: "Certifications" },
    { id: "experience", label: "Skill" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav className={`navbar navbar-expand-lg fixed-top navbar-dark bg-dark glowing-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">Dinitha's Portfolio</a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.id}>
                <a 
                  className="nav-link px-2 px-lg-3 py-2" 
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(link.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                    document.getElementById('navbarNav').classList.remove('show');
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="btn btn-outline-light mode-toggle"
                title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
                aria-label={`Toggle ${darkMode ? 'light' : 'dark'} mode`}
              >
                {darkMode ? "☀️ Light" : "🌙 Dark"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;