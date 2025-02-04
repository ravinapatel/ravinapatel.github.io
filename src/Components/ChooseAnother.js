import React from 'react';
import useWindowSize from "./useWindowSize";
import Gallery from "../Components/Gallery";
import uxData from "../Data/uxData.json";
import '../Pages/Case Studies/CaseStudy.css';

// Props:
//   - id               specifies the current page id

// CHOOSING ALGORITHM
// chooses three projects from a dataset `data`, prioritizing ones with urls and 
// excluding the one being currently viewed (indicated by `ID`)
// bug: causes a repeat if not enough other cases
function chooseMoreData(data, ID) {
  var x = []
  while (x.length < 3) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].id !== ID && data[i].id !== "buffer" && data[i].url !== null) {
        x.push(data[i]);
      }
      if (x.length > 2) break;
    }
    if (x.length < 3) {
      for (i = 0; i < data.length; i++) {
        if (data[i].id !== ID && data[i].id !== "buffer") {
          x.push(data[i]);
        }
        if (x.length > 2) break;
      }
    }
  }
  return x
}

function Body(props) {

  const ID = props.id

  // RESPONSIVENESS
  const window = useWindowSize();
  // var isBigScreen = window.width > 900
  var isSmallScreen = window.width < 700

  // STYLING
  const container = {
    verticalAlign: "top",
    display: "inline-block",
    paddingBottom: "50px",
    textAlign: "center",
  }
  if (window.width > 1200) {          // big screen (according to gallery thresholds)
    container.height = 450
  }
  else if (isSmallScreen) {           // small screen
    container.height = "auto"
  }
  else if (window.width < 940) {      // small-medium screen
    container.height = 450
  }
  else {
    container.height = 500            // big-medium screen
  }

  const galleryContainer = {
    display: "inline-block"
  }

  // RENDERING
  return (
    <div style={container}>
      <div style={galleryContainer}>
        <Gallery
          numColsArray={[chooseMoreData(uxData, ID).length,chooseMoreData(uxData, ID).length,1]} 
          totalWidth={800}
          data={chooseMoreData(uxData, ID)} 
          title= {props.id == "null" ? "check out a case study" : "check out another case study!"}
          square="false" 
          isLarge="false">
        </Gallery>
      </div>
    </div>
  );
}

export default Body;
