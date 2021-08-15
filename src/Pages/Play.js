import React, { useState } from "react"
import FadeIn from 'react-fade-in';

import Gallery from "../Components/Gallery";
import lineData from "../Data/lineArtData.json";
import otherData from "../Data/otherArtData.json";
import watercolorData from "../Data/watercolorArtData.json";
import uxData from "../Data/uxData.json";
import codeData from "../Data/csData.json";
import digitalData from "../Data/digitalData.json";

import artIcon from '../Icons/palette.png';
import digitalIcon from '../Icons/vector.png';
import codeIcon from '../Icons/code.png';

import useWindowSize from "../Components/useWindowSize";
import ReactGA from 'react-ga';


// RENDERING
function App(props) {
  const ID = "null"              // exclude data of type ID in see more section
  const window = useWindowSize();

  // STATE
  const [hover, setHover] = useState("none");
  const [type, setType] = useState("digital")


  // GOOGLE ANALYTICS
  function clickArt() {
    setType("art")
    // GA Event
    ReactGA.event({
      category: 'Art',
      action: 'Opened Art section of play'
    })
  }

  function clickDigital() {
    setType("digital")
    // GA Event
    ReactGA.event({
      category: 'Digital',
      action: 'Opened Digital section of play'
    })
  }

  function clickCode() {
    setType("code")
    // GA Event
    ReactGA.event({
      category: 'Code',
      action: 'Opened Code section of play'
    })
  }


  // STYLING
  const containerStyle = {
    textAlign: "center",
  }

  const artLeftSectionStyle = {
    verticalAlign: "top",
    display: "inline-block",
    paddingTop: "50px",
    paddingBottom: "50px",
    paddingRight: window.width > 720 ? "50px" : "0px"
  }

  const sectionStyle = {
    verticalAlign: "top",
    display: "inline-block",
    paddingTop: "50px",
    paddingBottom: "50px"
  }

  const moreStyle = {
    verticalAlign: "top",
    display: "inline-block",
    paddingTop: "50px",
    paddingBottom: "50px"
  }

  const stickyContainer = {
    textAlign: "center",
    height: "100%",
    position: "-webkit-sticky",
    position: "sticky",
    top: "20px",
    zIndex: "5"
  }

  const pillContainer = {
    display: "inline-block",
    textAlign: "center",
    borderRadius: "100px",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
    border: "none",
    padding: "10px 20px",
    width: "fit-content"
  }

  const optContainer = {
    display: "inline-block",
    position: "relative"
  }

  const pillActive = {
    display: "inline-block",
    position: "relative",
    backgroundColor: "#fff",
    border: "none",
    cursor: "pointer",
    padding: "0px 20px"
  }

  const pillInactive = {
    display: "inline-block",
    position: "relative",
    backgroundColor: "#fff",
    border: "none",
    cursor: "pointer",
    padding: "0px 20px",
    opacity: ".3"
  }

  const hoverTag = {
    width: "40px",
    backgroundColor: "#4d4d4d",
    color: "#fff",
    textAlign: "center",
    borderRadius: "2px",
    padding: "5px 10px",
    fontSize: 12,
    boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.05)",

    /* Position the tooltip */
    position: "absolute",
    zIndex: "1",
    top: "130%",
    left: "50%",
    marginLeft: "-30px"
  }


  // CONTENT
  return (
    <div>

      <div style={stickyContainer}>
        <div style={pillContainer}>
          <div style={optContainer}>
            <button
              style={type === "art" ? pillActive : pillInactive}
              onClick={clickArt}
              onMouseEnter={() => setHover("art")}
              onMouseLeave={() => setHover("none")}>
              <img src={artIcon} alt="art" width={"22"} align="center" />
            </button>
            <div className={hover === "art" ? "tagVisible" : "tagInvisible"} style={hoverTag}>art</div>
          </div>

          <div style={optContainer}>
            <button
              style={type === "digital" ? pillActive : pillInactive}
              onClick={clickDigital}
              onMouseEnter={() => setHover("digital")}
              onMouseLeave={() => setHover("none")}>
              <img src={digitalIcon} alt="digital" width={"22"} align="center" />
            </button>
            <div className={hover === "digital" ? "tagVisible" : "tagInvisible"} style={hoverTag}>digital</div>
          </div>

          <div style={optContainer}>
            <button
              style={type === "code" ? pillActive : pillInactive}
              onClick={clickCode}
              onMouseEnter={() => setHover("code")}
              onMouseLeave={() => setHover("none")}>
              <img src={codeIcon} alt="code" width={"22"} align="center" />
            </button>
            <div className={hover === "code" ? "tagVisible" : "tagInvisible"} style={hoverTag}>code</div>
          </div>

        </div>
      </div>

      <div style={containerStyle}>
        {
          type === "art" &&
          // ART
          <FadeIn transitionDuration="500">
            < div className="container" style={containerStyle}>
              <div style={artLeftSectionStyle}><Gallery cols="2" totalWidth="700" totalWidthMobile="350" data={lineData} msg="line"></Gallery></div>
              <div style={sectionStyle}>
                <Gallery cols="2" totalWidth="350" data={watercolorData} msg="watercolor"></Gallery>
                <div style={{ paddingTop: "100px" }}><Gallery cols="2" totalWidth="350" data={otherData} msg="other"></Gallery></div>
              </div>
            </div>
          </FadeIn>
        }

        {
          type === "digital" &&
          // DIGITAL
          <FadeIn transitionDuration="500">
            <div className="container" style={containerStyle}>
              <div style={sectionStyle}><Gallery cols="2" totalWidth="1100" totalWidthMobile="350" data={digitalData} isLarge="true" msg=""></Gallery></div>
            </div>
          </FadeIn>
        }

        {
          type === "code" &&
          // CODE
          <FadeIn transitionDuration="500">
            <div className="container" style={containerStyle}>
              <div style={sectionStyle}><Gallery cols="3" totalWidth="1100" data={codeData} isLarge="true" msg="" ></Gallery></div>
            </div>
          </FadeIn>
        }

        {/* SEE MORE */}
        <div style={moreStyle}><Gallery cols={props.chooseMoreData(uxData, ID).length} totalWidth="800" data={props.chooseMoreData(uxData, ID)} msg="check out a case study!"></Gallery></div>

      </div>

    </div>
  );
}

export default App;
