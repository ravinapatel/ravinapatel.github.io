import React from 'react';
import BlockQuote from "../../Components/case_study_components/blockQuote";
import Cover from "../../Images/portfolio/ux/snap-banner.png";
import marketResearch from "../../Images/portfolio/ux/exceed/market-research.png";
import painPoints from "../../Images/portfolio/ux/exceed/pain-points.png";
import content from "../../Images/portfolio/ux/exceed/content.png";
import personalization from "../../Images/portfolio/ux/exceed/personalization.png";
import motivation from "../../Images/portfolio/ux/exceed/motivation.png";
import time from "../../Images/portfolio/ux/exceed/time.png";
import image from "../../Images/portfolio/graphic-design/Ravina.jpg";
import Gallery from "../../Components/Gallery";
import uxData from "../../Data/uxData.json";
import useWindowSize from "../../Components/useWindowSize";
import './CaseStudy.css';


// The Exceed App

// RENDERING
function App(props) {

  // RESPONSIVENESS
  const window = useWindowSize();
  var isBigScreen = window.width > 900
  var isMediumScreen = window.width < 900
  var isSmallScreen = window.width < 700

  // STYLING
  const COLOR = "#AC65F1"
  const WIDTH = isBigScreen ? 800 : "90%"
  const PADDING = (window.width - WIDTH) / 2
  const SECTION_SPACING = 50
  const ID = "exceed"       // must match the project id in uxData

  const contentStyle = {
    textAlign: "center",
  }

  const section = {
    display: "inline-block",
    paddingBottom: SECTION_SPACING,
    paddingTop: SECTION_SPACING,
    width: WIDTH,
    marginLeft: PADDING,
    marginRight: PADDING
  }
  const tableContainer = {
    display: "inline-block",
    marginTop: 30,
    marginBottom: 30
  }
  const table = {
    MsFlex: 1,  /* IE 10 */
    display: isSmallScreen ? "block" : "flex",
    width: WIDTH
  }
  const tableCol = {
    flex: 1,
    paddingRight: isSmallScreen ? 0 : 60, paddingBottom: isSmallScreen ? 60 : 0,
  }
  const tableColFinal = {
    flex: 1,
  }

  return (
    <div style={contentStyle}>
      {/* Intro */}
      <div style={section}>
        <div style={{ width: 400, textAlign: "center", display: "inline-block", paddingBottom: 60 }} className="emphatic">
          A way for professionals who are content with their work to continue to learn and develop.
        </div>

        <img src={Cover} alt="Project cover image" width={WIDTH} ></img>

        <div style={tableContainer}>
          <div style={table}>
            <div style={tableCol}>
              <div className="subheading" >My Role</div>
              <div className="body" >UX Researcher, UI Designer</div>
            </div>
            <div style={tableCol}>
              <div className="subheading" >Duration</div>
              <div className="body" >5 days</div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge */}
      <div style={section}>
        <div className="heading" style={{ color: COLOR }}>Challenge</div>
        <div className="body">
          People who are content with their current employment want to casually
          learn and grow and keep up with recent events via short snackable content
          with a consistently high quality bar. However, most current platforms
          are geared towards long-term through courses and reading.
        </div>
      </div>

      {/* Research */}
      <div style={section}>
        <div className="heading" style={{ color: COLOR }}>Research</div>

        {/* a. Market research */}
        <div style={tableContainer}>
          <div style={table}>
            <div style={tableCol}>
              <div className="emphatic" style={{ color: "#000" }}><b>Rethinking discovery and learning for smaller time budgets</b></div>
              <div className="body">
                I took a look at a few platforms that solve similar problems. Current
                learning platforms do a great job of motivating its users along their
                journeys, as well as allowing users to disover tools for whatever
                subject they are interested in. However, in order to help <em> busy
                professionals </em> successfully grow, I will have to deliver these
                tools in ways condusive to small time budgets.
              </div>
            </div>
            <div style={tableCol}>
              <img src={marketResearch} alt="Market research" width={WIDTH / 3.3} style={{ paddingBottom: SECTION_SPACING }} ></img>
            </div>
          </div>
        </div>

        {/* b. User research */}
        <div className="body">
          <div className="emphatic" style={{ color: "#000" }}><b>Understanding the content professional</b></div>

          <BlockQuote
            color={COLOR}
            text="Goal: Understand what people hope to achieve in terms of career 
          growth, and what difficulties they currently face."
          ></BlockQuote>

          In order to understand the needs and motivations of the target audience, I
          conducted user interviews. I found the following common pain points among
          respondents. These points will drive my design decisions for the rest of the case.

          <img src={painPoints} alt="The four central pain points are for time, discovery, motivation, and cross-industry interest." width={WIDTH} style={{ paddingTop: 30, paddingBottom: 20 }}></img>
        </div>
      </div>

      {/* Problem */}
      <div style={section}>
        <div className="heading" style={{ color: COLOR }}>Problem</div>
        <div className="emphaticBlockText">
          People who are content with their work want to continue growing according
          to their interests, but they can't because they <b>don't have enough time</b> and
          <b> cannot find the right content</b> to meet their goals.
        </div>
      </div >

      {/* Solution */}
      <div style={section}>
        <div className="heading" style={{ color: COLOR }}>Solution</div>
        <div className="emphatic">
          Grow on the go.
          <br></br>
          Grow your way.
        </div>
        <div className="body">
          Exceed reimagines the career development process to make it easy and fun
          to use between busy schedules. Its unique features make the content and
          learning experience personalized to your interests and needs.
        </div>

        {/* Curated content */}
        <div style={tableContainer}>
          <div style={table}>
            <div style={tableCol}>
              <div>
                <div className="heading">01</div>
                <div className="emphatic"><b>Curated content</b></div>
                <div className="body">A personalized feed of content and events to
               learn and grow from, based on a user's interests. </div>
              </div>
            </div>
            <div style={tableColFinal}>
              <img src={content} alt="Home and events pages" width={"100%"} ></img>
            </div>
          </div>
        </div>

        {/* Discovery */}
        <div style={tableContainer}>
          <div style={table}>
            <div style={tableCol}>
              <img src={personalization} alt="Home and events pages" width={"100%"} ></img>
            </div>
            <div style={tableColFinal}>
              <div >
                <div className="heading">02</div>
                <div className="emphatic"><b>Built for discovery</b></div>
                <div className="body">Search for any subject or explore a content related
              to a specific topic of interest. </div>
              </div>
            </div>
          </div>
        </div>

        {/* Saving */}
        <div style={tableContainer}>
          <div style={table}>
            <div style={tableCol}>
              <div >
                <div className="heading">03</div>
                <div className="emphatic"><b>Save lists and notes for later</b></div>
                <div className="body">Save interesting content for later, and jot down
               thoughts at any time.</div>
              </div>
            </div>
            <div style={tableColFinal}>
              <img src={time} alt="Save content and ideas for later" width={"100%"} ></img>
            </div>
          </div>
        </div>

        {/* Motivation */}
        <div style={tableContainer}>
          <div style={table}>
            <div style={tableCol}>
              <img src={motivation} alt="Set goals and earn achievements" width={"100%"} ></img>
            </div>
            <div style={tableColFinal}>
              <div >
                <div className="heading">04</div>
                <div className="emphatic"><b>Stay motivated</b></div>
                <div className="body">Set weekly goals and earn achievements as you progress.</div>
              </div>
            </div>
          </div>
        </div>

      </div >

      <div style={{ display: "inline-block", paddingTop: SECTION_SPACING }}><Gallery cols={props.chooseMoreData(uxData, ID).length} totalWidth="800" data={props.chooseMoreData(uxData, ID)} msg="check out another case study!"></Gallery></div>

    </div >
  );
}

export default App;
