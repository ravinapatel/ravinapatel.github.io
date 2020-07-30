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
    paddingTop: "50px",
    paddingBottom: "70px"
  }

  const content = {
    flex: window.width < 650 ? "0 0 80%" : "0 0 500px",
    textAlign: "center"
  }

  const body = {
    fontSize: "18px",
    letterSpacing: "0.03em"
  }

  const body2 = {
    letterSpacing: "0.03em"
  }

  const title = {
    fontSize: "20px",
    letterSpacing: "0.03em",
    fontWeight: "bold",
    paddingBottom: 20
  }

  // RENDERING
  return (
    <div className="container" style={container}>
      <div style={content}>
        <p style={title}>hi, I'm ravina!</p>
        <p style={body}>product designer @cornell university</p>
        <p style={body}>creating <div className="rainbow" style={body2} >delightful</div> experiences <br></br> to improve quality of life :)</p>
      </div>
    </div >
  );
}

export default Body;
