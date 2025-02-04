import React from 'react';
import '../App.css';
import Button from "./Button";
import Link from "./Link";
import useWindowSize from "./useWindowSize";
import uxData from "../Data/uxData.json";
import { getProjectImage } from './Helpers'


// Props:
//   - id

function App(props) {

  const projectData = uxData.find(item => item.id === props.id)

  // RESONSIVENESS
  const window = useWindowSize();
  var isBigScreen = window.width > 1200
  var isSmallScreen = window.width < 700


  // STYLING
  const container = {
    paddingBottom: 0,
    color: "black",
    textDecoration: "none"
  }
  const imgContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '400px',          // Adjust based on your requirement
    marginTop: 16
  };
  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',       // Ensures the image fills the container
    objectPosition: "50% 0%"  // specs which direction it gets cropped
  };

  // RENDERING
  return (
    <div className='imgButton'>
      
      <a href={projectData.url} className='card-surface-stroke--white-none flex--vert flex-align-horiz--center' style={container}>
        
        {/* gradient */}
        <img 
          src={getProjectImage(props.id, "gradient")}
          alt=""
          width={"100%"}
          style={{position: "absolute", zIndex: 0, transform: "rotate(180deg)", bottom: 0}}>
        </img>

        {/* content */}
        <div className="title1" style={{textAlign: "center"}}><b>{projectData.name}</b></div>
        <div className="body" style={{textAlign: "center"}}>{projectData.descriptionShort}</div>
        <div className='flex--horiz' style={{marginTop: -16}}>
          <Link text={projectData.msg2} url={projectData.url2} isInternal="false" type="block" icon="arrowDiagonal"></Link>
          <Link text={projectData.msg3} url={projectData.url3} isInternal="false" type="block" icon="arrowDiagonal"></Link>
        </div>
        <div style={imgContainerStyle}>
          <img 
            src={getProjectImage(props.id, "banner")}
            alt=""
            width={"100%"}
            style={imgStyle}>
          </img>
        </div>
      </a>
    </div>
  );
}

export default App;
