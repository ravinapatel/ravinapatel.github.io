import React from 'react';
import useWindowSize from "./useWindowSize";
// import me from '../Images/about/me.png';
import carrot from '../Images/about/carrot.png';
import FadeIn from 'react-fade-in';
import backgroundVideo from '../Images/gradient-cover.mp4'



function Body({ reference, click }) {

  // RESONSIVENESS
  const window = useWindowSize();
  // var isBigScreen = window.width > 1130
  var isMediumScreen = window.width < 900
  // var isSmallScreen = window.width < 700

  // STYLING
  const container = {
    width: "100%",
    height: window.height,
    marginTop: -80,
    backgroundImage: "url(/gradient-cover.gif)",
    backgroundSize: 'cover',
    color: "#4d4d4d",
    textAlign: "center",
    display: "block",
    verticalAlign: "middle",
    // position: "relative",
    // zIndex: "-600px"
  }
  const backgroundVideoStyle = {
    width: window.width,
    height: window.height,
    objectFit: "cover"
  }
  const carrotContainer = {
    position: "absolute",
    bottom: 20,
    width: "100%", 
    opacity: "50%",
  }

  // STYLING VERSION 1
  // const content = {
  //   display: "inline-block",
  //   position: "absolute",
  //   textAlign: "left",
  //   top: "40%",
  //   transform: "translate(-50%)",
  //   width: isBigScreen ? 1100 : "90%",
  // }
  // const body = {
  //   marginTop: 10,
  //   fontSize: isSmallScreen ? 28 : 36,
  //   width: isBigScreen ? 600 : "80%",
  //   padding: 14,
  //   border: '1px solid #000',
  //   // backgroundImage: "linear-gradient(to right, #333 10%, rgba(255, 255, 255, 0) 0%)",
  //   // backgroundPosition: "top",
  //   // backgroundPosition: "left",
  //   // backgroundPosition: "right",
  //   // backgroundPosition: "bottom",
  //   // backgroundSize: "10px 5px",
  //   // backgroundRepeat: "repeat-x",
  //   // backgroundImage: "url(data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='4' stroke-dasharray='15' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e)",
  //   borderRadius: 10
  // }
  // const profilePic = {
  //   borderRadius: '50%',
  //   border: '1px solid #000',
  // }

  // STYLING VERSION 2
  const title = {
    fontSize: isMediumScreen ? 16 : 20,
    fontWeight: "bold",
    color: "7c7c7c",
    paddingBottom: 12,
    letterSpacing: "0.1em"
  }
  const text = {
    fontSize: isMediumScreen ? 16 : 20,
    color: "7c7c7c",
    paddingBottom: 6
  }
  const name = {
    fontSize: isMediumScreen ? 36 : 48,
    paddingBottom: 12,
    color: "black",
    fontWeight: "bold"
  }
  const content2 = {
    width: "100%",
    margin: 0,
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
  }

  // RENDERING
  return (
    <FadeIn transitionDuration="500">
      <div className="container" style={container}>
        {/* <div style={content}>
          <img src={me} alt="" width={"80"} style={profilePic}></img>
          <p style={body}>hi! <b>i’m ravina</b>, a product designer at <b>Pandora</b>. creating 
                          delightful experiences to make life easier :)
          </p>
        </div> */}

        <video autoPlay muted loop style={backgroundVideoStyle} id="backgroundVideo">
          <source src={backgroundVideo} type="video/mp4"/>
        </video>

        <div style={content2}>
          <div style={title}>UX DESIGNER</div>
          <div style={name}>ravina patel</div>
          <div style={text}>Product Designer at Pandora</div>
          <div style={text}>Previously at Cornell </div>
        </div>

        <div style={carrotContainer}>
          <img ref={reference} onClick={click} src={carrot} alt="" width={"30"} style={{cursor: "pointer"}} ></img>
        </div>  

      </div >
    </FadeIn>
  );
}

export default Body;
