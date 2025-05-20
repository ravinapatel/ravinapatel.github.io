import React from 'react';
import useWindowSize from "./useWindowSize";
import Link from "./Link";
import backgroundVideo from '../Images/gradient-cover.mp4'

function App() {

  // RESONSIVENESS
  const window = useWindowSize();
  var isBigScreen = window.width > 1130
  var isSmallScreen = window.width < 700

  const HEIGHT = "auto"


  // Style
  const container = {
    backgroundImage: "url(/cover-footer.png)",
    backgroundSize: 'cover',
    // borderTop: '2px solid #000',
    // borderBottom: '2px solid #000',
    width: "100%",
    height: HEIGHT,
    backgroundSize: 'cover',
    display: "block",
    textAlign: "center",
    fontSize: "14px",
    marginTop: "64px",
    borderTop: "2px solid rgba(0,0,0,0.05)"
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
    flex: isBigScreen ? "80%" : "70%",
    textAlign: "left"
  }
  const columnRight = {
    marginTop: isSmallScreen ? "48px" : "0px",
    flex: isBigScreen ? "20%" : "30%",
    textAlign: isSmallScreen ? "left" : "right"
  }

  const codeStyle = {
    textTransform: "uppercase",
    fontSize: "14px",
    marginBottom: "-8px"
  }
  const stripStyle = {
    textTransform: "uppercase",
    padding: "42px 0px 20px 0px",
    overflow: "hidden",
    textOverflow: "clip",
    whiteSpace: "nowrap",
  }

  let stripTextRaw = " Based in NYC | © 2023 Ravina Patel | Built in React.js | V3.1 | ";
  let stripText = stripTextRaw.replace(" ", "&nbsp;").slice(6).repeat(4);

  return (
    <div style={container}>
      <div style={content}>
        <div style={row}>
          <div style={columnLeft}>
            <p className='body'>made with react.js  &lt;3</p>
            <p className='code' style={codeStyle}>last updated: feb 2025</p>
            <p className='code tag'>v3.2</p>
          </div>
          
          <div style={columnRight}>
            <p className='body' style={{marginBottom: "10px"}}>let's build together!</p>
            <Link text="Email me" url="mailto: ravinapatel.work@gmail.com" isInternal="false" type="small" icon="arrowDiagonal" color="grey"></Link>
            <Link text="View resume" url="./ravina-resume.pdf" isInternal="false" type="small" icon="arrowDiagonal" color="grey"></Link>
            <Link text="LinkedIn" url="https://www.linkedin.com/in/ravinapatel0/" isInternal="false" type="small" icon="arrowDiagonal" color="grey"></Link>
          </div>
        </div>
      </div>
        {/* <div className='scrollingText' style={stripStyle}> */}
        <div className='code' style={stripStyle}>
          {stripText}
        </div>
    </div >
  );
}

export default App;
