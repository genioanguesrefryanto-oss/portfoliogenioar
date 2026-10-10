import React, { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="nav-wrapper" data-aos="slide-down" data-aos-duration="1500">
      <nav className="navbar">
        <div className="left-nav">
          <h1>CHELO</h1>
        </div>
        <div className="right-nav">
          <a href="#home"><div className="link-nav">HOME</div></a>
          <a href="#about"><div className="link-nav">ABOUT</div></a>
          <a href="#skills"><div className="link-nav">SKILLS</div></a>
          <a href="#project"><div className="link-nav">PROJECT</div></a>
          <a href="#contact"><div className="link-nav">CONTACT</div></a>
        </div>
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`ham-line ${open ? "open" : ""}`}></span>
          <span className={`ham-line ${open ? "open" : ""}`}></span>
          <span className={`ham-line ${open ? "open" : ""}`}></span>
        </button>
      </nav>
      <div className={`mobile-menu ${open ? "mobile-menu--open" : ""}`}>
        <a href="#home" onClick={() => setOpen(false)}>HOME</a>
        <a href="#about" onClick={() => setOpen(false)}>ABOUT</a>
        <a href="#skills" onClick={() => setOpen(false)}>SKILLS</a>
        <a href="#project" onClick={() => setOpen(false)}>PROJECT</a>
        <a href="#contact" onClick={() => setOpen(false)}>CONTACT</a>
      </div>
    </div>
  );
};

export default Navbar;