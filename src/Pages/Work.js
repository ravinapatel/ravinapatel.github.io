import React from 'react';
import Intro from "../Components/WorkIntro";
import data from "../Data/uxData.json";
// import categoriesData from "../Data/categories.json";
import FadeIn from 'react-fade-in';
import Button from "../Components/Button";
import ProjectPrev from "../Components/ProjectPrev";
import ReactGA from 'react-ga';
import useWindowSize from "../Components/useWindowSize";
import {useRef} from 'react';

// CONTENT
// data for the "check out more of my projects section"
// const moreData = [
//   categoriesData[0], categoriesData[1], categoriesData[2]
// ];

function clickResume() {
  // GA Event
  ReactGA.event({
    category: 'Resume',
    action: 'Opened resume from the button on the bottom of the work page'
  })
}
function clickEmail() {
  // GA Event
  ReactGA.event({
    category: 'Email',
    action: 'Opened mail from the button on the bottom of the work page'
  })
}


// RENDERING
function App() {

  // USE REF HOOK FOR SCROLL TO ELEMENT
  const scrollToDiv = (ref) => ref.current?.scrollIntoView({behavior: 'smooth'});
  const el1 = useRef();
  const el2 = useRef();

  // RESONSIVENESS
  const window = useWindowSize();
  var isSmallScreen = window.width < 700


  // STYLING
  const containerStyle = {
    textAlign: "center",
  }

  const refContainerStyle = {
    paddingTop: 42,
  }

  const lastSectionStyle = {
    display: "block",
    paddingTop: "50px",
    paddingBottom: "50px"
  }

  const button = {
    display: "inline-block",
    padding: 10
  }

  const titleStyle = {
    paddingBottom: 0,
    display: "block"
  }

  const projectPrevStyle = {
    paddingBottom: isSmallScreen ? 84 : 128
  }
  const lastProjectPrevStyle = {
    paddingBottom: isSmallScreen ? 0 : 0
  }

  function getDir(index) {
    // return (index % 2 === 0) ? "left" : "right"  // alternates the direction
    return "left"
  }

  const projects = data.map((item, index) => < ProjectPrev
    id={item.id}
    name={item.name}
    description={item.description}
    msg={item.msg}
    url={item.url}
    msg2={item.msg2}
    url2={item.url2}
    direction={getDir(index)}
    isInternal={item.isInternal}
  />)

  var projectDivs = projects.map((item, index) => {
    if (index === projects.length-1) {
      return <div style={lastProjectPrevStyle}>
        {item}
      </div>
    }
    else {
      return <div style={projectPrevStyle}>
        {item}
      </div>
    }
  })


  return (
    <FadeIn transitionDuration="500">
      <div style={containerStyle}>

        {/* Intro */}
        <Intro reference={el1} click={()=> scrollToDiv(el2)}></Intro>

        {/* UX Projects */}
        
        <div style={refContainerStyle} ref={el2}>
          <div className="sectionTitle" >selected work</div>
          {projectDivs}

          {/* <div className="link" >Click on Me!</div>
          <div style={sectionStyle}><Gallery cols="2" totalWidth="800" padding="40" data={data} isLarge="true" ></Gallery></div> */}
        </div>

        {/* CTAs */}
        <div style={lastSectionStyle}>
          <div className="sectionTitle" style={titleStyle}>wanna connect?</div>
          <div style={button} onClick={clickEmail}>
            <Button
              text="Say hi!"
              url="mailto: rpp62@cornell.edu"
            ></Button>
          </div>
          <div style={button} onClick={clickResume}>
            <Button
              text="View resume"
              url="../../ravina-resume.pdf"
            ></Button>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default App;
