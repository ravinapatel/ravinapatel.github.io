import React from 'react';
import {useRef} from 'react';
// import Intro from "../../Components/WorkIntro";


import Gallery from "../../Components/Gallery";
// import Cover from "../../Components/case_study_components/Cover";
import uxData from "../../Data/uxData.json";
import useWindowSize from "../../Components/useWindowSize";
import FadeIn from 'react-fade-in';
import Link from "../../Components/Link";
import ScrollToTop from "../../Components/ScrollToTop";
import './CaseStudy.css';

// IMAGES

import exceedCover from "../../Images/portfolio/ux/exceed/exceed-banner.png";
// import solutionCover from "../../Images/portfolio/ux/exceed/solution-cover.png";
// import finalCover from "../../Images/portfolio/ux/exceed/final-cover.png";

import solutionPreview from "../../Images/portfolio/ux/exceed/solution-preview.png";
import solutionPreviewSmall from "../../Images/portfolio/ux/exceed/solution-preview-small.png";
import painPoints from "../../Images/portfolio/ux/exceed/pain-points.png";
import contentRequirements from "../../Images/portfolio/ux/exceed/content-requirements.png";
import mediaGraph from "../../Images/portfolio/ux/exceed/media-graph.png";
import mediaGraphSmall from "../../Images/portfolio/ux/exceed/media-graph-small.png";

// import marketResearch from "../../Images/portfolio/ux/exceed/market-research.png";
// import content from "../../Images/portfolio/ux/exceed/content.png";
// import dataTime from "../../Images/portfolio/ux/exceed/data-time.png";
// import dataMedia from "../../Images/portfolio/ux/exceed/data-media.png";
// import dataMore from "../../Images/portfolio/ux/exceed/data-more.png";

import processTypes from "../../Images/portfolio/ux/exceed/process-time.png";
import processSave from "../../Images/portfolio/ux/exceed/process-save.png";
import processCard from "../../Images/portfolio/ux/exceed/process-card.png";
import processExplore from "../../Images/portfolio/ux/exceed/process-explore.png";
// import timeIcon from "../../Images/portfolio/ux/exceed/time-icon.png";
// import exploreIcon from "../../Images/portfolio/ux/exceed/explore-icon.png";
// import motivationIcon from "../../Images/portfolio/ux/exceed/motivation-icon.png";
// import crossIcon from "../../Images/portfolio/ux/exceed/cross-icon.png";

// import personalization from "../../Images/portfolio/ux/exceed/personalization.png";
import motivation from "../../Images/portfolio/ux/exceed/motivation.png";
// import interests from "../../Images/portfolio/ux/exceed/onboarding-interests.png";
// import time from "../../Images/portfolio/ux/exceed/time.png";


// The Exceed App

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
  const COLOR = "#0F5BE5"
  const RESPONSIVE_WIDTH = isBigScreen ? 800 : "90%"
  const SECTION_SPACING = 42
  const ID = "exceed"       // must match the project id in uxData

  const contentStyle = {
    textAlign: "center",
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    paddingTop: 32
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
  const introTableCol2 = {
    flex: .3,
    paddingRight: isSmallScreen ? 0 : 60, paddingBottom: isSmallScreen ? 60 : 0,
  }
  const introTableColFinal = {
    flex: .2,
  }

  const processTableCol = {
    flex: 1,
    display: "block",
    paddingRight: isSmallScreen ? 0 : 60, 
    paddingBottom: isSmallScreen ? 30 : 0,
  }
  const processTableColFinal = {
    flex: 1,
  }

  const sectionFull = {
    display: "block",
    marginBottom: SECTION_SPACING,
    marginTop: SECTION_SPACING,
    width: "100%",
    textAlign: "center"
  }
  const tableContainerFull = {
    display: "inline-block",
    marginBottom: 10,
    width: "90%",
  }
  if (window.width > 1050) tableContainerFull.width = "75%"
  else if (!isBigScreen) tableContainerFull.width = "90%"
  else tableContainerFull.width = "800px"

  const tableFull = {
    MsFlex: 1,  /* IE 10 */
    display: isSmallScreen ? "block" : "flex",
    paddingBottom: isSmallScreen ? 40 : 40
  }
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

  const sectionDataFull = {
    // width: "100%",
    // borderTop: "2px solid #000",
    // borderBottom: "2px solid #000",
    display: "inline-block",
    textAlign: "center",
    marginBottom: SECTION_SPACING,
    marginTop: SECTION_SPACING,
    width: isBigScreen ? "85%" : "100%",
    backgroundColor: "#FFFFFF",
    padding: "30px 0px"
  }

  const dataRowLeft = {
    verticalAlign: "top",
    margin: "20px 0px",
    borderBottom: "1px solid #DDD",
    borderRight: "1px solid #DDD",
    padding: "20px 0px",
    width: isSmallScreen ? "50%" : "60%"
  }
  const dataRowRight = {
    verticalAlign: "top",
    margin: "20px 0px",
    borderBottom: "1px solid #DDD",
    padding: "20px 0px 20px 20px",
    width: isSmallScreen ? "50%" : "40%"
  }
  const dataRowLeftFinal = {
    verticalAlign: "top",
    margin: "20px 0px",
    borderRight: "1px solid #DDD",
    padding: "20px 0px",
    width: isSmallScreen ? "50%" : "60%"
  }
  const dataRowRightFinal = {
    verticalAlign: "top",
    margin: "20px 0px",
    padding: "20px 20px",
    width: isSmallScreen ? "50%" : "40%"
  }

  // moreStyle is also spec in Play.js
  const moreStyle = {
    verticalAlign: "top",
    display: "inline-block",
    paddingTop: "50px",
    paddingBottom: "50px",
  }
  if (window.width > 1200) {          // big screen (according to gallery thresholds)
    moreStyle.height = 450
  }
  else if (window.width < 700) {      // small screen
    moreStyle.height = "auto"
  }
  else if (window.width < 940) {      // small-medium screen
    moreStyle.height = 450
  }
  else {
    moreStyle.height = 500            // big-medium screen
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
          <div className="title0" style={{ color: "#000", marginTop: -SECTION_SPACING, paddingTop: SECTION_SPACING, marginBottom: -SECTION_SPACING }} ref={el2}>Exceed</div>
        </div>
        
        {/* Block quote */}
        <div style={section}>
          <div className="body blockQuote" style={{marginBottom: 56}}>
          In the summer of 2020, I participated in a series of case competitions hosted by 
          Paravane Ventures. My submission, Exceed, won first place for a competition where 
          we were challenged to design a way for professionals to continue to learn and develop.
          </div>
        
        {/* Intro */}
          <div style={tableContainer}>
            <div style={table}>
              <div style={introTableCol1}>
                <div className="subheading" >Honors</div>
                <div className="body" >First place in Paravane Venture’s case competition</div>
                <Link text={"Case Winners 2020"} url={"https://paravaneventures.com/design2020/"} isInternal="false" type="block" icon="arrowDiagonal" color="rgba(0, 0, 0, 1)"></Link>
              </div>
              <div style={introTableCol2}>
                <div className="subheading" >Roles</div>
                <div className="body" >Product Designer</div>
              </div>
              <div style={introTableColFinal}>
                <div className="subheading" >Timeline</div>
                <div className="body" >5 days</div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview */}
        {/* FULL SECTION: Solution preview image */}
        <img 
          src={exceedCover} 
          alt="Screenshots of the final solution" 
          style={imageFull}>
        </img>


        {/* Challenge */}
        <div style={section}>
          <div className="heading" style={{ color: COLOR }}>Challenge</div>
          <div className="title1" style={{ color: "#000" }}>Learn on the go</div>
          <div className="body">
            People who are content with their current employment want to casually
            learn, grow, and keep up with recent events on the go. However, most current platforms
            are geared towards long-term learning through courses and reading.
          </div>
        </div>


        {/* a. Market research */}
        <div style={section}>
          <div className="heading" style={{ color: COLOR }}>Research</div>
          <div className="title1" style={{ color: "#000" }}><b>Market research</b></div>
          <div className="callout" style={{ color: "#000" }}>Rethinking discovery and learning for smaller time budgets</div>
          <div className="body">
            I took a look at a few platforms that solve similar problems (Skillshare, LinkedIn 
            Learning, Medium) to find out what’s working and opportunity areas.
            <br></br><br></br>
            <b>What they do well</b>
            <ul>
              <li>Motivate users along their journey with goal setting</li>
              <li>Enable deep dives into topics with pages for specific subjects</li>
              <li>Allow users to save content for later</li>
            </ul>
            
            <b>Opportunity spaces</b>
            <ul>
              <li>Lots of content types take up a long time or require ongoing commitment that busy professionals may not always have</li>
              <ul>
                <li>
                  <span style={{color: "#000", fontWeight: "bold"}}>How might we </span> 
                  <span>allow busy professionals to learn on-the-go?</span>
                </li>
              </ul>
              <li>Current solutions only focus on solo learning</li>
              <ul>
                <li>
                  <span style={{color: "#000", fontWeight: "bold"}}>How might we </span> 
                  <span>enable professionals to learn from each other?</span>
                </li>
              </ul>
            </ul>
          </div>
        </div>

        {/* b. User research */}
        <div style={section}>
          <div className="title1" style={{ color: "#000" }}><b>User research</b></div>
          <div className="callout" style={{ color: "#000" }}>Understanding the content professional</div>
          <div className="body">
            In order to understand the needs and motivations of the target audience, I
            conducted user interviews. I created data visualizations to organize my findings
            and form my problem statement.
          </div>
        </div>


        {/* Data visualization */}
        <div style={sectionDataFull}>
          <table style={{width: "90%", display: "inline-block", textAlign: "left"}}>
            <tr>
              <th style={dataRowLeft}>Data Trend</th>
              <th style={dataRowRight}>Insight</th>
            </tr>
            <tr >
              <td style={dataRowLeft}>
                <div style={{display:"inline-block", width: isSmallScreen ? "100%" : "200px", paddingRight: isBigScreen ? "80px" : "20px", paddingBottom: isBigScreen ? "0px" : "20px"}}>
                  <div className='highlight'>
                    31%
                  </div>
                  <div className="body" style={{width: "100%"}}>
                    of respondents said time was an issue they currently face in trying to learn
                  </div>
                </div>
                <div style={{display:"inline-block", width: isSmallScreen ? "100%" : "200px"}}>
                  <div className='highlight'>
                    80%
                  </div>
                  <div className="body">
                    of those people hoped to spend at least 60 min per day on career growth
                  </div>
                </div>
              </td>
              <td className="body" style={dataRowRight}>
                People think they need to spend more time than they actually have on career growth. They don’t know about “casual learning”.
              </td>
            </tr>
            <tr>
              <td style={dataRowLeft}>
                <img src={isSmallScreen ? mediaGraphSmall : mediaGraph} alt="TODO" width={isBigScreen ? "90%" : "90%"}></img>
              </td>
              <td className="body" style={dataRowRight}>
                People are most interested in consuming a mix of videos, podcasts, courses, and articles.
              </td>
            </tr>
            <tr>
              <td style={dataRowLeftFinal}>
                <div style={{display:"inline-block", width: "200px", paddingRight: "40px"}}>
                  <div className='highlight' style={{display:"inline-block"}}>
                    50%
                  </div>
                  <div className="body" style={{display:"inline-block"}}>
                    of respondents struggle with finding the appropriate tools to learn specific topics
                  </div>
                </div>
              </td>
              <td className="body" style={dataRowRightFinal}>
                When people know what they want to learn about, they don't know how to go about it.
              </td>
            </tr>
          </table>
        </div>

        <div style={section}>
          <div className="body">
            I summarized my findings into the following common pain points. These
            points will drive my design decisions for the rest of the project.
          </div>

          <img src={painPoints} alt="The three central pain points are discovery, time, and motivation." width={RESPONSIVE_WIDTH} style={{ paddingTop: 60, paddingBottom: 20 }}></img>
        </div>

        {/* Content requirements */}
        <div style={section}>
          <div className="heading" style={{ color: COLOR }}>Solution</div>
          <div className="title1" ><b>Content requirements</b></div>
          <div className="body" >
            Referencing the two opportunity spaces we uncovered through research:
            <ul>
              <li><b>How might we</b> allow busy professionals to learn on-the-go?</li>
              <li><b>How might we</b> enable professionals to learn from each other?</li>
            </ul>
            Exceed aims to deliver four main capabilities to professionals: consuming content, finding career/networking events, searching for tools, and saving content for later.
          </div>
        </div>


        {/* FULL SECTION: Content image */}
        <img 
          src={contentRequirements} 
          alt="The main sections in Exceed are: Home, Events, Search, and My list." 
          style={imageFull}>
        </img>

        {/* Pain points */}
        <div style={section}>
          <div className="title1" ><b>Targeting pain points</b></div>
          <div className="body" style={{marginBottom: SECTION_SPACING}}>
            The four pain points that I came up with summarized my market and user research 
            insights well, so I decided to use them to drive my design decisions.
          </div>
        </div>


        {/* 01. Discovery */}
        <div style={sectionFull}>
          <div style={tableContainerFull}>
            <div style={tableFull}>
              <div style={processTableCol}>
                <div className="tag2" style={{marginBottom: 20, color: COLOR}} >PAIN POINT 1: DISCOVERY</div>
                <div className="title2" ><b>Encouraging targeted search</b></div>
                <div className="body" >
                  I went through a few iterations for the Search entry point. User research showed that people struggled to find tools to learn specific topics, so my goal was to <b>make searching for a topic easy</b>.
                  <br></br><br></br>
                  Options A and B kept the overall information architecture simple, but they made made it difficult to know what to search for. I went with option C because it allows users to dive into topics they're interested in and explore trending content.
                </div>
              </div>
              <div style={processTableColFinal}>
                <img src={processExplore} alt="Explorations for the search entry point." width={"100%"} ></img>
              </div>
            </div>
          </div>
        </div>

        {/* 02. Time */}
        <div style={sectionFull}>
          <div style={tableContainerFull}>
            <div style={tableFull}>
              <div style={processTableCol}>
                <div className="tag2" style={{marginBottom: 20, color: COLOR}} >PAIN POINT 2: TIME</div>
                <div className="title2" ><b>Fitting into a tight schedule</b></div>
                <div className="body" >
                  Through user and market research, I chose three media types that were conducive to short time budgets: video, audio, and text.                </div>
                </div>
              <div style={processTableColFinal}>
                <img src={processTypes} alt="Screenshots of media types" width={"100%"} ></img>
              </div>
            </div>
            <div style={tableFull}>
              <div style={processTableCol}>
                <div className="body" style={{paddingBottom: 10}} >
                  I <b>emphasized the watch or read time</b> of content to encourage users to consume content that fits with their time.
                </div>
                <img src={processCard} alt="Screenshots of media cards emphasizing watch or read time" width={isSmallScreen ? "90%" : "70%"} ></img>
              </div>
              <div style={processTableColFinal}>
                <div className="body" style={{paddingBottom: 10}} >
                  Users can <b>save content for later</b>, and jot down notes as they watch or listen. This way, they can easily pick up where they left off.
                </div>
                <img src={processSave} alt="Saving content flow" width={"100%"} ></img>
              </div>
            </div>
          </div>
        </div>

        {/* 03. Motivation */}
        <div style={sectionFull}>
          <div style={tableContainerFull}>
            <div style={tableFull}>
              <div style={processTableCol}>
                <div className="tag2" style={{marginBottom: 20, color: COLOR}} >PAIN POINT 3: MOTIVATION</div>
                <div className="title2" ><b>Staying motivated</b></div>
                <div className="body" >
                  <b>Goal setting</b>
                  <br></br>
                  A central issue I found through user research was that people thought they needed to dedicate much 
                  more time than they have, setting them up for failure. I used copy to <b>encourage setting attainable 
                  goals</b> during onboarding.                  
                  <br></br><br></br>

                  <b>Gamification</b>
                  <br></br>
                  I used gamification elements to sustain motivation
                  <ul>
                    <li>Achievements: Users earn achievements as they learn more with Exceed. They are rewarded for several actions, such as consistent learning and the amount of content consumed.</li>
                    <li>Stats: The number of topics learned is displayed at the top of the page, as a reminder of the user's progress and as motivation to increase the number by learning more.</li>
                  </ul>
                </div>
              </div>
              <div style={processTableColFinal}>
                <img src={motivation} alt="Screenshots of goals and achievements" width={"100%"} ></img>
              </div>
            </div>
          </div>
        </div>


        {/* Final Designs */}
        <div style={section}>
          <div className="title1" style={{ color: "#000" }}><b>Final submission</b></div>
        </div>

        {/* FULL SECTION: Final solution image */}
        <img 
          src={isSmallScreen ? solutionPreviewSmall : solutionPreview} 
          alt="Final solution" 
          style={imageFull}>
        </img>

        {/* Reflection */}
        <div style={section}>
          <div className="heading" style={{ color: COLOR }}>Impact & Reflection</div>
          <div className="title1" style={{ color: "#000" }}><b>How it went</b></div>
          <div className="body">
            My submission won first place in the case competition!
            <Link text={"Case Winners 2020"} url={"https://paravaneventures.com/design2020/"} isInternal="false" type="inline" icon="arrowDiagonal" color="rgba(0, 0, 0, 1)"></Link>

            <br></br><br></br>
            Working on this project was really exciting because the target user demographic
            was completely different from myself and my usual circle. I had to rely fully
            on user interviews and research to put myself in the shoes of the user.

            <br></br><br></br>
            The 5-day time constraint also pushed me to research, ideate, and build very quickly.
            I followed Google's design sprint framework to work through the process.

            <br></br><br></br>
            <b>Next Steps</b>
            <br></br>
            If I were to continue working on this project, I would further flesh out flows 
            around progressing towards goals. Since motivation and time were key pain points for
            professionals, I think making users feel proud of themselves for learning would 
            provide a lot of value.
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
