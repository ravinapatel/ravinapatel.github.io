import React from 'react';

import Gallery from "../../Components/Gallery";
import BlockQuote from "../../Components/case_study_components/blockQuote";
import uxData from "../../Data/uxData.json";
import useWindowSize from "../../Components/useWindowSize";
import FadeIn from 'react-fade-in';
import './CaseStudy.css';

// IMAGES

import finalCover from "../../Images/portfolio/ux/exceed/final-cover.png";

import Cover from "../../Images/portfolio/ux/patch/laptop-mockup.jpg";
import laptopMockup from "../../Images/portfolio/ux/patch/laptop-mockup.jpg";
import content from "../../Images/portfolio/ux/exceed/content.png";

import processTypes from "../../Images/portfolio/ux/exceed/process-time.png";
import processSave from "../../Images/portfolio/ux/exceed/process-save.png";
import processCard from "../../Images/portfolio/ux/exceed/process-card.png";
import processExplore from "../../Images/portfolio/ux/exceed/process-explore.png";
import timeIcon from "../../Images/portfolio/ux/exceed/time-icon.png";
import exploreIcon from "../../Images/portfolio/ux/exceed/explore-icon.png";
import motivationIcon from "../../Images/portfolio/ux/exceed/motivation-icon.png";
import crossIcon from "../../Images/portfolio/ux/exceed/cross-icon.png";

import personalization from "../../Images/portfolio/ux/exceed/personalization.png";
import motivation from "../../Images/portfolio/ux/exceed/motivation.png";
import interests from "../../Images/portfolio/ux/exceed/onboarding-interests.png";
import time from "../../Images/portfolio/ux/exceed/time.png";


// The Exceed App

// RENDERING
function App(props) {

  // RESPONSIVENESS
  const window = useWindowSize();
  var isBigScreen = window.width > 900
  var isMediumScreen = window.width < 900
  var isSmallScreen = window.width < 700

  // STYLING
  const COLOR = "#27C8D2"
  const GREY = "#9a9a9a"
  const WIDTH = isBigScreen ? 800 : "90%"
  const PADDING = (window.width - WIDTH) / 2
  const SECTION_SPACING = 50
  const ID = "patch"       // must match the project id in uxData

  const contentStyle = {
    textAlign: "center",
    overflow: "hidden"
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
    <FadeIn transitionDuration="500">
      <div style={contentStyle}>
        {/* Intro */}
        <div style={section}>
          <div style={{ width: 400, textAlign: "center", display: "inline-block", paddingBottom: 60 }} className="emphatic">
            A way for consumers to give feedback and for developers to process and respond to it.
        </div>

          <img src={Cover} alt="Project cover image" width={WIDTH} ></img>

          <div style={tableContainer}>
            <div style={table}>
              <div style={tableCol}>
                <div className="subheading" >My Role</div>
                <div className="body" > Design lead</div>
                <div className="body" > Focus: developer-facing web platform</div>
              </div>
              <div style={tableCol}>
                <div className="subheading" >Team</div>
                <div className="body" ><u>Developers</u>: Omar Rasheed, Yana Sang, Cameron Russell</div>
                <div className="body" ><u>Designers</u>: Gracie Jing, Ravina Patel (me)</div>
              </div>
              <div style={tableCol}>
                <div className="subheading" >Duration</div>
                <div className="body" >2 months</div>
              </div>
            </div>
          </div>
        </div>

        {/* Background */}
        <div style={section}>
          <div className="heading" style={{ color: COLOR }}>Background</div>
          <div className="body">
            As a developer or designer, getting feedback about your product’s
            performance is critical to keeping up with the needs of the users
            and satisfying customers. This problem exists with any digital
            product, so why should features solving this problem have to be
            built out for every product?
          </div>

          <div style={{ paddingTop: 20 }} className="body">
            Our team set out to create a solution
            that we could easily use to get and organize feedback across all of
            our apps.
          </div>
        </div>

        {/* IN PROGRESS */}
        <div style={section}>
          <div className="heading" style={{ color: COLOR }}>Under construction!</div>
          <div className="body">
            I'm in the process of writing the complete case study, but please
            <a href="mailto: rpp62@cornell.edu" target="_blank" style={{ color: GREY, textDecoration: "none" }}> contact me </a>
            if you're interested or if you'd like to learn more about it!
          </div>
        </div>


        <div style={{ display: "inline-block", paddingTop: SECTION_SPACING }}><Gallery cols={props.chooseMoreData(uxData, ID).length} totalWidth="800" data={props.chooseMoreData(uxData, ID)} msg="check out another case study!"></Gallery></div>

      </div>
    </FadeIn >
  );
}

export default App;
