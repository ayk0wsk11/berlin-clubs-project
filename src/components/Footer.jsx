import React from "react";
import "../stylesheet/Footer.css";

const Footer = () => {
  return (
    <footer id="footerbar">
      <a href="/about">
        about:<span id="berlin-title-f">berlin</span>
        <span id="clubs-title-f">
          <b>clubs</b>
        </span>
      </a>
    </footer>
  );
};

export default Footer;
