import React from 'react';
import Gallery from "../Components/Gallery";
import Intro from "../Components/WorkIntro";
import data from "../Data/uxData.json";
import categoriesData from "../Data/categories.json";
import FadeIn from 'react-fade-in';

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
  padding: "50px"
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
        <div style={sectionStyle}><Gallery cols={moreData.length} totalWidth="800" square="true" data={moreData} msg="check out some other stuff I do" ></Gallery></div
        >
      </div>
    </FadeIn>
  );
}

export default App;
