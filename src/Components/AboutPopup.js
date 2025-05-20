import React, { useState } from 'react';
import me from '../Images/about/about-img.png';
import timeline from '../Images/about/timeline.png';
import Button from "./Button";
import Socials from "./Socials";
import FadeIn from 'react-fade-in';
import useWindowSize from "./useWindowSize";
import ReactGA from 'react-ga';


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
    navigator.clipboard.writeText("ravinapatel.work@cornell.edu")

    // GA Event
    ReactGA.event({
      category: 'Email',
      action: 'Copied email to clipboard from the link on the about popup'
    })
  }
  function clickResume() {
    // GA Event
    ReactGA.event({
      category: 'Resume',
      action: 'Opened resume from the button on the about popup'
    })
  }
  function clickEmail() {
    // GA Event
    ReactGA.event({
      category: 'Email',
      action: 'Opened email from the button on the about popup'
    })
  }

  // STYLING
  const WIDTH = isBigScreen ? 350 : "90%"

  const contentStyle = {
    textAlign: "center",
    overflow: "hidden",
    backgroundColor: "white",
    width: WIDTH,
    padding: 30,
    borderRadius: 20
  }

  const section = {
    display: "inline-block",
    width: WIDTH,
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

  const sectionStyle = {
    display: "inline-block",
    padding: "10px"
  }

  return (
    <FadeIn transitionDuration="500">
      <div style={contentStyle}>

        {/* Bio */}
        <div style={section}>
          <div className="heading2" style={{ paddingBottom: 30 }}>nice to meet you!</div>
          <div className="aboutBody" style={{ verticalAlign: "top" }} >
            I’m Ravina, a junior studying Computer Science and User Experience
            at Cornell University. I have always loved <b>creating</b> and <b>learning</b>.
            Designing for challenging problems allows me to create delightful
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
                  ravinapatel.work@cornell.edu
                </div>
                <div className={tagVisible ? "tagVisible" : "tagInvisible"} style={hoverTag}>{copied ? "Copied!" : "Copy to clipboard"}</div>
              </div>
            </div>
            !
          </div>
        </div>

        {/* Buttons */}
        <div style={sectionStyle} onClick={clickEmail}>
          <Button
            text="contact me"
            url="mailto: ravinapatel.work@cornell.edu"
          ></Button>
        </div>
        <div style={sectionStyle} onClick={clickResume}>
          <Button
            text="view resume"
            url="../../ravina-resume.pdf"
          ></Button>
        </div>

        {/* Socials */}
        <div style={{ paddingTop: 30 }}>
          <Socials></Socials>
        </div>

      </div>

    </FadeIn >
  );
}

export default App;
