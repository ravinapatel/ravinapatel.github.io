import React from 'react';
import useWindowSize from "./useWindowSize";
import me from '../Images/about/me.png';
// import carrot from '../Images/about/carrot.png';
import carrot from '../Icons/arrow.png';
import FadeIn from 'react-fade-in';
import backgroundVideo from '../Images/gradient-cover.mp4'



function Body({ reference, click }) {

  // RESONSIVENESS
  const window = useWindowSize();
  var isBigScreen = window.width > 1200
  var isMediumScreen = window.width < 900 && window.width > 700
  var isSmallScreen = window.width < 700

  // STYLING
  const container = {
    width: "100%",
    height: window.height,
    backgroundImage: "url(/cover-2024-flip.png)",
    backgroundSize: "" + window.width + "px " + window.height + "px",
    // backgroundPosition: "top center",
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
    // fontSize: isSmallScreen ? 18 : 20,
    width: isBigScreen ? 600 : "90%",
  }
  const profilePic = {
    borderRadius: '50%',
    border: '1px solid #000',
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
  const name = {
    fontSize: isBigScreen ? 48 : 36,
    paddingBottom: 12,
    color: "black",
    fontWeight: "bold"
  }
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
          <div style={name} className='brand'>hi, i'm ravina :)</div>
          <p className= {isSmallScreen ? 'body' : 'bodyBig'} style={body}>
            transforming uncharted spaces into simple, natural experiences
            <br></br>
            currently: product designer @siriusxm
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
          <img ref={reference} onClick={click} src={carrot} alt="" width={"16"} style={{cursor: "pointer"}} ></img>
        </div>  

      </div >
    </FadeIn>
  );
}

export default Body;
