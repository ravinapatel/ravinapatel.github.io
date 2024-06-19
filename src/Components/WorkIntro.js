import React, {useState, useEffect} from 'react';
import useWindowSize from "./useWindowSize";
import carrot from '../Icons/arrow.png';
import FadeIn from 'react-fade-in';
import ScrollToSection from "./ScrollToSection";
// import backgroundVideo from '../Images/gradient-cover.mp4'


function Body({ reference, click }) {

  // RESONSIVENESS
  const window = useWindowSize();
  var isBigScreen = window.width > 1200
  // var isMediumScreen = window.width < 900 && window.width > 700
  var isSmallScreen = window.width < 700

  // STYLING
  const container = {
    width: "100%",
    height: window.height,
    backgroundImage: "url(/cover-2024-flip.png)",
    backgroundSize: "" + window.width + "px " + window.height + "px",
    textAlign: "center",
    display: "block",
    verticalAlign: "middle",
  }
  const carrotContainer = {
    position: "absolute",
    bottom: 20,
    width: "100%", 
    opacity: "50%",
  }

  // STYLING VERSION 1
  const content = {
    display: "inline-block",
    position: "absolute",
    textAlign: "left",
    top: "40%",
    transform: "translate(-50%)",
    width: isBigScreen ? 1100 : "90%",
  }
  const body = {
    marginTop: -4,
    display: "inline-block",
    marginRight: "10%"
  }
  const name = {
    fontSize: isBigScreen ? 72 : 64,
    paddingBottom: 12,
    color: "black",
    fontWeight: "bold",
    marginRight: "10%"
  }

  // STYLING VERSION 2
  // const title = {
  //   fontSize: isMediumScreen ? 16 : 20,
  //   fontWeight: "bold",
  //   color: "7c7c7c",
  //   paddingBottom: 12,
  //   letterSpacing: "0.1em"
  // }
  // const text = {
  //   fontSize: isMediumScreen ? 16 : 20,
  //   color: "7c7c7c",
  //   paddingBottom: 6
  // }
  // const content2 = {
  //   width: "100%",
  //   margin: 0,
  //   position: "absolute",
  //   top: "50%",
  //   transform: "translateY(-50%)",
  // }

  // RENDERING
  return (
    <FadeIn transitionDuration="500">
      <div className="container" style={container}>
        <div style={content}>
          <div style={name} className='brand'>hi! i'm ravina</div>
          <p className= {isSmallScreen ? 'body' : 'bodyBig'} style={body}>
            transforming uncharted spaces into simple, natural experiences
            <br></br>
          </p>
        </div>

        {/* <video autoPlay muted loop style={backgroundVideoStyle} id="backgroundVideo">
          <source src={backgroundVideo} type="video/mp4"/>
        </video> */}

        {/* <div style={content2}>
          <div style={title}>UX DESIGNER</div>
          <div style={name}>ravina patel</div>
          <div style={text}>Product Designer at Pandora</div>
          <div style={text}>Previously at Cornell </div>
        </div> */}

        <div style={carrotContainer}>
          <ScrollToSection reference={reference} click={click}></ScrollToSection>
        </div>  
      </div >
    </FadeIn>
  );
}

export default Body;
