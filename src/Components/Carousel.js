import React, { useRef, useState } from "react";
import Polaroid from "./Polaroid";
import useWindowSize from "./useWindowSize";
import arrowRight from '../Images/icons/arrowRight.png';
import arrowLeft from '../Images/icons/arrowLeft.png';

function Carousel() {

  // RESONSIVENESS
  const window = useWindowSize();
  var isBigScreen = window.width > 1200
  // var isSmallMediumScreen = window.width < 920
  var isSmallScreen = window.width < 700

  // SCROLLING
  const [leftActive, setLeftActive] = useState(false);
  const [rightActive, setRightActive] = useState(true);
  const elementRef = useRef(null);

  const hideRightArrow = () => {
    setTimeout(() => {
      setRightActive(false);
      setLeftActive(true);
    }, 800);
  };
  const hideLeftArrow = () => {
    setTimeout(() => {
      setRightActive(true);
      setLeftActive(false);
    }, 800);
  };
  // should probably do conditional hiding of arrows here so i don't need the weird delays, 
  // but element.current is null when i pass in elementRef
  const showBothArrows = () => {
    setLeftActive(true);
    setRightActive(true);
    // if (element.current.scrollLeft == 0) {hideLeftArrow();}
    // if (element.current.scrollLeft + element.current.offsetWidth >= element.current.scrollWidth) {hideRightArrow();}
  }

  const handleHorizantalScroll = (element, direction) => {
    const carouselWidth = element.current.offsetWidth - POLAROID_WIDTH;
    const scrollAmount = carouselWidth
    const carouselFullWidth = element.current.scrollWidth;
    const projectedLeft = element.current.scrollLeft + scrollAmount * direction;
    element.current.scrollLeft = projectedLeft;
    if ( projectedLeft + scrollAmount * direction >= carouselFullWidth ) { hideRightArrow(); }
    else if ( projectedLeft <= 0) { hideLeftArrow(); }
    else { showBothArrows(); }
  };

  // STYLING
  const POLAROID_WIDTH = isSmallScreen ? 220 : 250;
  const container = {
    textAlign: "center",
    marginTop: -70,
  }
  const buttonContainer = {
    display: "inline-block",
    width: isBigScreen ? 1100 : "90%",
    textAlign: "right",
    marginBottom: 20,
  }
  const iconStyle = {
    width: "18px"
  }
  
  const imgContainer = {
    display: "flex",
    overflow: "auto",
    width: "100%",
    scrollBehavior: "smooth"
  }

  const polaroidMap = {
    uke: "I asked for a ukulele for my 18th birthday and have been *amateurly* playing ever since.",
    bnat: "I trained in the classical Indian dance form, Bharatnatyam, for seven years and earned my B.A. in Fine Arts.",
    raas: "I learned the Indian dance style, Garba-Raas, on Big Red Raas at Cornell. I became captain for two years and brought the team to nationals for the first time!",
    painting: "I decided to try to be an 'artist' one day in eighth grade. I picked up mediums as I went including watercolor, pen, and wood burning!",
    react: "I learned React.js one summer and rebuilt this very website!",
    duo: "I started learning French on Duolingo, and am currently obsessed. Je veux aller en France l'année prochaine!",
    hiphop: "I started learning Hip Hop through Youtube tutorials during the pandemic, then joined a team in college, and now I take classes in NYC.",
    sew: "I'm learning to sew. Starting with some simple tailoring and hoping to do a thrift flip by the end of the year!"
  }

  return (
    <div style={container}>
      <div style={buttonContainer}>
        <button style={leftActive ? {visibility:"visible", marginRight: 10} : {visibility:"hidden", marginRight: 10}}
          className="circleButton"
          onClick={() => { handleHorizantalScroll(elementRef, -1); }} >
          <img 
            src={arrowLeft} 
            alt="Scroll right" 
            style={iconStyle}>
          </img>
        </button>

        <button style={rightActive ? {visibility:"visible"} : {visibility:"hidden"}}
          className="circleButton"
          onClick={() => { handleHorizantalScroll(elementRef, 1); }} >
          <img 
            src={arrowRight} 
            alt="Scroll right" 
            style={iconStyle}>
          </img>
        </button>
      </div>
      
      <div style={imgContainer} ref={elementRef} onScroll={showBothArrows}>
        <Polaroid id="hiphop" caption={polaroidMap["hiphop"]} angle={"rotate(0deg)"} width={POLAROID_WIDTH}></Polaroid>          
        <Polaroid id="duo" caption={polaroidMap["duo"]} angle={"rotate(-1deg)"} width={POLAROID_WIDTH}></Polaroid>
        <Polaroid id="sew" caption={polaroidMap["sew"]} angle={"rotate(1deg)"} width={POLAROID_WIDTH}></Polaroid>
        <Polaroid id="painting" caption={polaroidMap["painting"]} angle={"rotate(0deg)"} width={POLAROID_WIDTH}></Polaroid>
        <Polaroid id="react" caption={polaroidMap["react"]} angle={"rotate(1deg)"} width={POLAROID_WIDTH + 50}></Polaroid>
        <Polaroid id="raas" caption={polaroidMap["raas"]} angle={"rotate(0deg)"} width={POLAROID_WIDTH}></Polaroid>
        <Polaroid id="uke" caption={polaroidMap["uke"]} angle={"rotate(1deg)"} width={POLAROID_WIDTH+50}></Polaroid>
        <Polaroid id="bnat" caption={polaroidMap["bnat"]} angle={"rotate(-1deg)"} width={POLAROID_WIDTH}></Polaroid>
      </div>
    </div>
  );
};

export default Carousel;
