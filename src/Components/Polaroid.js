import React from 'react';
import '../App.css';
import useWindowSize from "./useWindowSize";
import { getProjectImage } from './Helpers'

// PROPS
// - id
// - caption
// - angle
// - width

function App(props) {

  // RESONSIVENESS
  const window = useWindowSize();
  var isSmallScreen = window.width < 700

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
    <img src={getProjectImage(props.id, "thumbnail")} alt="" style={picStyle}/>
    <div className={isSmallScreen ? 'body2' : 'body'} style={captionStyle}>{props.caption}</div>
  </div>
  );
}

export default App;
