import React from 'react';
import { Link } from "react-router-dom";
import logo from '../Icons/rp-icon.png';
import MyLink from "./Link";


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
    position: "fixed"
  }

  // Left Menu Styling
  const menuLeft = {
    textAlign: "left",
    lineHeight: "15px",
    marginRight: 880,
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
    marginLeft: "14px",
    height: "100%",
  }

  // RENDERING
  return (
    <div className="navContainer" style={{height:HEIGHT}}>
      < nav style={navStyle}>

        {/* Name and Logo */}
        <div style={menuLeft}>
          <Link to="/" style={nameStyle} >
            <img
              src={logo}
              alt="" width={32}
              className="logo"
              align="center"
              style={{ paddingRight: "10px" }}
              onClick={scrollToTop}
            />
            {/* ravina patel */}
          </Link>
        </div>

        {/* Nav Links */}
        <div style={menuRight}>
          <ul style={menuList}>
            <li style={menuListItem} >
              <MyLink text={"work"} url={"/"} isInternal="true" type="block" icon="" fontWeight="regular" color="rgba(0, 0, 0, 1)"></MyLink>
            </li>

            <li style={menuListItem} >
              <MyLink text={"play"} url={"/play"} isInternal="true" type="block" icon="" fontWeight="regular" color="rgba(0, 0, 0, 1)"></MyLink>
            </li>

            <li style={menuListItem} >
              <MyLink text={"about"} url={"/about"} isInternal="true" type="block" icon="" fontWeight="regular" color="rgba(0, 0, 0, 1)"></MyLink>
            </li>
          </ul>
        </div>

      </nav >
    </div >
  );
}

export default App;
