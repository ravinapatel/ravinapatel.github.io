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
    position: "fixed",
  }

  // Left Menu Styling
  const leftSection = {
    display: "inline-block",
    height: HEIGHT,
    textAlign: "left",
    width: "50%",
    position: "absolute",
    left: "5%",
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
  const rightSection = {
    display: "inline-block",
    height: HEIGHT,
    textAlign: "right",
    width: "50%",
    position: "absolute",
    right: "5%",
  }
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
