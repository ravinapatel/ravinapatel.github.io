import React from 'react';
import '../App.css';

// PROPS
// - text
// - url
// - isInternal
// - block          "inline" | "block" | "small"
// - icon
// - color
// - fontWeight     "bold" | "regular" (default "bold")

function Button(props) {

  // IMPORT IMAGES
  function importImage(icon) {
    switch (icon) {
      case 'arrowRight': return require('../Images/icons/arrowRight.png');
      case 'arrowDiagonal': return require('../Images/icons/arrowDiagonal.png');
      case 'arrowDiagonalGrey': return require('../Images/icons/arrowDiagonalGrey.png');
      default: require('../Images/icons/arrowRight.png');
    }
  }

  // STYLING
  // animation styling is in ../App.css
  const containerStyle = {
    width: "fit-content",
    borderRadius: 4,
    cursor: "pointer",
    display: "block"
  }
  if (props.text == null) containerStyle.display = "none"

  const textStyle = {
    display: "inline-block",
    fontSize: "18px",
    fontWeight: props.fontWeight==null ? "bold" : props.fontWeight,
    color: props.color,
    textDecoration: "none",
    paddingRight: props.icon==="" ? 0 : 6,
  }

  const iconStyle = {
    display: props.icon==="" ? "none" : "inline-block",
    width: "14px"
  }

  // CONDITIONAL STYLING (BASED ON PROPS.TYPE)
  if (props.type === "inline") {
    containerStyle.padding = "0px 5px"
    containerStyle.margin = "-2px -2px 0px -4px"
    containerStyle.display = "inline-block"
    textStyle.fontSize = "18px"
    textStyle.paddingRight = 4
  }
  else if (props.type === "block") {
    containerStyle.padding = "8px 8px"
    containerStyle.margin = "6px 0px 0px -8px"
    textStyle.fontSize = "18px"
  }
  else if (props.type === "small") {
    containerStyle.padding = "4px 4px"
    containerStyle.margin = "2px 0px 0px -4px"
    textStyle.fontSize = "14px"
    iconStyle.width = "10px"
  }


  return (
    <a className="link" style={containerStyle} href={props.url} target={(props.isInternal === "true") ? "" : "_blank"}>

      <div style={textStyle} >{props.text}</div>
      <img
        src={importImage(props.icon)}
        alt="Arrow icon"
        style={iconStyle}
      />

    </a>
  );
}

export default Button;
