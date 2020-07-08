import React from 'react';
import me from '../Images/ravina-resume.png';
import Button from "../Components/Button";
import '../App.css';
import FadeIn from 'react-fade-in';


// STYLING
const containerStyle = {
  textAlign: "center"
}

const sectionStyle = {
  paddingTop: "50px"
}

const imgStyle = {
  verticalAlign: "top",
  padding: "50px",
}

// RENDERING
function Resume() {
  return (
    <FadeIn delay="500" transitionDuration="500">
      <div className="container" style={containerStyle}>
        <div style={sectionStyle}>
          <Button
            text="download resume"
            url="../../ravina-resume.pdf"
          ></Button>
        </div>

        <div style={imgStyle}>
          <img src={me} alt="Oops! Resume not found. Please download it above to view it :)" width={"800px"} class="img-responsive" alt="" align="center" />
        </div>
      </div >
    </FadeIn>
  );
}

export default Resume;
