import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from '../Icons/rp-icon.png';


// NAVBAR

function App() {

  // FUNCTIONS
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  //STYLING
  // Overall
  const HEIGHT = 64

  const navStyle = {
    textAlign: "center",
    width: "100%",
    height: HEIGHT,
    zIndex: "900",
    position: "fixed",
  }

  const leftSection = {
    display: "inline-block",
    height: HEIGHT,
    textAlign: "left",
    width: "50%",
    position: "absolute",
    left: "5%",
  }

  const rightSection = {
    display: "inline-block",
    height: HEIGHT,
    textAlign: "right",
    width: "50%",
    position: "absolute",
    right: "5%",
  }


  const nameStyle = {
    display: "inline-block",
    textTransform: "lowercase",
    fontSize: "22px",
    textDecoration: "none",
    color: "#000000",
    width: "auto",
    height: "100%",
    paddingTop: 29,
  }

  // Right Menu Styling

  const menuList = {
    margin: "0",
    padding: "0",
    height: "100%",
    listStyleType: "none",
  }

  const menuListItem = {
    display: "inline-block",
    marginLeft: "20px",
    height: "100%",
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
    <div className="navContainer" style={{height:HEIGHT}}>
      < nav style={navStyle}>

        {/* Name and Logo */}
        <div style={leftSection}>
          <Link to="/" style={nameStyle} >
            <img
              src={logo}
              alt="" width={32}
              className="logo"
              align="center"
              style={{ marginTop: "-24px", padding: "10px", paddingLeft: "0px" }}
              onClick={scrollToTop}
            />
            {/* ravina patel */}
          </Link>
        </div>

        {/* Nav Links */}
        <div style={rightSection}>
          <ul style={menuList}>
            <li className="navLink" style={menuListItem} >
              <NavLink exact to="/" style={menuLink} activeStyle={menuActiveLink} onClick={scrollToTop}>work</NavLink>
            </li>

            <li className="navLink" style={menuListItem} >
              <NavLink to="/play" style={menuLink} activeStyle={menuActiveLink} onClick={scrollToTop}>play</NavLink>
            </li>

            <li className="navLink" style={menuListItem} >
              <NavLink to="/about" style={menuLink} activeStyle={menuActiveLink} onClick={scrollToTop}>about</NavLink>
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
