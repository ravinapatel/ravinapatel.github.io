import React from 'react';
import { Link } from "react-router-dom";
import logo from '../Icons/rp-icon.png';
import MyLink from "./Link";


// NAVBAR

function App(props) {

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
  const menuListItemWork = {
    display: "inline-block",
    marginLeft: "20px",
    marginTop: "6px",
    height: "100%",
    width: "50px",
  }
  const menuListItemPlay = {
    display: "inline-block",
    marginLeft: "20px",
    marginTop: "6px",
    height: "100%",
    width: "40px",
  }
  const menuListItemAbout = {
    display: "inline-block",
    marginLeft: "20px",
    marginTop: "6px",
    height: "100%",
    width: "58px",
  }

  // RENDERING
  return (
    <div className="navContainer" style={{height:HEIGHT}}>
      < nav style={navStyle}>

        {/* Logo */}
        <div style={leftSection}>
          <a href="/">          
            <img
              src={logo}
              alt="" width={32}
              className="logo"
              align="center"
              style={{ marginTop: "8px", padding: "10px", paddingLeft: "4px" }}
              onClick={scrollToTop}
            />
          </a>
        </div>

        {/* Nav Links */}
        <div style={rightSection}>
          <ul style={menuList}>
            <li style={menuListItemWork} >
              <MyLink text={"work"} url={"/"} isInternal="true" type="block" icon="" fontWeight={props.active==="work"?"bold":"regular"} color="rgba(0, 0, 0, 1)"></MyLink>
            </li>

            <li style={menuListItemPlay} >
              <MyLink text={"play"} url={"/play"} isInternal="true" type="block" icon="" fontWeight={props.active==="play"?"bold":"regular"} color="rgba(0, 0, 0, 1)"></MyLink>
            </li>

            <li style={menuListItemAbout} >
              <MyLink text={"about"} url={"/about"} isInternal="true" type="block" icon="" fontWeight={props.active==="about"?"bold":"regular"} color="rgba(0, 0, 0, 1)"></MyLink>
            </li>
          </ul>
        </div>

      </nav >
    </div >
  );
}

export default App;
