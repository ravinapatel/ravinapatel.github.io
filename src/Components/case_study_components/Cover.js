import React from 'react';
import useWindowSize from "../useWindowSize";
import FadeIn from 'react-fade-in';
import Link from "../Link";
import uxData from "../../Data/uxData.json";
import { getProjectImage } from '../Helpers'

// Props:
//   - id
//   - description           todo: use prop! // could make this default to uxData description
//   - metadata

function Body(props) {

  // GET DATA
  const metadataSection = (metadata) => {
    return (
      <div className='flex--horiz flex-align-horiz--spread'>
        {props.metadata.map(([key, value], index) => (
          <div key={index} >
            <div className="subheading" style={{paddingBottom: 8}}>{key}</div>
            <div className="body" style={{ whiteSpace: "pre-line" }}>{value}</div>
          </div>
        ))}
      </div>
    );
  };
  const projectData = uxData.find(item => item.id === props.id)


  // STYLING
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
  const overlayStyle = {
    content: "''",            // Required for pseudo-element
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
  };

  // RENDERING
  return (
    <FadeIn transitionDuration="500">

      {/* gradient */}
      <img 
        src={getProjectImage(props.id, "gradient")}
        alt=""
        width={"100%"}
        style={{position: "absolute", zIndex: -50}}
        >
      </img>

      {/* cover banner */}
      <div className="section" style={{marginTop: 90, marginBottom: 60}}>
        <div className='flex--vert flex-align-horiz--center' >
          <div className="title0" style={{textAlign: "center"}}><b>{projectData.name}</b></div>
          <div className="body">{projectData.descriptionShort}</div>
          <div className='flex--horiz' style={{marginTop: -16}}>
            <Link text={projectData.msg2} url={projectData.url2} isInternal="false" type="block" icon="arrowDiagonal"></Link>
            <Link text={projectData.msg3} url={projectData.url3} isInternal="false" type="block" icon="arrowDiagonal"></Link>
          </div>
          <div style={imgContainerStyle}>
            <img 
              src={getProjectImage(props.id, "banner")}
              alt=""
              width={"100%"}
              style={imgStyle}
              >
            </img>
            <div style={overlayStyle}></div>
          </div>
        </div>
      </div >

      {/* metadata */}
      <div className='section' >
        <div className="body blockQuote">
          {props.description}
          <div className='flex--horiz'>
            <Link text={projectData.msg2} url={projectData.url2} isInternal="false" type="block" icon="arrowDiagonal"></Link>
            <Link text={projectData.msg3} url={projectData.url3} isInternal="false" type="block" icon="arrowDiagonal"></Link>
          </div>
        </div>
        <div className='spacer'></div>
        {metadataSection()}
      </div>

    </FadeIn>
  );
}

export default Body;
