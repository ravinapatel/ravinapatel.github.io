import React from 'react';
import '../App.css';
import useWindowSize from "./useWindowSize";

// PROPS
// - id
// - caption
// - angle
// - width

function App(props) {

  // RESONSIVENESS
  const window = useWindowSize();
  var isSmallScreen = window.width < 700

  // IMPORT IMAGES
  function importImage(id) {
    switch (id) {
      case 'sew': return require('../Images/about/sew.jpg');
      case 'hiphop': return require('../Images/about/hip-hop.png');
      case 'bnat': return require('../Images/about/bnat.png');
      case 'uke': return require('../Images/about/uke.jpg');
      case 'painting': return require('../Images/about/painting.jpg');
      case 'raas': return require('../Images/about/raas.JPG');
      case 'react': return require('../Images/about/react.png');
      case 'duo': return require('../Images/about/duo.png');
      case 'snapIdeating': return require('../Images/portfolio/ux/snap/brainstorming.png');
      default: return require('../Images/about/duo.png');
    }
  }

  // STYLING
  const picStyle = {
    display: "block",
    paddingBottom: 10,
    maxWidth: props.width,
    height: "auto"
  }  
  const captionStyle = {
    display: "block",
    width: props.width,
  }
  const polaroid = {
    display: "inline-block",
    margin: isSmallScreen ? "10px 10px 10px 10px" : "10px 30px 10px 10px",
    width: props.width,
    height: "fit-content",
    padding: 15,
    // boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.25)",
    borderRadius: 8,
    transform: props.angle,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    border: "2px solid rgba(0, 0, 0, 0.1)"
  }

  // RENDERING
  return (    
  <div style={polaroid}>
    <img src={importImage(props.id)} alt="" style={picStyle}/>
    <div className={isSmallScreen ? 'body2' : 'body'} style={captionStyle}>{props.caption}</div>
  </div>
  );
}

export default App;
