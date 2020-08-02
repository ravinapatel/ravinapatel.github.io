import React from 'react';
import Gallery from "../Components/Gallery";
import lineData from "../Data/lineArtData.json";
import otherData from "../Data/otherArtData.json";
import watercolorData from "../Data/watercolorArtData.json";
import uxData from "../Data/uxData.json";
import FadeIn from 'react-fade-in';

// CONTENT
// data for the "check out more of my projects section"
const ID = "art"

// STYLING
const containerStyle = {
  textAlign: "center"
}

const sectionStyle = {
  verticalAlign: "top",
  display: "inline-block",
  padding: "50px"
}

const moreStyle = {
  verticalAlign: "top",
  display: "inline-block",
  paddingTop: "50px",
  paddingBottom: "50px"
}

// RENDERING
function App(props) {
  return (
    <FadeIn transitionDuration="500">
      <div className="container" style={containerStyle}>
        <div className="container" style={containerStyle}>
          <div style={sectionStyle}><Gallery cols="2" totalWidth="450" totalWidthMobile="250" data={lineData} msg="line"></Gallery></div>
          <div style={sectionStyle}>
            <Gallery cols="2" totalWidth="250" data={watercolorData} msg="watercolor"></Gallery>
            <div style={{ paddingTop: "100px" }}><Gallery cols="2" totalWidth="250" data={otherData} msg="other"></Gallery></div>
          </div>
        </div>

        <div style={moreStyle}><Gallery cols={props.chooseMoreData(uxData, ID).length} totalWidth="800" data={props.chooseMoreData(uxData, ID)} msg="check out a case study!"></Gallery></div>
      </div>
    </FadeIn>
  );
}

export default App;
