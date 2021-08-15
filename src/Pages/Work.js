import React from 'react';
import Gallery from "../Components/Gallery";
import Intro from "../Components/WorkIntro";
import data from "../Data/uxData.json";
// import categoriesData from "../Data/categories.json";
import FadeIn from 'react-fade-in';
import Button from "../Components/Button";
import ReactGA from 'react-ga';

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


// STYLING
const containerStyle = {
  textAlign: "center"
}

const sectionStyle = {
  verticalAlign: "top",
  display: "inline-block",
  paddingTop: "50px",
  paddingBottom: "50px"
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
  paddingBottom: 20,
  display: "block"
}

// RENDERING
function App() {
  return (
    <FadeIn transitionDuration="500">
      <div className="container" style={containerStyle}>

        {/* Intro */}
        <Intro></Intro>

        {/* UX Projects */}
        <div className="container" style={containerStyle}>
          <div style={sectionStyle}><Gallery cols="2" totalWidth="800" padding="40" data={data} isLarge="true" ></Gallery></div>
        </div>

        {/* CTAs */}
        <div style={lastSectionStyle}>
          <div className="title" style={titleStyle}>don't want this to end?</div>
          <div style={button} onClick={clickEmail}>
            <Button
              text="say hi!"
              url="mailto: rpp62@cornell.edu"
            ></Button>
          </div>
          <div style={button} onClick={clickResume}>
            <Button
              text="view resume"
              url="../../ravina-resume.pdf"
            ></Button>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default App;
