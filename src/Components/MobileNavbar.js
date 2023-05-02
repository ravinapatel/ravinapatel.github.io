import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from '../Icons/rp-icon.png';
import ReactGA from 'react-ga';
import useWindowSize from "./useWindowSize";

// MOBILE NAVBAR
function App() {

  // CONSTANTS
  const windowSize = useWindowSize();
  const PADDING = 28;
  const HEIGHT = 64;

  // STATE
  const [isOpen, setIsOpen] = useState(false);

  // FUNCTIONS
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function toggleHamburger() {
    setIsOpen(!isOpen);
    // GA Event
    if (!isOpen) {
      ReactGA.event({
        category: 'Hamburger',
        action: 'Clicked the hamburger menu'
      })
    }
  }

  function choosePage() {
    setIsOpen(!isOpen);
    scrollToTop();
  }

  function handleResume() {
    setIsOpen(!isOpen);
    // GA Event
    ReactGA.event({
      category: 'Resume',
      action: 'Opened resume from the hamburger menu'
    })
  }

  // STYLING
  const container = {
  }

  const navContainer = {
    height: HEIGHT,
  }

  const leftSection = {
    verticalAlign: "top",
    cursor: "pointer",
    position: "absolute",
    left: PADDING,
    top: 20,
  }

  const rightSection = {
    verticalAlign: "top",
    cursor: "pointer",
    position: "absolute",
    right: PADDING,
    top: 20,
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
    zIndex: "900"
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
    fontSize: "24px",
    textDecoration: "none",
    color: "#4d4d4d",
    padding: 20
  }

  // RENDERING
  return (
    <div style={container} >
      {/* Menu */}
      <div style={overlay} className={isOpen ? "visible" : "invisible"} >
        <div style={text}>
          <NavLink exact to="/" style={menuLink} className="navLink" onClick={choosePage}>work</NavLink>
          <NavLink to="/play" style={menuLink} className="navLink" onClick={choosePage}>play</NavLink>
          <NavLink to="/about" style={menuLink} className="navLink" onClick={choosePage}>about</NavLink>
          <Link
            to={"../../ravina-resume.pdf"}
            target="_blank"
            style={menuLink}
            className="link"
            onClick={handleResume}>
            resume
          </Link>
        </div>
      </div>

      <div className="navContainer" style={navContainer}>
        {/* Logo */}
        <div style={leftSection}>
          <div>
            <Link to="/" >
              <img
                src={logo}
                alt=""
                width={30}
                align="center"
                style={{ paddingRight: "10px", zIndex: "900", position: "sticky" }}
                onClick={scrollToTop}
              />
            </Link>
          </div>
        </div>

        {/* Hamburger */}
        <div style={rightSection} onClick={toggleHamburger}>
          <div style={line} className={isOpen ? "line1x" : "line1"}></div>
          <div style={line} className={isOpen ? "line2x" : "line2"}></div>
          <div style={line} className={isOpen ? "line3x" : "line3"}></div>
        </div>
      </div >
    </div>
  );
}

export default App;
