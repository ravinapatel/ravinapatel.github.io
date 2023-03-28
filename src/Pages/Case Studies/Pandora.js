import React from 'react';
import {useRef} from 'react';
import Gallery from "../../Components/Gallery";
// import Cover from "../../Components/case_study_components/Cover";
import uxData from "../../Data/uxData.json";
import useWindowSize from "../../Components/useWindowSize";
import FadeIn from 'react-fade-in';
import Link from "../../Components/Link";
import ScrollToTop from "../../Components/ScrollToTop";
import './CaseStudy.css';

// IMAGES
import solutionPreview from "../../Images/portfolio/ux/pandora/microsite.png";
import marketResearch from "../../Images/portfolio/ux/pandora/market-research.png";
import journeyMap from "../../Images/portfolio/ux/pandora/journey-map.png";
import affinityMap from "../../Images/portfolio/ux/pandora/affinity-map.png";
import opportunities from "../../Images/portfolio/ux/pandora/opps.png";
import opportunitiesSmall from "../../Images/portfolio/ux/pandora/opps-small.png";
import userFlow from "../../Images/portfolio/ux/pandora/user-flow.png";
import micrositeDesign from "../../Images/portfolio/ux/pandora/microsite-design.png";


// Pandora Charts

// RENDERING
function App(props) {

  // USE REF HOOK FOR SCROLL TO ELEMENT
  const scrollToDiv = (ref) => ref.current?.scrollIntoView({behavior: 'smooth'});
  const el1 = useRef();
  const el2 = useRef();

  // RESPONSIVENESS
  const window = useWindowSize();
  var isBigScreen = window.width > 900
  var isSmallScreen = window.width < 700

  // STYLING
  const COLOR = "#951FDD"
  const RESPONSIVE_WIDTH = isBigScreen ? 800 : "90%"
  const SECTION_SPACING = 42
  const ID = "pandora"       // must match the project id in uxData

  const contentStyle = {
    textAlign: "center",
    overflow: "hidden",
    backgroundColor: "#FFFFFF"
  }
  const section = {
    display: "block",
    paddingBottom: SECTION_SPACING,
    paddingTop: SECTION_SPACING,
    width: RESPONSIVE_WIDTH,
    margin: "auto",
  }
  const tableContainer = {
    display: "block",
    marginTop: 30,
    marginBottom: 30,
    width: isBigScreen ? 800 : "100%",
  }
  const table = {
    MsFlex: 1,  /* IE 10 */
    display: isSmallScreen ? "block" : "flex",
    width: RESPONSIVE_WIDTH
  }

  const introTableCol1 = {
    flex: .5,
    paddingRight: isSmallScreen ? 0 : 60, 
    paddingBottom: isSmallScreen ? 60 : 0,
  }
  const introTableColFinal = {
    flex: .5,
  }

  const tableContainerFull = {
    display: "inline-block",
    marginBottom: 10,
    width: "90%",
  }
  if (window.width > 1050) tableContainerFull.width = "75%"
  else if (!isBigScreen) tableContainerFull.width = "90%"
  else tableContainerFull.width = "800px"

  const imageFull = {
    // width: "100%",
    width: isBigScreen ? "75%" : "100%",
    // maxHeight: window.height, 
    borderTop: "2px solid #000", 
    borderBottom: "2px solid #000", 
    borderLeft: isBigScreen ? "2px solid #000" : "none",
    borderRight: isBigScreen ? "2px solid #000" : "none",
    height: "auto",
    marginBottom: SECTION_SPACING, 
    objectFit: 'cover'
  }
  const imageFullNoBorder = {
    width: isBigScreen ? "75%" : "90%",
    height: "auto",
    marginBottom: SECTION_SPACING, 
    objectFit: 'cover'
  }
  const imageSmall = {
    width: isBigScreen ? 800 : "100%",
    borderTop: "2px solid #000", 
    borderBottom: "2px solid #000", 
    borderLeft: isBigScreen ? "2px solid #000" : "none",
    borderRight: isBigScreen ? "2px solid #000" : "none",
    height: "auto",
    marginBottom: SECTION_SPACING, 
    objectFit: 'cover'
  }
  const imageSmallNoBorder = {
    width: RESPONSIVE_WIDTH,
    height: "auto",
    marginBottom: SECTION_SPACING, 
    objectFit: 'cover'
  }

  const ndaContainer = {
    position: "relative",
    textAlign: "center",
  }

  const ndaLabel = {
    position: "absolute",
    top: "50%",
    left: "50%",
    padding: "16px",
    backgroundColor: "white",
    border: "2px solid #000",
    fontWeight: "bold",
    transform: "translate(-50%, -120%) rotate(-3deg)",
  }

  // moreStyle is also spec in Play.js
  const moreStyle = {
    verticalAlign: "top",
    display: "inline-block",
    paddingTop: SECTION_SPACING,
    paddingBottom: SECTION_SPACING,
  }
  if (window.width > 1200) {          // big screen (according to gallery thresholds)
    moreStyle.height = 550
  }
  else if (window.width < 700) {      // small screen
    moreStyle.height = "auto"
  }
  else if (window.width < 940) {      // small-medium screen
    moreStyle.height = 550
  }
  else {
    moreStyle.height = 620            // big-medium screen
  }

  // RENDERING
  return (
    <FadeIn transitionDuration="500">
      {/* <Cover reference={el1} click={()=> scrollToDiv(el2)} id={ID} color={COLOR}></Cover> */}
      <ScrollToTop></ScrollToTop>
      <div style={contentStyle}>
        <div style={{marginBottom: SECTION_SPACING}}>
          {/* <Intro reference={el1} click={()=> scrollToDiv(el2)}></Intro> */}
        </div>

        {/* Title */}
        <div style={section}>
          <div className="title0" style={{ color: "#000", marginTop: -SECTION_SPACING, paddingTop: SECTION_SPACING, marginBottom: -SECTION_SPACING }} ref={el2}>Pandora Charts</div>
        </div>
        
        {/* Block quote */}
        <div style={section}>
          <div className="body blockQuote">
          Designed an internal tool make internal curation more efficient and revamped 
          the Pandora Charts site to increase its media value. 
          </div>
        </div>
        
        {/* Intro */}
        <div style={section}>
          <div style={tableContainer}>
            <div style={table}>
              <div style={introTableCol1}>
                <div className="subheading" >My Role</div>
                <div className="body" >Product Design Intern</div>
              </div>
              <div style={introTableColFinal}>
                <div className="subheading" >Timeline</div>
                <div className="body" >Summer 2021, 10 weeks</div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview */}
        {/* FULL SECTION: Solution preview image */}
        <img 
          src={solutionPreview}
          alt="Screenshots of the final solution" 
          style={imageFullNoBorder}>
        </img>


        {/* Background */}
        <div style={section}>
          <div className="heading" style={{ color: COLOR }}>Background</div>
          <div className="body">
          In the summer of 2021, I was a Product Design Intern on Pandora’s Creator 
          Catalog Team. This team builds tools that allow artists and record labels 
          to easily engage with Pandora’s services. My project was to migrate the 
          end to end Pandora Charts experience off of a third party platform. This 
          meant creating an <b>internal tool for chart curation</b> as well as an 
          <b> external site to publish charts</b>.
          </div>
        </div>


        {/* Market research */}
        <div style={section}>
          <div className="heading" style={{ color: COLOR }}>Market Research</div>
          <div className="title1" style={{ color: "#000" }}><b>What makes a chart valuable?</b></div>
          <div className="body">
            I looked at charts from various platforms and found a few important traits 
            that correlated with relevance and value in the music industry.
            <br></br>
            <ul>
              <li>
                <b>Shareability</b>: Charts that are easily shareable get more media 
                from press and artist shares.
              </li>
              <li>
                <b>Unique data</b>: Platforms that leverage the unique data they have 
                create more insightful charts.
              </li>
              <li>
                <b>Metrics</b>: Charts with streaming numbers are referenced more.
              </li>
            </ul>
          </div>
        </div>

        {/* FULL SECTION: Market research */}
        <img 
          src={marketResearch}
          alt="Screenshots of other charts in the market" 
          style={imageFull}>
        </img>


        {/* User research */}
        <div style={section}>
          <div className="heading" style={{ color: COLOR }}>User Research</div>
          <div className="title1" style={{ color: "#000" }}><b>Who creates and uses Pandora Charts?</b></div>
          <div className="body">
            Pandora Charts is a complex service that touches many user groups, both 
            internally and externally. I split up my interviews into two phases: 
          
          {/* User types */}
            <div style={tableContainer}>
              <div style={table}>
                <div style={introTableCol1}>
                  <div><b>People involved with chart curation</b></div>
                  <ul>
                    <li>Curators</li>
                    <li>Genre leads</li>
                    <li>Reviewers</li>
                  </ul>
                </div>
                <div style={introTableColFinal}>
                  <div><b>Stakeholders and people who use the charts</b></div>
                    <ul>
                      <li>Internal chart users</li>
                      <li>Stakeholders</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        {/* Research Synthesis */}

        {/* a. Understanding the curators */}
        <div style={section}>
          <div className="heading" style={{ color: COLOR }}>Research Synthesis</div>
          <div className="title1" style={{ color: "#000" }}><b>Understanding the curators</b></div>
          <div className="body">
            I used the insights gathered from the interviews, to create a user journey 
            map that depicts the current process of publishing charts. This map served 
            as a tool to identify pain points and potential opportunities within the 
            workflow.
          </div>
        </div>
        {/* FULL SECTION: Market research */}
        <div style={ndaContainer}>
          <img 
            src={journeyMap}
            alt="Journey map for chart curators" 
            style={imageSmall}>
          </img>
          <div style={ndaLabel}>
            NDA
          </div>
        </div>


        {/* b. Opportunities */}
        <div style={section}>
          <div className="title1" style={{ color: "#000" }}><b>Opportunities</b></div>
          <div className="body">
            I used affinity mapping to uncover common themes that emerged from the 
            multitude of interviews I conducted.
          </div>
        </div>
        {/* FULL SECTION: Affinity map */}
        <div style={ndaContainer}>
          <img 
            src={affinityMap}
            alt="Affinity map synthesizing user interview findings" 
            style={imageSmall}>
          </img>
          <div style={ndaLabel}>
            NDA
          </div>
        </div>

        <div style={section}>
          <div className="body">
            Based on the findings from user research and market research, I 
            pinpointed four key areas of opportunity to increase the efficiency 
            and impact of Pandora Charts.
          </div>
        </div>
        {/* FULL SECTION: Opportunities */}
        <img 
          src={isSmallScreen ? opportunitiesSmall : opportunities}
          alt="Four opportunity areas: Automation, Centralization, Social infrastructure, Increase listeners" 
          style={imageFullNoBorder}>
        </img>


        {/* Solution */}
        {/* a. User flow */}
        <div style={section}>
          <div className="heading" style={{ color: COLOR }}>Solution</div>
          <div className="title1" style={{ color: "#000" }}><b>Service blueprint</b></div>
          <div className="body">
            I devised a new flow for Pandora Charts that spans curating internally, 
            publishing onto the external Pandora Charts site, and updating associating 
            chart playlists on the listener app. The entire curation process is centralized 
            onto a single internal tool, and the user flow diagram highlights several 
            automated side effects that previously required human action. 
          </div>
        </div>
        {/* FULL SECTION: User flow */}
        <div style={ndaContainer}>
          <img 
            src={userFlow}
            alt="My proposed service blueprint for Pandora Charts" 
            style={imageSmall}>
          </img>
          <div style={ndaLabel}>
            NDA
          </div>
        </div>


        {/* b. Pandora Charts site */}
        <div style={section}>
          <div className="title1" style={{ color: "#000" }}><b>Pandora Charts site</b></div>
          <div className="body" style={{paddingBottom: 12}}>
            I designed the website for Pandora Charts that optimizes shareability, promotes 
            artist involvement, and builds listener audiences.
          </div>
          <div className="body">
            See the live site here: 
            <Link text={"Pandora Charts"} url={"https://pandoracharts.com/"} isInternal="false" type="inline" icon="arrowDiagonal" color="rgba(0, 0, 0, 1)"></Link>
            
            <br></br><br></br>
            <b>Key features:</b>
            <ul>
              <li>
              The primary CTA, as well as several other entry points, drives users to 
              Pandora through a listener app integration.
              </li>
              <li>
                The spotlight section and badges make charting more exciting 
                and likely to be shared by artists.
              </li>
            </ul>
          </div>
        </div>
        {/* FULL SECTION: Microsite */}
        <img 
          src={micrositeDesign}
          alt="The external Pandora Charts site design"
          style={imageSmallNoBorder}>
        </img>

        {/* c. Intenral tool */}
        <div style={section}>
          <div className="title1" style={{ color: "#000" }}><b>Internal curation tool</b></div>
          <div className="body" >
            I designed an internal tool for chart curation that automates many 
            previously tedious tasks that were low points in the curator user 
            journey. The tool aims to centralize relevant information to make the 
            curation process as seamless as possible.
            
            <br></br><br></br>
            <b>Key features:</b>
            <ul>
              <li>
                Curators are able to add notes to tracks, centralizing the conversation 
                around charts from what used to be spread across email and Slack.
              </li>
              <li>
                Track data that is critical to the curation process is centralized
                onto one tool and available at a glance.
              </li>
              <li>
                Upon publishing a chart, a few automated processes occur: the external 
                chart website is updated, the listener app playlist is generated, and the 
                chart email gets sent out to subscribers.
              </li>
            </ul>
          </div>
        </div>



        {/* Impact */}
        <div style={section}>
          <div className="heading" style={{ color: COLOR }}>Impact</div>
          <div className="body" style={{paddingBottom: 12}}>
            Both the curation tool and the charts site were developed and 
            shipped in the year following my internship!
          </div>
          <div className="body">
            See the live site here: 
            <Link text={"Pandora Charts"} url={"https://pandoracharts.com/"} isInternal="false" type="inline" icon="arrowDiagonal" color="rgba(0, 0, 0, 1)"></Link>
            
            <br></br><br></br>
            My project revolved around the end-to-end service of Pandora Charts. During my internship...
            <ul>
              <li>
                I designed an internal tool that streamlines the current chart curation workflow to be 
                more automated, scalable, and easily collaborative.
              </li>
              <li>
                I designed a website for Pandora Charts that optimizes shareability, promotes artist 
                involvement, and builds listener audiences.
              </li>
              <li>
                I presented interview findings and hi-fidelity prototypes to design leadership and 
                product stakeholders.
              </li>
            </ul>
          </div>
        </div>


        {/* Reflection */}
        <div style={section}>
          <div className="heading" style={{ color: COLOR }}>Reflection</div>
          <div className="body">
            I worked on both the internal and external experience of charts that affected 
            various user groups ranging from record labels to listeners. From this challenge, 
            I got experience creating a holistic experience that spans multiple platforms, 
            contexts, and users. I learned to think about how the tools I designed would 
            affect each other, and how to prioritize various (and occasionally conflicting) 
            user needs and business goals.
          </div>
        </div>


        {/* SEE MORE */}
        <div style={moreStyle}>
          <Gallery 
            numColsArray={[props.chooseMoreData(uxData, ID).length,props.chooseMoreData(uxData, ID).length,1]} 
            totalWidth={800}
            data={props.chooseMoreData(uxData, ID)} 
            title="check out another case study!"
            square="false" 
            isLarge="false">
          </Gallery>
        </div>

        </div>

    </FadeIn >
  );
}

export default App;
