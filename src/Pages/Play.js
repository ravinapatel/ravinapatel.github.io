import React, { useState } from "react"
import FadeIn from 'react-fade-in';

import Gallery from "../Components/Gallery";
import lineData from "../Data/lineArtData.json";
import otherData from "../Data/otherArtData.json";
import watercolorData from "../Data/watercolorArtData.json";
import uxData from "../Data/uxData.json";
import codeData from "../Data/csData.json";
import digitalData from "../Data/digitalData.json";

import useWindowSize from "../Components/useWindowSize";
import ReactGA from 'react-ga';


// RENDERING
function App(props) {

  // RESONSIVENESS
  const windowSize = useWindowSize();
  var isBigScreen = windowSize.width > 1200

  const ID = "null"              // exclude data of type ID in see more section

  // STATE
  const [type, setType] = useState("digital")


  // GOOGLE ANALYTICS
  function clickArt() {
    scrollToTop()
    setType("art")
    // GA Event
    ReactGA.event({
      category: 'Art',
      action: 'Opened Art section of play'
    })
  }

  function clickDigital() {
    scrollToTop()
    setType("digital")
    // GA Event
    ReactGA.event({
      category: 'Digital',
      action: 'Opened Digital section of play'
    })
  }

  function clickCode() {
    scrollToTop()
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
    marginTop: 20
  }

  const artLeftSectionStyle = {
    verticalAlign: "top",
    display: "inline-block",
    paddingTop: "50px",
    paddingBottom: "50px",
    paddingRight: isBigScreen ? "50px" : "0px"
  }

  const sectionStyle = {
    verticalAlign: "top",
    display: "inline-block",
    paddingTop: "50px",
    paddingBottom: "50px"
  }

  // moreStyle is also spec in Exceed2.js
  const moreStyle = {
    verticalAlign: "top",
    display: "inline-block",
    paddingTop: "50px",
    paddingBottom: "50px",
  }
  if (windowSize.width > 1200) {          // big screen (according to gallery thresholds)
    moreStyle.height = 550
  }
  else if (windowSize.width < 700) {      // small screen
    moreStyle.height = "auto"
  }
  else if (windowSize.width < 940) {      // small-medium screen
    moreStyle.height = 550
  }
  else {
    moreStyle.height = 620            // big-medium screen
  }

  const stickyContainer = {
    textAlign: "center",
    height: "100%",
    position: "sticky",
    top: "80px",
    zIndex: "5"
  }

  const pillContainer = {
    display: "inline-block",
    textAlign: "center",
    // backgroundImage: "url(/pillsBackground.png)",
    // backgroundSize: 'cover',
    backgroundColor: "#f0f0f0",
    borderRadius: 100,
    border: "1px solid #000",
    padding: "4px 4px",
    width: "fit-content"
  }

  const optContainer = {
    display: "inline-block",
    position: "relative"
  }

  // const pillActive = {
  //   display: "inline-block",
  //   position: "relative",
  //   backgroundColor: "#fff",
  //   border: "1px solid #7b7b7b",
  //   cursor: "pointer",
  //   padding: "8px 20px",
  //   borderRadius: 100,
  // }

  // const pillInactive = {
  //   display: "inline-block",
  //   position: "relative",
  //   // backgroundColor: "rgba(0, 0, 0, 0)",
  //   border: "none",
  //   cursor: "pointer",
  //   padding: "8px 20px",
  //   borderRadius: 100,
  // }

  const pillLabel = {
    color: "#000",
    fontSize: "16px"
  }

  // function scrollToTop() {
  //   document.body.scrollTop = 0; // For Safari
  //   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  // }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  // CONTENT
  return (
    <div id="title">

      {/* PILLS */}
      <div style={stickyContainer}>
        <div style={pillContainer}>
          <div style={optContainer}>
            <button
              className={type === "art" ? "pillOption pillOptionActive" : "pillOption pillOptionInactive"}
              style={{marginRight: 4}}
              onClick={clickArt}>
              <div style={pillLabel}>Traditional</div>
            </button>
          </div>

          <div style={optContainer}>
            <button
              className={type === "digital" ? "pillOption pillOptionActive" : "pillOption pillOptionInactive"}
              style={{marginRight: 4}}
              onClick={clickDigital}>
              <div style={pillLabel}>Digital</div>
            </button>
          </div>

          <div style={optContainer}>
            <button
              className={type === "code" ? "pillOption pillOptionActive" : "pillOption pillOptionInactive"}
              onClick={clickCode}>
              <div style={pillLabel}>Code</div>
            </button>
          </div>

        </div>
      </div>

      <div style={containerStyle}>
        {/* GALLERIES */}
        {
          type === "art" &&
          // Art
          <FadeIn transitionDuration="500">
            < div className="container" style={containerStyle}>
              <div style={artLeftSectionStyle}><Gallery numColsArray={[2,2,1]} totalWidth={700} data={lineData} title="line" square="false"></Gallery></div>
              <div style={sectionStyle}>
                <Gallery numColsArray={[2,2,1]} totalWidth={350} data={watercolorData} title="watercolor" square="false"></Gallery>
                <div style={{ paddingTop: "100px" }}><Gallery numColsArray={[2,2,1]} totalWidth={350} data={otherData} title="etc" square="false"></Gallery></div>
              </div>
            </div>
          </FadeIn>
        }
        {
          type === "digital" &&
          // Digital
          <FadeIn transitionDuration="500">
            <div className="container" style={containerStyle}>
              <div style={sectionStyle}><Gallery numColsArray={[2,1,1]} totalWidth={1122} data={digitalData} title="" square="false"></Gallery></div>
            </div>
          </FadeIn>
        }
        {
          type === "code" &&
          // Code
          <FadeIn transitionDuration="500">
            <div className="container" style={containerStyle}>
            <div style={sectionStyle}><Gallery numColsArray={[3,2,1]} totalWidth={1122} data={codeData} title="" square="false" isLarge="true"></Gallery></div>
            </div>
          </FadeIn>
        }

        {/* SEE MORE */}
        <div style={moreStyle}>
          <Gallery 
            numColsArray={[props.chooseMoreData(uxData, ID).length,props.chooseMoreData(uxData, ID).length,1]} 
            totalWidth={800}
            data={props.chooseMoreData(uxData, ID)} 
            title="check out a case study!"
            square="false" 
            isLarge="false">
          </Gallery>
        </div>

      </div>
    </div>

  );
}

export default App;
