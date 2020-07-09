import React from 'react';
import BlockQuote from "../../Components/case_study_components/blockQuote";
import Intro from "../../Components/case_study_components/intro";
import Cover from "../../Images/portfolio/ux/eatery-banner.png";
import { ParallaxBanner } from 'react-scroll-parallax';
import Gallery from "../../Components/Gallery";
import uxData from "../../Data/uxData.json";

// Case study on the Eatery App

const ID = "eatery"

// STYLING
const COLOR = "#4A90E2"
const SMALL_WIDTH = "50%"
const BIG_WIDTH = "75%"
const SECTION_SPACING = 100

const contentStyle = {
  textAlign: "center"
}

const smallSection = {
  display: "inline-block",
  paddingBottom: SECTION_SPACING,
  padding: SECTION_SPACING,
  width: SMALL_WIDTH
}

const bigSection = {
  display: "inline-block",
  paddingBottom: SECTION_SPACING,
  padding: SECTION_SPACING,
  width: BIG_WIDTH
}

// CONTENTS
const introData = [
  {
    title: "My Role",
    body: "UX Researcher, UI Designer, Motion Designer",
  },
  {
    title: "My Team",
    body: "Riya Singh, Aarushi Parashar, Tushar Khan",
  },
  {
    title: "Timeline",
    body: "2 years",
  },
];

// RENDERING
function Eatery(props) {
  return (
    <div style={contentStyle}>
      <ParallaxBanner
        className="your-class"
        layers={[
          {
            image: Cover,
            amount: 0.8,
          },
        ]}
        style={{
          height: '400px',
        }}
      >
      </ParallaxBanner>

      {/* <img src={Cover} alt="Eatery cover image" width="100%"></img> */}

      <div style={bigSection}>
        <Intro
          tagline="This is what my project is about. This is what my project is 
          about. This is what my project is about. This is what my project is about. "
          specData={introData}
        ></Intro>
      </div>

      <div style={smallSection}>
        <div className="heading" style={{ color: COLOR }}>Heading</div>
        <div className="emphatic">Important key takeaway from this section is written here.</div>
        <div className="body">
          hi my name is ravina. hi my name is ravina. hi my name is ravina.
          hi my name is ravina. hi my name is ravina. hi my name is ravina.
          hi my name is ravina. hi my name is ravina. hi my name is ravina.
          hi my name is ravina. hi my name is ravina. hi my name is ravina.
          hi my name is ravina. hi my name is ravina. hi my name is ravina.
          hi my name is ravina. hi my name is ravina. hi my name is ravina.
          hi my name is ravina. hi my name is ravina. hi my name is ravina.
        </div>
      </div>

      <div style={smallSection}>
        <BlockQuote
          color={COLOR}
          text="Big highlighted quote block for EMPHASIS"
        ></BlockQuote>
      </div>

      <div style={{ display: "inline-block", paddingTop: SECTION_SPACING }}><Gallery cols={props.chooseMoreData(uxData, ID).length} totalWidth="800" data={props.chooseMoreData(uxData, ID)} msg="check out another case study!"></Gallery></div>

    </div>
  );
}

export default Eatery;
