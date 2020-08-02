import React, { useState } from 'react';
// import { Link, NavLink } from "react-router-dom";
import logo from '../Images/rp-icon.png';
import X from '../Images/about/X.png';
import me from '../Images/about/about-img.png';
import AboutPopup from './AboutPopup';
import useWindowSize from "./useWindowSize";

// NAVBAR

function App() {

  // RESPONSIVENESS
  const window = useWindowSize();

  // STATE
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }

  //STYLING
  // Overall
  const HEIGHT = 120
  const MIDDLE_SPACING = 660
  const ABOUT_PADDING = 110         // spacing between popup and profile pic
  const ABOUT_LEFT = window.width / 2 + MIDDLE_SPACING / 2 - 20 - 380 - ABOUT_PADDING
  const IMG_WIDTH = 50

  const navStyle = {
    textAlign: "center",
    width: "100%",
    paddingTop: HEIGHT / 3,
    paddingBottom: HEIGHT / 2
  }

  // Left Menu Styling
  const menuLeft = {
    left: "-moz -calc(50% - 390px)",        // Firefox
    left: "-webkit -calc(50% - 390px)",     // WebKit
    left: "-o -calc(50% - 390px)",          // Opera
    left: "calc(50% - 390px)",              // Standard
    position: "absolute",
    paddingBottom: 6,
    paddingTop: 6
  }

  // Right Menu Styling
  const menuRight = {
    right: "-moz -calc(50% - 330px)",        // Firefox
    right: "-webkit -calc(50% - 330px)",     // WebKit
    right: "-o -calc(50% - 330px)",          // Opera
    right: "calc(50% - 330px)",              // Standard
    position: "absolute",
    cursor: "pointer",
    zIndex: 3000
  }

  // Tint
  const overlay = {
    position: "fixed",
    display: "block",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "#000",
    zIndex: "1000"
  }

  // RENDERING
  return (
    <div >
      < nav style={navStyle}>

        {/* Tint + About Popup */}
        <div style={overlay} onClick={handleClick} className={isOpen ? "visibleBlackTint" : "invisibleBlackTint"} >
        </div>

        <div
          style={{ position: "fixed", zIndex: 2000, left: ABOUT_LEFT }}
          className={isOpen ? "visiblePopup" : "invisiblePopup"} >
          <div onClick={handleClick} style={{ position: "fixed", left: ABOUT_LEFT + 360, top: 50, padding: 10, zIndex: 4000, cursor: "pointer" }}>
            <img
              src={X}
              width={15}
            />
          </div>
          <AboutPopup></AboutPopup>
        </div>

        {/* Logo */}
        <div className="logoContainer" style={menuLeft}>
          <a href="/" >
            <img
              src={logo}
              alt="" width={40}
              className="logo"
              align="center"
            />
          </a>
        </div>

        {/* Image */}
        <div style={menuRight}>
          <img
            src={me}
            alt=""
            width={IMG_WIDTH}
            align="center"
            className={isOpen ? "imageBig" : "imageSmall"}
            style={{ borderRadius: 500, zIndex: 3000, position: "absolute" }}
            onClick={handleClick}
          />
        </div>

      </nav >
    </div >
  );
}

export default App;
