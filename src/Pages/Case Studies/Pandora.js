import React from 'react';

import Gallery from "../../Components/Gallery";
import BlockQuote from "../../Components/case_study_components/blockQuote";
import uxData from "../../Data/uxData.json";
import useWindowSize from "../../Components/useWindowSize";
import FadeIn from 'react-fade-in';
import './CaseStudy.css';

import Cover from "../../Images/portfolio/ux/pandora-banner.png";


// Pandora Internship
// RENDERING
function App(props) {

  // RESPONSIVENESS
  const window = useWindowSize();
  var isBigScreen = window.width > 900
  var isMediumScreen = window.width < 900
  var isSmallScreen = window.width < 700

  // STYLING
  const COLOR = "#D632C5"
  const WIDTH = isBigScreen ? 800 : "90%"
  const PADDING = (window.width - WIDTH) / 2
  const SECTION_SPACING = 50
  const ID = "pandora"       // must match the project id in uxData

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
    marginBottom: 30,
    width: WIDTH
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
          <div style={{ width: !isSmallScreen ? 400 : "", textAlign: "center", display: "inline-block", paddingBottom: 60 }} className="emphatic">
            Revamped Pandora Charts to increase their media value and make internal curation more efficient.
          </div>

          <img src={Cover} alt="Project cover image" width={WIDTH} ></img>

          <div style={tableContainer}>
            <div style={table}>
              <div style={tableCol}>
                <div className="subheading" >Timeline</div>
                <div className="body" >Summer 2021, 10 weeks</div>
              </div>
              <div style={tableColFinal}>
                <div className="subheading" >My Role</div>
                <div className="body" > Product Design Intern</div>
              </div>
            </div>
          </div>

        </div>

        {/* Background */}
        <div style={section}>
          <div className="heading" style={{ color: COLOR }}>Background</div>
          <div className="body">
            In the summer of 2021, I was a Product Design Intern on Pandora’s
            Creator Catalog Team. This team builds tools that allow artists and
            record labels to easily engage with Pandora’s services. I was given
            full ownership and creative freedom on a project that I researched,
            designed, and prototyped. <br></br> <br></br>

            My project revolved around the end-to-end service of Pandora
            Charts. For this project...
            <ul>
              <li>
                I designed an internal tool that streamlines the current
                chart curation workflow to be more automated, scalable, and
                easily collaborative.
              </li>
              <li>
                I designed a website for Pandora Charts that optimizes
                shareability, promotes artist involvement, and builds listener
                audiences.
              </li>
              <li>
                I presented interview findings and hi-fidelity prototypes to
                leadership and product stakeholders.
              </li>
            </ul>

          </div>
        </div>

        {/* Reflection */}
        <div style={section}>
          <div className="heading" style={{ color: COLOR }}>Reflection</div>
          <div className="body" >
            I worked on both the internal and external experience of charts
            that affected various user groups ranging from record labels to
            listeners. From this challenge, I got experience creating a
            wholistic experience that spans multiple platforms, contexts, and
            users. I learned to think about how the tools I designed would
            affect each other, and how to prioritize various (and occasionally
            conflicting) user needs and business goals.
          </div>
        </div>




        <div style={{ display: "inline-block", paddingTop: SECTION_SPACING }}><Gallery cols={props.chooseMoreData(uxData, ID).length} totalWidth="800" data={props.chooseMoreData(uxData, ID)} msg="check out another case study!"></Gallery></div>

      </div>
    </FadeIn >
  );
}

export default App;
