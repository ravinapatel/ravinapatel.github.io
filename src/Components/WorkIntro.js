import React from 'react';
import useWindowSize from "./useWindowSize";


function Body() {

  const window = useWindowSize();

  // STYLING
  const container = {
    color: "#4d4d4d",
    width: "100%",
    height: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "70px",
    paddingBottom: "70px"
  }

  const content = {
    // flex: "0 0 500px",
    flex: window.width < 650 ? "0 0 80%" : "0 0 500px",
    textAlign: "center"
  }

  const body = {
    fontSize: "16px",
    letterSpacing: "0.03em"
  }

  const title = {
    fontSize: "20px",
    letterSpacing: "0.03em",
    fontWeight: "bold"
  }

  // RENDERING
  return (
    <div className="container" style={container}>
      <div style={content}>
        <p style={title}>hi, I'm ravina!</p>
        <p style={body}>product designer @cornell university. creating delightful experiences to improve quality of life :)</p>
      </div>
    </div >
  );
}

export default Body;
