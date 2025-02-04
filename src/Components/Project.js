import React, { useState } from 'react';
import '../App.css';
import Link from "./Link";
import { getProjectImage } from './Helpers'

// A component that displays a project of a dynamic width

// Props:
//   - name
//   - description
//   - id
//   - msg                  where the link leads
//   - url
//   - width                calculated by Gallery
//   - square
//   - isInternal           does link stay in this website
//   - isLarge              for enlarging font size


function App(props) {

  const textPadding = 30;
  const [isHover, setIsHover] = useState(false);

  // STYLING
  const containerStyle = {
    width: Number(props.width),
    height: "auto",
    borderRadius: "10px",
    border: (props.name == null) ? "1px solid #e4e4e4" : ""
  }
  const infoStyle = {                                           // Info = Name + Description
    textAlign: "left",
    display: "block",
    position: "relative",
    width: Number(props.width) - 2 * textPadding,
    color: "black",
  }
  if (!isHover || props.name == null) {
    infoStyle.padding = "0px"
  }
  else if (props.url != null) {
    infoStyle.padding = "16px 20px 10px 20px"
  }
  else {
    infoStyle.padding = "16px 20px 16px 20px"
  }
  const projectName = {
    letterSpacing: "0.03em",
    fontSize: props.isLarge === "true" ? 22 : 18,
    fontWeight: "bold",
    textDecoration: "none",
    paddingBottom: (props.name != null) ? 10 : 0
  }
  const projectDescription = {
    letterSpacing: "0.03em",
    fontSize: props.isLarge === "true" ? 16 : 14,
    textDecoration: "none",
  }


  // RENDERING
  return (
    <div 
      className={(props.name != null) ? "project" : ""}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)} 
      style={containerStyle}>

      <a href={props.url} target={(props.isInternal === "true") ? "" : "_blank"} style={{display: "block"}}>
        <img
          src={getProjectImage(props.id, "thumbnail")}
          alt="Project thumbnail"
          width={props.width}
          height={props.square === "true" ? props.width : "null"}
          align="center"
          style={{zIndex: -10, borderRadius: 10}}                      /* borderRadius should match containerStyle radius in this file and .imgButton in App.css*/
          // className={(props.name != null) ? "image" : ""}
        />
      </a>

      <div className={(props.name != null) ? "details" : ""} style={infoStyle}>
        <div style={projectName} >{props.name}</div>
        <div style={projectDescription}>{props.isLarge==="true" ? props.description : props.descriptionShort}</div>
        <Link 
          text={props.msg} 
          url={props.url} 
          isInternal={props.isInternal}
          type={props.isLarge==="true"? "block" : "small"} 
          icon="arrowRight"
          style={{paddingTop: props.isLarge==="true" ? "auto" : 100 }}>
        </Link>
      </div>

    </div >
  );
}

export default App;
