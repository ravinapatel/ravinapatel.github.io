import React from 'react';
import Gallery from "../Components/Gallery";
import Intro from "../Components/WorkIntro";
import data from "../Data/uxData.json";
import categoriesData from "../Data/categories.json";
import FadeIn from 'react-fade-in';
import Button from "../Components/Button";
import logo from '../Images/rp-icon.png';

// CONTENT
// data for the "check out more of my projects section"
const moreData = [
  categoriesData[0], categoriesData[1], categoriesData[2]
];

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

const logoStyle = {
  display: "block",
  position: "absolute",
  left: "50%",
  top: "50%"
}

// RENDERING
function App() {
  return (
    <FadeIn transitionDuration="500">
      <div className="container" style={containerStyle}>
        <Intro></Intro>
        <div className="container" style={containerStyle}>
          <div style={sectionStyle}><Gallery cols="2" totalWidth="800" padding="40" data={data} msg="work"></Gallery></div>
        </div>
        <div style={sectionStyle}><Gallery cols={moreData.length} totalWidth="800" square="true" data={moreData} msg="play" ></Gallery></div>

        <div style={lastSectionStyle}>
          <div className="title" style={titleStyle}>don't want this to end?</div>
          <div style={button}>
            <Button
              text="contact me"
              url="mailto: rpp62@cornell.edu"
            ></Button>
          </div>
          <div style={button}>
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
