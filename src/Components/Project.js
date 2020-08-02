import React from 'react';
import carrot from '../Images/carrot.png';
import '../App.css';

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
  const textPadding = "30";

  // If you change image file names/location, this is the only place that needs to be updated
  function importImage(id) {
    switch (id) {
      // UX
      case 'buffer': return require('../Images/portfolio/ux/thumbnails/buffer.png');
      case 'snap': return require('../Images/portfolio/ux/thumbnails/snap.png');
      case 'meet': return require('../Images/portfolio/ux/thumbnails/meet.png');
      case 'exceed': return require('../Images/portfolio/ux/thumbnails/exceed.png');
      case 'way': return require('../Images/portfolio/ux/thumbnails/way.png');
      case 'patch': return require('../Images/portfolio/ux/thumbnails/patch.png');
      case 'eatery': return require('../Images/portfolio/ux/thumbnails/eatery.png');
      case 'fallen-flame': return require('../Images/portfolio/ux/thumbnails/fallen-flame.png');
      case 'snap-long': return require('../Images/portfolio/ux/snap-banner.png');
      case 'meet-long': return require('../Images/portfolio/ux/meet-banner.png');
      case 'eatery-long': return require('../Images/portfolio/ux/eatery-banner.png');

      // CS
      case 'code': return require('../Images/portfolio/cs/fractals-gif.gif');
      case 'connect4': return require('../Images/portfolio/cs/board-gif.gif');
      case 'fractals': return require('../Images/portfolio/cs/fractals-gif.gif');
      case 'invaders': return require('../Images/portfolio/cs/invaders-gif.gif');
      case 'pixel': return require('../Images/portfolio/cs/pixel_gif_og.gif');
      case 'weather': return require('../Images/portfolio/cs/brella.png');
      case 'memory': return require('../Images/portfolio/cs/memory.gif');
      case 'critter': return require('../Images/portfolio/cs/critterworld.gif');

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

      // WATERCOLOR ART
      case 'affection': return require('../Images/portfolio/art/affection.jpg');
      case 'bird': return require('../Images/portfolio/art/bird.jpg');
      case 'birds': return require('../Images/portfolio/art/birds.jpg');
      case 'falling-water': return require('../Images/portfolio/art/Falling-Water.jpg');
      case 'mistletoe': return require('../Images/portfolio/art/Mistletoe.jpg');
      case 'red-purple': return require('../Images/portfolio/art/red-purple.jpg');
      case 'sunset': return require('../Images/portfolio/art/Sunset.jpg');
      case 'winter': return require('../Images/portfolio/art/Winter.jpg');

      // OTHER ART
      case 'chalk': return require('../Images/portfolio/art/Chalk.jpg');
      case 'clock-tower': return require('../Images/portfolio/art/clock-tower.jpg');
      case 'henna': return require('../Images/portfolio/art/Henna.jpg');
      case 'sunset-sketch': return require('../Images/portfolio/art/Sunset-Sketch.jpg');
      case 'wood-mandala': return require('../Images/portfolio/art/Wood-Mandala.jpg');

      // MOTION
      case 'motion': return require('../Images/portfolio/motion/bouncy-fruit.gif');
      case 'bouncy-fruit': return require('../Images/portfolio/motion/bouncy-fruit.gif');
      case 'smokey-cabin': return require('../Images/portfolio/motion/smokey-cabin.gif');
      case 'starry-night': return require('../Images/portfolio/motion/starry-night.gif');
      case 'red-sky': return require('../Images/portfolio/motion/red-sky.gif');
    }
  }

  // STYLING
  const containerStyle = {
    display: "flex",
    position: "relative",
    width: Number(props.width),
  }

  // Info = Name + Description
  const infoStyle = {
    textAlign: "left",
    position: "absolute",
    bottom: Number(textPadding),
    left: Number(textPadding),
    width: Number(props.width) - 2 * Number(textPadding),
    color: "black",
  }

  const projectName = {
    letterSpacing: "0.03em",
    fontSize: props.isLarge == "true" ? 22 : 18,
    fontWeight: "bold",
    textDecoration: "none",
    paddingBottom: 10
  }

  const projectDescription = {
    letterSpacing: "0.03em",
    fontSize: props.isLarge == "true" ? 16 : 14,
    textDecoration: "none",
  }

  // Top-right message indicating click behavior (e.g. Read case study)
  const msgStyle = {
    display: "inline-block",
    position: "absolute",
    textAlign: "right",
    top: Number(textPadding),
    right: Number(textPadding),
    width: Number(props.width) - 2 * Number(textPadding),
    color: "black",
    transition: `opacity 300 ms ease-in -out`,
  }

  // RENDERING
  return (
    <div className="project" style={containerStyle}>
      <div style={containerStyle}>
        <div className="text" style={infoStyle}>
          <div style={projectName} >{props.name}</div>
          <div style={projectDescription}>{props.description}</div>
        </div>

        <div className="text" style={msgStyle}>
          <div style={projectDescription} >
            {props.msg}
            <img
              src={carrot}
              alt="" width={6}
              class="img-responsive"
              style={{ paddingLeft: "10px", opacity: props.msg != null ? 1 : 0 }}
            />
          </div>
        </div>

        <a href={props.url} target={(props.isInternal == "true") ? "" : "_blank"}>
          <img
            src={importImage(props.id)}
            alt="Project thumbnail"
            width={props.width}
            height={props.square == "true" ? props.width : "null"}
            align="center"
            className={(props.name != null) ? "image" : ""}
          />
        </a>
        {/* <Link to={props.url} ><img src={importImage(props.id)} alt="Logo" width={props.width} class="img-responsive" alt="" align="center" style={image} /></Link> */}

      </div>
    </div >
  );
}

export default App;
