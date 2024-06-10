// Footer.jsx
import React from "react";
import IconLogo from "../../image/logo2.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerItems">
        <div className="githubLogo">
          <img src={IconLogo} alt="Footer Image" className="footerImage" />
        </div>
        <div className="githubLink">
          Check our Best Clubs in LA  !{" "}
          <a href="h">Party</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
