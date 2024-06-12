// Footer.jsx
import React from "react";
import IconLogo from "../assets/image/logo2.png";
import "../stylesheet/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerItems">
        <div>
          <img src={IconLogo} alt="Footer Image" className="footerImage" />
        </div>
        <div >
          <a href= "/about"  >About Us </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

