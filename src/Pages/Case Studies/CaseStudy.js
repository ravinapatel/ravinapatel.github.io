import React from 'react';
import Gallery from "../../Components/Gallery";
import uxData from "../../Data/uxData.json";
import FadeIn from 'react-fade-in';

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import useWindowSize from "../../Components/useWindowSize";
import NotionPage from "./NotionPage";

function App(props) {
  
  // RESONSIVENESS
  const window = useWindowSize();
  var isBigScreen = window.width > 1200

  function importImage(id) {
    switch (id) {
      case 'snap': return require('../../Images/portfolio/ux/banners/snap-banner.png');
      case 'pandora': return require('../../Images/portfolio/ux/banners/pandora-banner.png');
      case 'resell': return require('../../Images/portfolio/ux/banners/exceed-banner.png');
      case 'exceed': return require('../../Images/portfolio/ux/banners/exceed-banner.png');
      default: return require('../../Images/portfolio/ux/banners/exceed-banner.png');
    }
  }

  // STYLING
  const notionContainer = {
    margin: "-10px 0px 0px 0px",
    textAlign: "center",
    width: "100%",
  }

  const notionContent = {
    marginTop: "-100px",
    display: "inline-block",
    width: isBigScreen ? 1130 : "97%",
    textAlign: "left"
  }

  const imgStyle = {
    display: "block",
    margin: "auto",
    position: "relative",
    zIndex: 100,
    maxWidth: isBigScreen ? 1130 : "100%",
    paddingTop: isBigScreen ? 50 : 0,
    height: "auto",
  }

  // RENDERING
  return (
  <FadeIn transitionDuration="500">
    <div style={notionContainer}>
      <img src={importImage(props.id)} alt="Project cover" style={imgStyle}></img>

      <div style={notionContent}>
        <NotionPage id={props.id}></NotionPage>
      </div>

      {/* SEE MORE */}
      <div style={{ display: "inline-block", textAlign: "center", paddingTop: 128 }}>
        <Gallery 
          numColsArray={[props.chooseMoreData(uxData, props.id).length,props.chooseMoreData(uxData, props.id).length,1]} 
          totalWidth={800} 
          data={props.chooseMoreData(uxData, props.id)} 
          title="check out another case study!"
          square="false" 
          isLarge="true">
        </Gallery>
      </div>
    </div>
  </FadeIn>
  );
}

export default App;