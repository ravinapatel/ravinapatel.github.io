import React, { useState } from 'react';
import me from '../Images/about/about-img.jpg';
import timeline from '../Images/about/timeline.png';
import Button from "../Components/Button";
import Socials from "../Components/Socials";
import FadeIn from 'react-fade-in';
import useWindowSize from "../Components/useWindowSize";


// IMAGES


// The Exceed App

// RENDERING
function App(props) {

  // RESPONSIVENESS
  const window = useWindowSize();
  var isBigScreen = window.width > 900
  var isMediumScreen = window.width < 900
  var isSmallScreen = window.width < 700

  // STATE
  const [copied, setCopied] = useState(false);
  const [tagVisible, setTagVisible] = useState(false);
  function resetCopy() {
    setTimeout(() => { setCopied(false) }, 200);
    setTagVisible(false);
  }
  function showTag() {
    setTagVisible(true);
  }
  function copyToClipboard() {
    setCopied(true)
    navigator.clipboard.writeText("rpp62@cornell.edu")
  }

  // STYLING
  const COLOR = "#0F5BE5"
  const GREY = "#9a9a9a"
  const WIDTH = isBigScreen ? 800 : "90%"
  const PADDING = (window.width - WIDTH) / 2
  const SECTION_SPACING = 50
  const ID = "about"       // must match the project id in uxData

  const contentStyle = {
    textAlign: "center",
    overflow: "hidden"
  }

  const section = {
    display: "inline-block",
    width: WIDTH,
    marginLeft: PADDING,
    marginRight: PADDING,
  }
  const tableContainer = {
    display: "inline-block",
    marginTop: 30
  }
  const table = {
    MsFlex: 1,  /* IE 10 */
    display: isSmallScreen ? "block" : "flex",
  }
  const tableCol = {
    flex: 1,
    paddingRight: isSmallScreen ? 0 : 40,
    paddingBottom: isSmallScreen ? 20 : 0,
  }
  const tableColFinal = {
    flex: 1
  }

  const link = {
    color: "#ababab",
    textDecoration: "none",
    cursor: "pointer"
  }
  const hoverTag = {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#4d4d4d",
    fontSize: 12,
    display: "inline-block",
    boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.05)",
    borderRadius: "2px",
    color: "#fff",
    zIndex: 2000
  }

  const heading = {
    color: "#000",
    textAlign: "center",
    position: isSmallScreen ? "relative" : "absolute",
    left: isSmallScreen ? null : "45%",
    paddingTop: isSmallScreen ? 0 : 10,
    paddingBottom: isSmallScreen ? 30 : 0
  }

  const containerStyle = {
    textAlign: "center"
  }

  const sectionStyle = {
    display: "inline-block",
    padding: "10px"
  }

  return (
    <FadeIn transitionDuration="500">
      <div style={contentStyle}>

        <div style={section}>
          <div style={tableContainer}>
            <div style={table}>

              <div className="heading2" style={heading} >nice to meet you!</div>
              <div style={tableCol}>
                <img src={me} alt="" width={"100%"} style={{ paddingBottom: SECTION_SPACING, }} ></img>
              </div>

              <div style={tableColFinal}>
                <div className="body" style={{ paddingTop: isSmallScreen ? 0 : 70 }}>
                  I’m Ravina, a senior studying Computer Science and User Experience
                  at Cornell University. I have always loved <b>creating</b> and <b>learning</b>.
                  Designing for complex problems allows me to create delightful
                  experience for people, while continuously learning new skills.
                  <br></br><br></br>
                  If you would like to chat, feel free to email me at
                  <div
                    style={{ display: "inline-block", verticalAlign: "top" }}>
                    <div style={{ textAlign: "center" }}>
                      <div
                        style={{ color: "#ababab", cursor: "pointer", paddingLeft: 5 }}
                        className="hoverText"
                        onClick={copyToClipboard}
                        onMouseEnter={showTag}
                        onMouseLeave={resetCopy}>
                        rpp62@cornell.edu
                      </div>
                      <div className={tagVisible ? "tagVisible" : "tagInvisible"} style={hoverTag}>{copied ? "Copied!" : "Copy to clipboard"}</div>
                    </div>
                  </div>
                  !
                </div>
              </div>

            </div>
          </div>
        </div>

        <div style={containerStyle}>
          <div style={sectionStyle}>
            <Button
              text="view work"
              url="./work"
              isInternal="true"
            ></Button>
          </div>
          <div style={sectionStyle}>
            <Button
              text="view resume"
              url="../../ravina-resume.pdf"
            ></Button>
          </div>

          {/* Socials */}
          {/* <div style={{ paddingTop: 30 }}>
            <Socials></Socials>
          </div> */}

        </div>
      </div>

    </FadeIn >
  );
}

export default App;
