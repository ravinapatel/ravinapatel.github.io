import React, { useState } from 'react';
import '../App.css';
import Link from "./Link";

// A component that displays a project of a dynamic width

// Props:
//   - name
//   - description
//   - id
//   - msg                  where the link leads
//   - url
//   - width                calculated by Gallery
//   - square
//   - isInternal           does link stay in this website
//   - isLarge              for enlarging font size


function App(props) {

  // CONSTANTS
  const textPadding = 30;

  // If you change image file names/location, this is the only place that needs to be updated
  function importImage(id) {
    switch (id) {
      // UX
      case 'buffer': return require('../Images/portfolio/ux/thumbnails/buffer.png');
      case 'snap': return require('../Images/portfolio/ux/thumbnails/snap.png');
      case 'meet': return require('../Images/portfolio/ux/thumbnails/meet.png');
      case 'pandora': return require('../Images/portfolio/ux/thumbnails/pandora.png');
      case 'resell': return require('../Images/portfolio/ux/thumbnails/resell.png');
      case 'exceed': return require('../Images/portfolio/ux/thumbnails/exceed.png');
      case 'way': return require('../Images/portfolio/ux/thumbnails/way.png');
      case 'patch': return require('../Images/portfolio/ux/thumbnails/patch.png');
      case 'eatery': return require('../Images/portfolio/ux/thumbnails/eatery.png');
      case 'snap-long': return require('../Images/portfolio/ux/banners/snap-banner.png');
      case 'meet-long': return require('../Images/portfolio/ux/banners/meet-banner.png');
      case 'eatery-long': return require('../Images/portfolio/ux/eatery-banner.png');

      // CS
      case 'simplay': return require('../Images/portfolio/cs/simplay.png');
      case 'code': return require('../Images/portfolio/cs/fractals-gif.gif');
      case 'connect4': return require('../Images/portfolio/cs/board-gif.gif');
      case 'fractals': return require('../Images/portfolio/cs/fractals-gif.gif');
      case 'invaders': return require('../Images/portfolio/cs/invaders-gif.gif');
      case 'pixel': return require('../Images/portfolio/cs/pixel_gif_og.gif');
      case 'weather': return require('../Images/portfolio/cs/brella.png');
      case 'memory': return require('../Images/portfolio/cs/memory.gif');
      case 'critter': return require('../Images/portfolio/cs/critterworld.gif');
      case 'fallen-flame': return require('../Images/portfolio/cs/fallen-flame.png');

      // LINE ART
      case 'art': return require('../Images/portfolio/art/feels.jpg');
      case 'feels': return require('../Images/portfolio/art/feels.jpg');
      case 'moonlight': return require('../Images/portfolio/art/moonlight.jpg');
      case 'doodle': return require('../Images/portfolio/art/doodle.jpg');
      case 'head-back': return require('../Images/portfolio/art/head-back.jpg');
      case 'tylenol': return require('../Images/portfolio/art/tylenol.jpg');
      case 'building-sketch': return require('../Images/portfolio/art/building-sketch.jpg');
      case 'faded': return require('../Images/portfolio/art/Faded.jpg');
      case 'shmoke': return require('../Images/portfolio/art/shmoke.jpg');
      case 'lexi': return require('../Images/portfolio/art/lexi.jpg');
      case 'arch': return require('../Images/portfolio/art/arch.png');

      // WATERCOLOR ART
      case 'affection': return require('../Images/portfolio/art/affection.png');
      case 'bird': return require('../Images/portfolio/art/bird.jpg');
      case 'birds': return require('../Images/portfolio/art/birds.jpg');
      case 'falling-water': return require('../Images/portfolio/art/Falling-Water.jpg');
      case 'mistletoe': return require('../Images/portfolio/art/Mistletoe.jpg');
      case 'red-purple': return require('../Images/portfolio/art/red-purple.jpg');
      case 'sunset': return require('../Images/portfolio/art/Sunset.jpg');
      case 'winter': return require('../Images/portfolio/art/Winter.jpg');

      // OTHER ART
      case 'fool': return require('../Images/portfolio/art/fool.png');
      case 'wallflower': return require('../Images/portfolio/art/wallflower.png');
      case 'cacti': return require('../Images/portfolio/art/cacti.jpg');
      case 'henna': return require('../Images/portfolio/art/Henna.jpg');
      case 'sunset-sketch': return require('../Images/portfolio/art/Sunset-Sketch.jpg');
      case 'wood-mandala': return require('../Images/portfolio/art/wood.jpg');

      // MOTION
      case 'motion': return require('../Images/portfolio/motion/bouncy-fruit.gif');
      case 'bouncy-fruit': return require('../Images/portfolio/motion/bouncy-fruit.gif');
      case 'smokey-cabin': return require('../Images/portfolio/motion/smokey-cabin.gif');
      case 'starry-night': return require('../Images/portfolio/motion/starry-night.gif');
      case 'red-sky': return require('../Images/portfolio/motion/red-sky.gif');

      // DIGITAL
      case 'toggle': return require('../Images/portfolio/digital/toggle.gif');
      case 'cards-light': return require('../Images/portfolio/digital/cards-light.png');
      case 'cards-dark': return require('../Images/portfolio/digital/cards-dark.png');
      case 'cherries': return require('../Images/portfolio/digital/cherries.png');
      case 'print': return require('../Images/portfolio/digital/print.png');
      case 'holo-sticker': return require('../Images/portfolio/digital/holo-sticker.png');
      
      default: return require('../Images/portfolio/digital/print.png');

    }
  }

  const [isHover, setIsHover] = useState(false);

  // STYLING
  const containerStyle = {
    width: Number(props.width),
    height: "auto",
    borderRadius: "10px",
    border: (props.name == null) ? "1px solid #e4e4e4" : ""
  }

  // Info = Name + Description
  const infoStyle = {
    textAlign: "left",
    display: "block",
    position: "relative",
    width: Number(props.width) - 2 * textPadding,
    color: "black",
    // borderTop: (props.name != null) ? "1px solid #000" : "none",
    // zIndex: 100
  }

  if (!isHover || props.name == null) {
    infoStyle.padding = "0px"
  }
  else if (props.url != null) {
    infoStyle.padding = "16px 20px 10px 20px"
  }
  else {
    infoStyle.padding = "16px 20px 16px 20px"
  }

  const projectName = {
    letterSpacing: "0.03em",
    fontSize: props.isLarge === "true" ? 22 : 18,
    fontWeight: "bold",
    textDecoration: "none",
    paddingBottom: (props.name != null) ? 10 : 0
  }

  const projectDescription = {
    letterSpacing: "0.03em",
    fontSize: props.isLarge === "true" ? 16 : 14,
    textDecoration: "none",
  }


  // RENDERING
  return (
    <div 
      className={(props.name != null) ? "project" : ""}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)} 
      style={containerStyle}>

      <a href={props.url} target={(props.isInternal === "true") ? "" : "_blank"} style={{display: "block"}}>
        <img
          src={importImage(props.id)}
          alt="Project thumbnail"
          width={props.width}
          height={props.square === "true" ? props.width : "null"}
          align="center"
          style={{zIndex: -10, borderRadius: 10}}                      /* borderRadius should match containerStyle radius in this file and .imgButton in App.css*/
          // className={(props.name != null) ? "image" : ""}
        />
      </a>

      <div className={(props.name != null) ? "details" : ""} style={infoStyle}>
        <div style={projectName} >{props.name}</div>
        <div style={projectDescription}>{props.isLarge==="true" ? props.description : props.descriptionShort}</div>
        <Link 
          text={props.msg} 
          url={props.url} 
          isInternal={props.isInternal}
          type={props.isLarge==="true"? "block" : "small"} 
          icon="arrowRight" 
          color="rgba(0, 0, 0, 1)"
          style={{paddingTop: props.isLarge==="true" ? "auto" : 100 }}>
        </Link>
      </div>

    </div >
  );
}

export default App;
