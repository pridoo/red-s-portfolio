import React from "react";
import "./Topbar.css";

function Topbar() {
  const emailAddress = "cabatoalfred725@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    alert("Email copied to clipboard!");
  };

  return (
    <div className="topbar">
      <div className="left">
        <span className="email">{emailAddress}</span>
        <button className="copy-btn" onClick={handleCopyEmail}>Copy</button>
      </div>

      <div className="right">
  
        <a href="https://www.linkedin.com/in/alfred-cabato-92b509369/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <span>/</span>
        <a href="https://www.facebook.com/alfred.cabatoii" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <span>/</span>
        <a href="https://www.instagram.com/__prido/" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
    </div>
  );
}

export default Topbar;