import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from '../Icons/rp-icon.png';


// NAVBAR

function App() {
  // STATE
  const [playMode, setPlayMode] = useState("false")

  //STYLING
  // Overall
  const HEIGHT = 80

  const navStyle = {
    textAlign: "center",
    width: "100%",
    height: HEIGHT,
    zIndex: "900",
    position: "relative"
  }

  // Left Menu Styling
  // NOTE: marginRight: MIDDLE_SPACING set in App.css
  const menuLeft = {
    textAlign: "left",
    lineHeight: "15px",
    marginRight: 780,
    display: "inline-block",
  }

  const nameStyle = {
    textTransform: "lowercase",
    fontSize: "22px",
    textDecoration: "none",
    color: "#000000",
    width: "auto",
  }

  // Right Menu Styling
  const menuRight = {
    display: "inline-block",
    right: "0%",
    height: HEIGHT
  }

  const menuList = {
    margin: "0",
    padding: "0",
    height: "100%",
    listStyleType: "none"
  }

  const menuListItem = {
    display: "inline-block",
    marginLeft: "20px",
    height: "100%"
  }

  const menuLink = {
    display: "flex",
    alignItems: "center",
    height: "100%",
    textTransform: "lowercase",
    fontSize: "18px",
    textDecoration: "none",
    fontWeight: "normal",
    color: "#000",
  }

  const menuActiveLink = {
    display: "flex",
    alignItems: "center",
    height: 30,
    textTransform: "lowercase",
    fontSize: "18px",
    textDecoration: "none",
    fontWeight: "500",
    color: "#000",
    borderBottom: "2px solid #000",
  }

  // RENDERING
  return (
    <div className="container" >
      < nav style={navStyle}>

        {/* Name and Logo */}
        <div className={`logoContainer ${playMode === "true" ? "navOpen" : "navClose"}`} style={menuLeft}>
          <Link to="/" style={nameStyle} onClick={() => setPlayMode("false")}>
            <img
              src={logo}
              alt="" width={24}
              className="logo"
              align="center"
              style={{ paddingRight: "10px" }}
            />
            ravina patel
          </Link>
        </div>

        {/* Nav Links */}
        <div style={menuRight}>
          <ul style={menuList}>
            <li className="navLink" style={menuListItem} >
              <NavLink exact to="/" style={menuLink} activeStyle={menuActiveLink} onClick={() => setPlayMode("false")}>work</NavLink>
            </li>

            <li className="navLink" style={menuListItem} >
              <NavLink to="/play" style={menuLink} activeStyle={menuActiveLink} onClick={() => setPlayMode("true")}>play</NavLink>
            </li>

            <li className="navLink" style={menuListItem} >
              <NavLink to="/about" style={menuLink} activeStyle={menuActiveLink} onClick={() => setPlayMode("false")} >about</NavLink>
            </li>

            {/* <li className="link" style={menuListItem} >
              <Link
                to={"../../ravina-resume.pdf"}
                target="_blank"
                style={menuLink}>
                resume
              </Link>
            </li> */}
          </ul>
        </div>

      </nav >
    </div >
  );
}

export default App;
