import React from 'react';
import '../App.css';
import Button from "./Button";
import Link from "./Link";
import useWindowSize from "./useWindowSize";


// Props:
//   - name
//   - description
//   - id
//   - msg                  cta text for button to [url]
//   - url
//   - msg2                 cta text for link to [url2]
//   - url2
//   - msg3                 cta text for link to [url3]
//   - url3
//   - isInternal           does [url] stay in this website
//   - direction            "left" or "right", indicating the rel pos of the content

function App(props) {


  // RESONSIVENESS
  const window = useWindowSize();
  var isBigScreen = window.width > 1200
  var isSmallScreen = window.width < 700


  // IMPORT IMAGES
  function importImage(id) {
    switch (id) {
      // UX
      case 'pandora': return require('../Images/portfolio/ux/thumbnails/pandora.png');
      case 'exceed': return require('../Images/portfolio/ux/thumbnails/exceed.png');
      case 'resell': return require('../Images/portfolio/ux/thumbnails/resell.png');
      case 'snap': return require('../Images/portfolio/ux/thumbnails/snap.png');
      default: return require('../Images/portfolio/ux/thumbnails/exceed.png');
    }
  }

  // STYLING
  const containerStyle = {
    textAlign: "center",
  }

  const content = {
    display: "inline-block",
    position: "relative",
    textAlign: "left",
    width: isBigScreen ? 1100 : "90%",
  }

  const row = {
    display: isSmallScreen ? "block" : "flex",
  }

  const columnLeft = {
    // flex: "60%", - set conditionally below
    textAlign: "left"
  }
  if (isBigScreen) columnLeft.marginRight = 150
  else if (isSmallScreen) columnLeft.marginRight = 0
  else columnLeft.marginRight = "10%"

  const columnRight = {
    // flex: "40%", - set conditionally below
    textAlign: "left",
  }

  const projectName = {
    fontSize: "28px",
    fontWeight: "bold",
    paddingBottom: 20
  }

  // const ribbon = {
  //   position: "absolute",
  //   left: "185px",
  //   top: "-15px",
  //   width: "15%",
  //   height: "15%"
  // }


  // ORDERING CONTENT
  const contentCol = 
    <div style={props.direction === "left" ? columnLeft : columnRight}>
      <div style={projectName}>{props.name}</div>
      <div className= {isSmallScreen ? 'body' : 'bodyBig'}>{props.description}</div>
      <Link text={props.msg2} url={props.url2} isInternal="false" type="block" icon="arrowDiagonal" color="rgba(0, 0, 0, 1)"></Link>
      <Link text={props.msg3} url={props.url3} isInternal="false" type="block" icon="arrowDiagonal" color="rgba(0, 0, 0, 1)"></Link>
      <Button text={props.msg} url={props.url} isInternal={props.isInternal}></Button>
    </div>

  const imageCol = 
    <div style={props.direction === "left" ? columnRight : columnLeft}>
      <a href={props.url} target={(props.isInternal === "true") ? "" : "_blank"}>
        <img
          className="imgButton"
          src={importImage(props.id)}
          alt="Project thumbnail"
          width= "100%"
        />
      </a>
      {/* <img
        src={importImage("ribbon")}
        style={ribbon}
      /> */}
    </div>
  
  let left = null
  let right = null

  if (props.direction === "left" || isSmallScreen) {
    left = contentCol
    right = imageCol
    columnLeft.flex = "50%"
    columnRight.flex = "50%"
  }
  else  {
    left = imageCol
    right = contentCol
    columnLeft.flex = "50%"
    columnRight.flex = "50%"
  }

  // RENDERING
  return (
    <div style={containerStyle}>
      <div style={content}>
        <div style={row}>
          {left}
          {right}
        </div>
      </div>
    </div>
  );
}

export default App;
