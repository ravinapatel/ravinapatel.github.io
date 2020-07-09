import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from '../Images/rp-icon.png';


// NAVBAR

function App() {

  //STYLING
  // Overall
  const HEIGHT = 150
  const PADDING_TOP = 54
  const PADDING_SIDES = 250

  const navStyle = {
    width: "100%",
    height: HEIGHT,
    backgroundColor: "white",
  }

  // Left Menu Styling
  const menuLeft = {
    verticalAlign: "center",
    float: "left",
    paddingTop: PADDING_TOP,
    paddingLeft: PADDING_SIDES,
  }

  const nameStyle = {
    textTransform: "lowercase",
    letterSpacing: "0.03em",
    fontSize: "18px",
    textDecoration: "none",
    color: "#000000"
  }

  // Right Menu Styling
  const menuRight = {
    verticalAlign: "center",
    float: "right",
    paddingTop: PADDING_TOP,
    paddingRight: PADDING_SIDES,
  }

  const menuList = {
    margin: "0",
    height: "100%",
    listStyleType: "none"
  }

  const menuListItem = {
    display: "inline-block",
    marginLeft: "25px",
    height: "100%"
  }

  const menuLink = {
    textTransform: "lowercase",
    letterSpacing: "0.03em",
    fontSize: "14px",
    textDecoration: "none",
    color: "#ababab"
  }

  const menuActiveLink = {
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
        <div style={menuLeft}>
          <Link to="/" style={nameStyle}>
            <img
              src={logo}
              alt="" width={18}
              class="img-responsive"
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
            <li style={menuListItem} >
              {/* <Link to="/" style={activePage == "work" ? menuActiveLink : menuLink}>work</Link> */}
              <NavLink exact to="/" style={menuLink} activeStyle={menuActiveLink} >work</NavLink>
            </li>

            <li style={menuListItem} >
              {/* <Link to="/about" style={activePage == "about" ? menuActiveLink : menuLink}>about</Link> */}
              <NavLink to="/about" style={menuLink} activeStyle={menuActiveLink} >about</NavLink>
            </li>

            <li style={menuListItem} >
              {/* <Link to="/resume" style={activePage == "resume" ? menuActiveLink : menuLink}>resume</Link> */}
              <NavLink to="/resume" style={menuLink} activeStyle={menuActiveLink} >resume</NavLink>
            </li>
          </ul>
        </div>

      </nav >
    </div >
  );
}

export default App;
