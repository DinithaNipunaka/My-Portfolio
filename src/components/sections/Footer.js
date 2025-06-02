import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
      <p className="footer-text">
        Portfolio Version 1.0 | Created by <strong>D.D.N Kumarasiri</strong>
      </p>
      <p className="footer-note">
        ⚠️ This project is personal and can only be edited by the developer.
      </p>
    </footer>
  );
};

export default Footer;
