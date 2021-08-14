import React from 'react';
import useWindowSize from "./useWindowSize";
import ReactGA from 'react-ga';


function Body() {

  // RESONSIVENESS
  const window = useWindowSize();
  var isBigScreen = window.width > 900
  // var isMediumScreen = window.width < 900
  var isSmallScreen = window.width < 700

  // GOOGLE ANALYTICS
  function hover() {
    // GA Event
    ReactGA.event({
      category: 'Delightful Text',
      action: 'Hovered over delightful text'
    })
  }

  // STYLING
  const container = {
    color: "#4d4d4d",
    width: "100%",
    textAlign: "center",
    height: 150,
    display: "block",
    paddingTop: 10,
    paddingBottom: 80
  }

  const content = {
    width: isBigScreen ? 760 : "80%",
    display: "inline-block",
    textAlign: "center"
  }

  const body = {
    fontSize: isSmallScreen ? 18 : 24,
    letterSpacing: "0.04em"
  }

  const title = {
    fontSize: isSmallScreen ? 20 : 22,
    letterSpacing: "0.03em",
    fontWeight: "bold",
    paddingBottom: 10
  }

  // RENDERING
  return (
    <div className="container" style={container}>
      <div style={content}>
        <p style={title}>hi, I'm ravina!</p>
        <p style={body}>product designer @cornell university</p>
        <p style={body}>creating <div className="rainbow" style={body} onMouseEnter={hover} >delightful</div> experiences<br></br>to improve quality of life :)</p>
      </div>
    </div >
  );
}

export default Body;
