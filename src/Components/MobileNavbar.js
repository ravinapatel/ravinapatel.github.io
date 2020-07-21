import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from '../Images/rp-icon.png';

// MOBILE NAVBAR

function App() {

  // STATE
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }

  // STYLING
  const container = {
    padding: 20
  }

  const leftSection = {
    display: "inline-block",
    textAlign: "left",
    width: "50%"
  }

  const rightSection = {
    display: "inline-block",
    textAlign: "right",
    width: "50%"
  }

  const section = {
    display: "inline-block",
    verticalAlign: "top",
    cursor: "pointer"
  }

  const overlay = {
    position: "fixed",
    display: "block",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "#fff",
    zIndex: "1000"
  }

  const line = {
    position: "sticky",  // need to keep this to prioritize zIndex over the overlay
    borderRadius: "100px",
    width: 20,
    height: 2,
    backgroundColor: "black",
    margin: "6px 0 0 6px",
    zIndex: "1000"
  }

  const hamburger = {
    position: isOpen ? "fixed" : "sticky",
    right: "0%",
    paddingRight: isOpen ? 20 : 0,
    zIndex: "1000"
  }

  const text = {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    fontSize: "50px",
    color: "black",
    transform: "translate(-50%,-50%)", // center text
  }

  const menuLink = {
    display: "block",
    textTransform: "lowercase",
    letterSpacing: "0.03em",
    fontSize: "24px",
    textDecoration: "none",
    fontWeight: "bold",
    color: "#4d4d4d",
    padding: 20
  }

  // RENDERING
  return (
    <div style={container} >
      {/* Menu */}
      <div style={overlay} className={isOpen ? "visible" : "invisible"} >
        <div style={text}>
          <NavLink exact to="/" style={menuLink} className={isOpen ? "visible" : "invisible"} onClick={handleClick}>work</NavLink>
          <NavLink to="/about" style={menuLink} className={isOpen ? "visible" : "invisible"} onClick={handleClick}>about</NavLink>
          {/* <NavLink to="/resume" style={menuLink} className={isOpen ? "visible" : "invisible"} onClick={handleClick}>resume</NavLink> */}
          <Link
            to={"../../ravina-resume.pdf"}
            target="_blank"
            style={menuLink}
            className={isOpen ? "visible" : "invisible"}
            onClick={handleClick}>
            resume
          </Link>
        </div>
      </div>

      {/* Logo */}
      <div style={leftSection}>
        <div style={section}>
          <Link to="/" >
            <img
              src={logo}
              alt="" width={25}
              class="img-responsive"
              align="center"
              style={{ paddingRight: "10px" }}
            />
          </Link>
        </div>
      </div>

      {/* Hamburger */}
      <div style={rightSection}>
        <div style={section} onClick={handleClick}>
          <div style={hamburger}>
            <div style={line} className={isOpen ? "line1x" : "line1"}></div>
            <div style={line} className={isOpen ? "line2x" : "line2"}></div>
            <div style={line} className={isOpen ? "line3x" : "line3"}></div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
