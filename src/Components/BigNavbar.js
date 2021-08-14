import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from '../Icons/rp-icon.png';


// NAVBAR

function App() {
  // STATE
  const [playMode, setPlayMode] = useState("false")

  //STYLING
  // Overall
  const HEIGHT = 150

  const navStyle = {
    textAlign: "center",
    width: "100%",
    height: HEIGHT,
    backgroundColor: "white",
  }

  // Left Menu Styling
  const menuLeft = {
    textAlign: "left",
    lineHeight: "15px",
    // marginRight: MIDDLE_SPACING set in App.css
    display: "inline-block",
    paddingTop: 10,
    paddingLeft: 10
  }

  const nameStyle = {
    textTransform: "lowercase",
    letterSpacing: "0.03em",
    fontSize: "18px",
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
    padding: "0 3px",
    height: "100%",
    textTransform: "lowercase",
    letterSpacing: "0.03em",
    fontSize: "14px",
    textDecoration: "none",
    color: "#ababab"
  }

  const menuActiveLink = {
    display: "flex",
    alignItems: "center",
    padding: "0 3px",
    height: "100%",
    textTransform: "lowercase",
    letterSpacing: "0.03em",
    fontSize: "14px",
    textDecoration: "none",
    color: "#000000"
  }

  // RENDERING
  return (
    <div className="container" >
      < nav style={navStyle}>

        {/* Name and Logo */}
        <div className={`logoContainer ${playMode == "true" ? "navOpen" : "navClose"}`} style={menuLeft}>
          <Link to="/" style={nameStyle} onClick={() => setPlayMode("false")}>
            <img
              src={logo}
              alt="" width={18}
              className="logo"
              align="center"
              style={{ paddingRight: "10px" }}
            />
            ravina patel
          </Link>
          {/* <p style={taglineStyle}>product designer @cornell university</p> */}
        </div>

        {/* Nav Links */}
        <div style={menuRight}>
          <ul style={menuList}>
            <li className="link" style={menuListItem} >
              <NavLink exact to="/" style={menuLink} activeStyle={menuActiveLink} onClick={() => setPlayMode("false")}>work</NavLink>
            </li>

            <li className="link" style={menuListItem} >
              <NavLink to="/play" style={menuLink} activeStyle={menuActiveLink} onClick={() => setPlayMode("true")}>play</NavLink>
            </li>

            <li className="link" style={menuListItem} >
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
