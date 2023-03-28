import React from 'react';
import useWindowSize from "../useWindowSize";
// import carrot from '../../Images/about/carrot.png';
import FadeIn from 'react-fade-in';

import exceed from "../../Images/portfolio/ux/exceed/exceed-cover.png";
import exceedSmall from "../../Images/portfolio/ux/exceed/exceed-cover-small.png";
import pandora from "../../Images/portfolio/ux/banners/pandora-banner.png";
import resell from "../../Images/portfolio/ux/banners/exceed-banner.png";
import snap from "../../Images/portfolio/ux/banners/snap-banner.png";
import data from "../../Data/uxData.json";


function Body(props) {

  // RESONSIVENESS
  const window = useWindowSize();
  var isBigScreen = window.width > 1200
  var isSmallScreen = window.width < 700

  function getImage(id) {
    switch (id) {
      case 'snap': return snap;
      case 'pandora': return pandora;
      case 'resell': return resell;
      case 'exceed': return isSmallScreen ? exceedSmall : exceed;
      default: return isSmallScreen ? exceedSmall : exceed;
    }
  }

  // STYLING
  const container = {
    position: "relative",
    textAlign: "center",
    width: "100%",
    height: "400px",
    // height: window.height,
    marginTop: -80,
    // backgroundImage: `url(${getImage(props.id)})`,
    backgroundImage: "url(/gradient-cover.gif)",
    backgroundSize: 'cover',
    // backgroundPosition: 'center',
    color: "#4d4d4d",
    textAlign: "center",
    display: "block",
    borderBottom: '2px solid #000',
    zIndex: -50
  }

  const content = {
    display: "inline-block",
    // backgroundColor: "green",
    position: "absolute",
    textAlign: "center",
    top: isSmallScreen ? 200 : "40%",
    transform: "translate(-50%)",
    width: isBigScreen ? 1100 : "90%",
  }

  const body = {
    display: "inline-block",
    marginTop: 10,
    fontSize: isSmallScreen ? 28 : 32,
    width: isSmallScreen ? "100%" : 550,
    color: "#000"
  }

  const projects = data.map(item =>
    [item.id, item.name, item.descriptionShort]
  )
  function getProjData(id) {
    return projects.filter(proj =>
      proj[0] === id
    )[0]
  }

  // RENDERING
  return (
    <FadeIn transitionDuration="500">
      <div className="container" style={container}>
        <div style={content}>
          <div className="heading" style={{ textAlign: "center", color: props.color }}>{getProjData(props.id)[1]}</div>
          <p style={body}>
          {getProjData(props.id)[2]}
          </p>
        </div>

        {/* <div style={carrotContainer}>
          <img ref={props.reference} onClick={props.click} src={carrot} alt="" width={"30"} style={{cursor: "pointer"}} ></img>
        </div>   */}

      </div >
    </FadeIn>
  );
}

export default Body;
