import React, { useState } from 'react';
import me from '../Images/about/about-img.png';
import git from '../Images/about/git.png';
import insta from '../Images/about/insta.png';
import linkedIn from '../Images/about/linkedIn.png';
import timeline from '../Images/about/timeline.png';
import Button from "../Components/Button";
import FadeIn from 'react-fade-in';
import useWindowSize from "../Components/useWindowSize";

// ABOUT

function App() {

  // RESPONSIVENESS
  const window = useWindowSize();
  var isBigScreen = window.width > 900
  var isMediumScreen = window.width < 900
  var isSmallScreen = window.width < 650

  // STATE
  const [copied, setCopied] = useState(false);
  function resetCopy() {
    setTimeout(() => { setCopied(false) }, 200);
  }
  function copyToClipboard() {
    setCopied(true)
    navigator.clipboard.writeText("rpp62@cornell.edu")
  }

  //STYLING
  // Overall
  const MIDDLE_SPACING = 70
  const SECTION_SPACING = 70
  const GREY = "#4d4d4d"

  const p = {
    paddingBottom: "5px",
  }

  const link = {
    color: "#ababab",
    textDecoration: "none",
    cursor: "pointer"
  }

  const container = {
    textAlign: "center",
    width: "100%",
    paddingBottom: SECTION_SPACING
  }

  // Timeline
  const left = {
    textAlign: "left",
    verticalAlign: "top",
    paddingRight: MIDDLE_SPACING,
    display: "inline-block",
    width: 500,
    paddingLeft: 15,
  }

  const right = {
    display: "inline-block",
    right: "0%",
    paddingTop: 65              // to account for the title
  }

  const middleScreenSection = {
    align: "center",
    paddingTop: 20,
    display: "inline-block",
    width: isSmallScreen ? "80%" : "450px",
  }

  const middleScreenSectionFixed = {
    align: "center",
    paddingTop: 20,
    display: "inline-block",
    width: "375px",
  }


  // Intro
  const introLeft = {
    textAlign: "left",
    verticalAlign: "top",
    paddingRight: MIDDLE_SPACING,
    paddingTop: 20,
    display: "inline-block",
    width: 450,
  }

  const introRight = {
    textAlign: "left",
    verticalAlign: "top",
    display: "inline-block",
    paddingTop: 20,
    width: 250,
    right: "0%"
  }

  const bulletList = {
    paddingLeft: 10
  }

  const hoverTag = {
    padding: 10,
    backgroundColor: "#fff",
    fontSize: 12,
    display: "table",
    boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.05)",
    borderRadius: "2px",
    color: "#4d4d4d",
    zIndex: 2000
  }

  // RENDERING
  return (
    <FadeIn delay="500" transitionDuration="500">
      <div className="container" >

        {/* Intro */}
        < div style={container}>
          <img src={me} style={{ paddingTop: isBigScreen ? 0 : 30 }} alt="picture of me :)" width={"300px"} class="img-responsive" align="center" />
          <p style={{ textAlign: "center", fontWeight: "normal", paddingTop: 10 }} className="body">nice to meet you!</p>

          <div style={isBigScreen ? introLeft : middleScreenSection}>
            <p style={p} className="body2"> I’m Ravina, a junior studying Computer Science at Cornell
            University. I have always loved <b>creating</b> and <b>learning</b>. Designing for
            challenging problems allows me to create enjoyable experience for people,
             while continuously learning new skills.</p>

            <p style={p} className="body2">
              If you would like to chat, feel free to email me at
            <div
                className="hoverText"
                style={{ display: "inline-block", paddingLeft: 5 }}
                onClick={copyToClipboard}
                onMouseLeave={resetCopy}>
                <div style={link} class="text-link" > rpp62@cornell.edu</div>
                <div className="hoverTag" style={hoverTag}>{copied ? "Copied!" : "Copy to clipboard"}</div>
              </div>
            .
          </p>
          </div>

          <div style={isBigScreen ? introRight : { display: "none" }}>
            <p className="subheading" style={{ color: GREY }}>Previously</p>
            <p style={p} className="body3">
              <div style={bulletList}>
                <ul className="dashed">
                  <li> <a href="https://www.paywithway.com/" style={link} class="text-link"
                    target="_blank">WAY</a> | Product Design Intern</li>
                  <li> <a href="https://www.cornellappdev.com/" style={link} class="text-link"
                    target="_blank">Cornell AppDev</a> | Product Designer</li>
                  <li><a href="https://paravaneventures.com/design2020/" style={link} class="text-link"
                    target="_blank">Paravane Ventures</a> | Product Design Case Contestant</li>
                  <li><a href="https://www.vidmob.com/" style={link} class="text-link"
                    target="_blank">VidMob</a> | Motion Design Intern</li>
                  <li><a href="http://cornellthetatau.com/" style={link} class="text-link"
                    target="_blank">Cornell Theta Tau</a> | Design Chair</li>
                  <li>Big Red Raas | Social Media Marketer</li>
                  <li><a href="https://swe.cornell.edu/" style={link} class="text-link"
                    target="_blank">Society of Women in Engineering</a> | Newsletter Designer</li>
                </ul>
              </div>
              <Button
                text="View resume"
                url="../../ravina-resume.pdf"
              ></Button>
            </p>

          </div>
        </div >

        {/* Timeline */}
        < div style={container} >

          <div style={isBigScreen ? left : middleScreenSection}>
            <p className="heading">My Journey to UX</p>
            <p style={p} className="body2">At heart, I have always been a creator. I love being faced
            with complex challenges and trying to come up with elegant solutions.
          This passion is what initially drove me to Computer Science.</p>

            <p style={p} className="body2">
              During my freshman year of college, I discovered digital product design and fell
              in love. The job allows me to solve complex problems, while creating
              beautiful products that improve quality of life for countless people.
              Now, my background in Computer Science gives me a strong understanding
              of the technology industry and technological constraints, as well as an
            ability to rapidly prototype my designs.</p>
          </div>

          <div style={isBigScreen ? right : middleScreenSection}>
            <img src={timeline} alt="brief history" width={"200px"} class="img-responsive" align="center" />
          </div>

        </div >

        {/* Contact */}
        < div style={container} >
          <div style={isBigScreen ? introLeft : middleScreenSectionFixed}>
            <p className="heading">I'd Love to Chat :)</p>

            <p className="body2">
              I'm always looking for interesting opportunities and conversations, so feel free to email me at
            <div
                className="hoverText"
                style={{ display: "inline-block", paddingRight: 5 }}
                onClick={copyToClipboard}
                onMouseLeave={resetCopy}>
                <div style={link} class="text-link" > rpp62@cornell.edu</div>
                <div className="hoverTag" style={hoverTag}>{copied ? "Copied!" : "Copy to clipboard"}</div>
              </div>
            or connect with me:
          </p>

            <div style={{ display: "inline-block", zIndex: -2000 }}>
              <a href="https://github.com/ravinapatel" target="_blank">
                <img src={git} alt="github" width={"20px"} className="social" align="center" /></a>
              <a href="https://www.instagram.com/ravinart/" target="_blank">
                <img src={insta} alt="insta" width={"20px"} className="social" align="center" style={{ paddingLeft: 30 }} /></a>
              <a href="https://www.linkedin.com/in/ravinapatel0/" target="_blank">
                <img src={linkedIn} alt="linkedIn" width={"20px"} className="social" align="center" style={{ paddingLeft: 30 }} /></a>
            </div>
          </div>

          <div style={isBigScreen ? introRight : { display: "none" }}>
          </div>
        </div>
      </div >
    </FadeIn>
  );
}

export default App;
