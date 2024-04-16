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
// import brainstorming from "../../Images/portfolio/ux/snap/brainstorming.png";
import ideas from "../../Images/portfolio/ux/snap/ideas.png";
import infoCard from "../../Images/portfolio/ux/snap/info-card.png";
import iterations from "../../Images/portfolio/ux/snap/iterations.png";
import infoHierarchy from "../../Images/portfolio/ux/snap/cliques-section.png";

import solutionPreview from "../../Images/portfolio/ux/snap/solution-preview.png";
import solutionPreviewSmall from "../../Images/portfolio/ux/color-thumbnails/snap.png";
// import painPoints from "../../Images/portfolio/ux/exceed/pain-points.png";

import currentDiscover from "../../Images/portfolio/ux/snap/current-discover-mock.png";
import finalDesign from "../../Images/portfolio/ux/snap/mockup.png";

import Polaroid from "../../Components/Polaroid";

// Snap Cliques

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
  const COLOR = "#AC65F1"
  const RESPONSIVE_WIDTH = isBigScreen ? 800 : "90%"
  const SECTION_SPACING = 42
  const ID = "snap"       // must match the project id in uxData

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

  const introTableCol = {
    flex: .5,
    paddingRight: isSmallScreen ? 0 : 60, 
    paddingBottom: isSmallScreen ? 60 : 0,
  }
  const introTableColFinal = {
    flex: .5,
  }

  const bigLeftCol = {
    flex: .7,
    paddingRight: isSmallScreen ? 0 : 60, 
    paddingBottom: isSmallScreen ? 60 : 0,
  }
  const bigLeftColFinal = {
    flex: .3,
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
  const finalTableCol = {
    flex: .7,
    display: "block",
    paddingRight: isSmallScreen ? 0 : 60, 
    paddingBottom: isSmallScreen ? 30 : 0,
  }
  const finalTableColFinal = {
    flex: .3,
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

  // const sectionDataFull = {
  //   // width: "100%",
  //   // borderTop: "2px solid #000",
  //   // borderBottom: "2px solid #000",
  //   display: "inline-block",
  //   textAlign: "center",
  //   marginBottom: SECTION_SPACING,
  //   marginTop: SECTION_SPACING,
  //   width: isBigScreen ? "85%" : "100%",
  //   backgroundColor: "#FAFAFA",
  //   padding: "30px 0px"
  // }

  const dataRowLeft = {
    verticalAlign: "top",
    margin: "20px 0px",
    borderBottom: "1px solid #DDD",
    borderRight: "1px solid #DDD",
    padding: "20px 20px 20px 0px",
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
    padding: "20px 20px 20px 0px",
    width: isSmallScreen ? "50%" : "60%"
  }
  const dataRowRightFinal = {
    verticalAlign: "top",
    margin: "20px 0px",
    padding: "20px 0px 20px 20px",
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
    moreStyle.height = 420
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
      {/* <Cover reference={el1} click={()=> scrollToDiv(el2)} id="snap" color={COLOR}></Cover> */}
      <ScrollToTop></ScrollToTop>
      <div style={contentStyle}>
        <div style={{marginBottom: SECTION_SPACING}}>
          {/* <Intro reference={el1} click={()=> scrollToDiv(el2)}></Intro> */}
        </div>

        {/* Title */}
        <div style={section}>
          <div className="title0" style={{ color: "#000", marginTop: -SECTION_SPACING, paddingTop: SECTION_SPACING, marginBottom: -SECTION_SPACING }} ref={el2}>Snap Cliques</div>
        </div>
        
        {/* Block quote */}
        <div style={section}>
          <div className="body blockQuote" style={{marginBottom: 56}}>
          I began my product design journey with Cornell AppDev’s course, Intro to Digital Product Design. During this class, I completed a case study for a new Snapchat feature, from the research to the prototype phase.
          
          </div>
        
        {/* Intro */}
          <div style={tableContainer}>
            <div style={table}>
              <div style={introTableCol}>
                <div className="subheading" >Roles</div>
                <div className="body" >Product Designer</div>
              </div>
              <div style={introTableColFinal}>
                <div className="subheading" >Timeline</div>
                <div className="body" >One semester, Spring 2019</div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview */}
        {/* FULL SECTION: Solution preview image */}
        <img 
          src={isSmallScreen ? solutionPreviewSmall : solutionPreview} 
          alt="Screenshots of the final solution" 
          style={imageFull}>
        </img>


        {/* Overview */}
        <div style={section}>
          <div className="heading" style={{ color: COLOR }}>Problem</div>
          <div className="body">
            People love to discover new content. We scroll through social media and stare at screens for hours to watch other 
            people’s stuff. Yet, people find Snapchat’s Discover page overwhelmingly “annoying” because:
            <ol>
              <li>The Discover stories don’t align with their interests</li>
              <li>Users have no way of telling Snapchat exactly what they want to see</li>
            </ol>

            <div className="callout" style={{ color: "#000" }}>How might we show people new content that they’re interested in?</div>
          </div>
        </div>


        {/* 01. Market research */}
        <div style={section}>
          <div style={tableContainer}>
            <div style={table}>
              <div style={bigLeftCol}>
              <div className="heading" style={{ color: COLOR }}>Research</div>
                <div className="title1" ><b>Why don't people discover on the Discover page?</b></div>
                <div className="body" >
                  
                  I set out to understand why people don’t use the Discover page to 
                  discover new content. I conducted user interviews with 
                  several Snapchat users of various backgrounds and uses for the app. 

                  The goals for the interviews were to find out what people expect 
                  from the Discover page, and to understand what parts of 
                  the page people tend to use or ignore.
                  
                </div>
              </div>
              <div style={bigLeftColFinal}>
                <img src={currentDiscover} alt="Explorations for the search entry point." width={"100%"} ></img>
              </div>
            </div>
          </div>
        </div>

        <div style={section}>
          <div className='quoteHighlight'> "I use it to explore interests like sports or music" </div>
          <div className='quoteHighlight'> "I like watching stories to keep up with friends' shenanigans" </div>
          <div className="body" style={{paddingTop: "32px"}}>
            I had originally hypothesized that the ordering of content in the Discover feed was leading to 
            irrelevant content. I found that on top of irrelevant content, a lack of social elements also 
            led to disinterest in the feed.
          </div>
        </div>

        {/* b. Problem synthesis */}
        <div style={section}>
          <div className="title1" style={{ color: "#000" }}><b>Problem synthesis</b></div>
          <div className="body">
            In order to understand the needs and motivations of the target audience, I
            conducted user interviews. I created data visualizations to organize my findings
            and form my problem statement.
          </div>

          {/* Trends v. Insights */}
          <table style={{width: "100%", display: "inline-block", textAlign: "left"}}>
            <tr>
              <th style={dataRowLeft}>Trend</th>
              <th style={dataRowRight}>Insight</th>
            </tr>
            <tr>
              <td className="body" style={dataRowLeft}>
                <ul>
                  <li>People think public stories are annoying irrelevant</li>
                  <li>People don't find their interests on it</li>
                  <li>People find it easy to search, but never do so</li>
                  <li>People like to discover new content aligning with their interests</li>
                </ul>
              </td>
              <td style={dataRowRight}>
                <div className="tag2" style={{marginBottom: 12, color: COLOR}} >INTERESTS</div>
                <div className="body">
                  People want to find new content related to their interests, but the most visible Snapchat public stories are often irrelevent to them
                </div>
              </td>
            </tr>

            <tr>
              <td className="body" style={dataRowLeft}>
                <ul>
                  <li>People watch their friends' stories because they like to see what their friends are up to</li>
                </ul>
              </td>
              <td style={dataRowRight}>
                <div className="tag2" style={{marginBottom: 12, color: COLOR}} >SOCIAL</div>
                <div className="body">
                  The For You section deviates from the social aspect of Snapchat
                </div>
              </td>
            </tr>
            
            <tr>
              <td className="body" style={dataRowLeftFinal}>
                <ul>
                  <li>People like to engage with topics they're interested in through likes, comments, posts, etc.</li>
                </ul>
              </td>
              <td style={dataRowRightFinal}>
                <div className="tag2" style={{marginBottom: 12, color: COLOR}} >INTERACTION</div>
                <div className="body">
                  The ways to interact with the public stories are very limited
                </div>
              </td>
            </tr>

          </table>
          
          <div className="callout" style={{ color: "#000" }}>
          People want to find interesting media to share with friends, but they can’t because Snapchat 
          does not know what users are interested in and Discover stories don’t foster social interactions.  
          </div>

        </div>

        
        {/* Ideating */}
        <div style={section}>
          <div style={tableContainer}>
          <div className="heading" style={{ color: COLOR }}>Ideation</div>
            <div style={table}>
              <div style={bigLeftCol}>
                <div className="body" >
                  I asked two of my friends to join my brainstorming session. Coming from different countries and 
                  academic focuses, my friends brought new and unique perspectives to our session!

                  After coming up with over fifty "How might we" questions, we aggregated related questions into 
                  six opportunity spaces, and we chose two to further work with:
                  <ul>
                    <li><b>Bringing content users want: </b>How might we understand people’s interests?</li>
                    <li><b>Making Discover social: </b>How might we increase and improve interaction between users?</li>
                  </ul>
                </div>
              </div>
              <div style={bigLeftColFinal}>
                {/* polaroid */}
                <Polaroid id="snapIdeating" caption={"my brainstorming crew"} angle={"rotate(2deg)"} width={"100%"}></Polaroid>
                {/* <img src={brainstorming} alt="Explorations for the search entry point." width={"100%"} ></img> */}
              </div>
            </div>
          </div>

          <div className="body">
            Then, we brainstormed countless ideas for the chosen opportunity areas. The final six ideas were:
          </div>
        </div>

        {/* FULL SECTION: Content image */}
        <img 
          src={ideas} 
          alt="Our final six ideas were: Public trends, PSA stories, Local connections, Snap Cliques, Filtering, and Friends' Activity" 
          style={imageFull}>
        </img>

        {/* Ideating (cont.) */}
        <div style={section}>
          <div className="body">
            Through SWOT and feasibility v. impact analysis for each of the six ideas, I decided to go with Snap 
            Cliques because it best solved the people problem and had high feasibility.
          </div>
        </div>
        

        {/* Building the solution */}
        <div style={section}>
          <div className="heading" style={{ color: COLOR }}>Building the solution</div>
          <div className="body" style={{marginBottom: SECTION_SPACING}}>
            Cliques are public group stories that people can join, post to, and view. Users can see which cliques their 
            friends are part of and share content from cliques. Snap Cliques allow users to easily discover and engage with content of interest.
          </div>

        {/* Content requirements */}
          <div style={tableContainer}>
          <div className="title1" >What do people want to know before joining a clique?</div>

            <div style={table}>
              <div style={introTableCol}>
                <div className="body" >
                  A few other platforms have similar features. They tend to include the group name, description, preview picture, and 
                  Join or Open button. For Snap Cliques, I included each of those key elements. However, most of these platforms use 
                  groups for personal exploration, while Snap Cliques is meant to foster social interaction. Therefore, I looked to 
                  social platforms like Instagram accounts and Facebook pages. I found that showing friends’ activity and allowing 
                  users to share posts were common ways to increase interpersonal engagement.
                </div>
              </div>
              <div style={introTableColFinal}>
                <img src={infoCard} alt="Content requirements for joining a clique" width={"100%"} ></img>
              </div>
            </div>
          </div>

          <div className='callout'>
            I chose content to draw interest in a clique, while providing social cues about which cliques their friends engage with.
          </div>
        </div>


        {/* 01. Visual design */}
        <div style={sectionFull}>
          <div style={tableContainerFull}>
            <div className="title1" ><b>Visual design</b></div>
            <div style={tableFull}>
              <div style={processTableCol}>
                <div className="body" >
                  I went through many explorations for how to display information about a clique. Snapchat uses both pop-up cards
                  (A) and modals (B) in its current design. However, I noticed that the modals are used more for miscellaneous 
                  capabilities. Since the info card is meant for more essential information, I decided to go with A.
                </div>
              </div>
              <div style={processTableColFinal}>
                <img src={iterations} alt="Explorations for the search entry point." width={"100%"} ></img>
              </div>
            </div>
          </div>
        </div>

        {/* 02. User testing */}
        <div style={sectionFull}>
          <div style={tableContainerFull}>
            <div className="title1" ><b>User testing</b></div>
            <div style={tableFull}>
              <div style={processTableCol}>
                <img src={infoHierarchy} alt="Explorations for the search entry point." width={"100%"} ></img>
              </div>
              <div style={processTableColFinal}>
                <div className="title2" ><b>Increasing feature engagement</b></div>
                <div className="body" >
                  My research showed that Snapchat features that were more social were better liked and more frequently used. 
                  Therefore, I wanted to increase engagement by both showing cliques that a user is in, as well as suggested 
                  cliques that friends are part of.
                  <br></br>
                  <br></br>
                  During my initial user testing, I used layout <b>A</b>, which displays cliques that a user is a part of in one 
                  row and suggested cliques in another. However, I found that many people were confused about what the two 
                  rows meant.  I also found that everyone used the search bar instead of the plus button to join a clique, 
                  so I removed this button from the final design.
                  <br></br>
                  <br></br>
                  In explorations <b>B</b>, <b>C</b>, <b>D</b>, and <b>E</b> I explored ways to contain the section to one row, while 
                  keeping suggested cliques distinct from joined cliques. I hypothesized <b>B</b> to be the most clear and seamless 
                  layout, so I conducted a few more user sessions to test it. I found a much more intuitive understanding of 
                  the difference between your cliques and suggested cliques.
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Final Designs */}
        <div style={sectionFull}>
          <div style={tableContainerFull}>
            <div className="title1" ><b>Final designs</b></div>
            <div style={tableFull}>
              <div style={finalTableCol}>
                <img 
                  width="100%"
                  src={finalDesign} 
                  alt="Final solution" 
                  // style={imageFull}
                  >
                </img>
              </div>
              <div style={finalTableColFinal}>
                <iframe src='https://youtube.com/embed/XvIjK84NwjU?feature=share'
                  width="100%"
                  height="480"
                  frameborder='0'
                  allow='autoplay; encrypted-media'
                  allowfullscreen
                  title='video'
                />
              </div>
            </div>
          </div>
        </div>

        

        {/* Reflection */}
        <div style={section}>
          <div className="heading" style={{ color: COLOR }}>Reflection</div>
          <div className="title1" style={{ color: "#000" }}><b>How it went</b></div>
          <div className="body">
            
          People are always excited to connect with each other over shared interests, and many social media apps 
          attempt to solve this problem. However, Snapchat’s casual, just-woke-up vibe is powerful in its ability 
          to encourage users to share anything they create or find. Snap Cliques leverages this power to enable 
          people to connect with others over similar interests. 

          <br></br> <br></br>
          I wrote this case study as part of 
          <Link text={"Cornell AppDev"} url={"https://www.cornellappdev.com/"} isInternal="false" type="inline" icon="arrowDiagonal" color="rgba(0, 0, 0, 1)"></Link>
          ’s Intro to Digital 
          Product Design course. Thank you to my course instructor, 
          <Link text={"TK"} url={"https://tkkong.com/"} isInternal="false" type="inline" icon="arrowDiagonal" color="rgba(0, 0, 0, 1)"></Link>
          , and my TA, 
          <Link text={"Shoshana Swell"} url={"https://shoshanaswell.co/"} isInternal="false" type="inline" icon="arrowDiagonal" color="rgba(0, 0, 0, 1)"></Link>
          , for teaching me about Product Design and guiding me through this case study!


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
