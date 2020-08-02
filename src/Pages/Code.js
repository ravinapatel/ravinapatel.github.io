import React from 'react';
import Gallery from "../Components/Gallery";
import codeData from "../Data/csData.json";
import uxData from "../Data/uxData.json";
import FadeIn from 'react-fade-in';

// CONTENT
// data for the "check out more of my projects section"
const ID = "code"

// STYLING
const containerStyle = {
  textAlign: "center"
}

const sectionStyle = {
  verticalAlign: "top",
  display: "inline-block",
  padding: "50px"
}

function App(props) {
  return (
    <FadeIn transitionDuration="500">
      <div className="container" style={containerStyle}>
        <div className="container" style={containerStyle}>
          <div style={sectionStyle}><Gallery cols="3" totalWidth="800" data={codeData} msg="code" padding="20"></Gallery></div>
        </div>
        <div style={sectionStyle}><Gallery cols={props.chooseMoreData(uxData, ID).length} totalWidth="800" data={props.chooseMoreData(uxData, ID)} msg="check out a case study!"></Gallery></div>
      </div>
    </FadeIn >
  );
}

export default App;
