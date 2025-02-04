import React from 'react';
import '../App.css';

// PROPS
// - text
// - url
// - isInternal
// - type           "inline" | "block" | "small"
// - icon
// - color          "grey" (default "black")
// - fontWeight     "bold" | "regular" (default "bold")

function Button(props) {

  // IMPORT IMAGES
  function importImage(icon) {
    switch (icon) {
      case 'arrowRight': return require('../Icons/arrow-right.svg');
      case 'arrowDiagonal': return require('../Icons/arrow-up-right.svg');
      default: return require('../Icons/arrow-right.svg');
    }
  }

  // STYLING
  // animation styling is in ../App.css
  const containerStyle = {
    width: "fit-content",
    borderRadius: 4,
    cursor: "pointer",
    display: "block",
  }
  if (props.text == null) containerStyle.display = "none"

  const textStyle = {
    display: "inline-block",
    // verticalAlign: "middle",
    fontSize: "18px",
    fontWeight: props.fontWeight==null ? "bold" : props.fontWeight,
    textDecoration: "none",
    paddingRight: props.icon==="" ? 0 : 6,
  }

  const iconStyle = {
    display: props.icon==="" ? "none" : "inline-block",
    verticalAlign: "middle",
    width: "20px"
  }

  // CONDITIONAL STYLING (BASED ON PROPS.TYPE)
  if (props.type === "inline") {
    containerStyle.padding = "0px 5px"
    containerStyle.margin = "0px 0px -2px -4px"
    containerStyle.display = "inline-block"
    textStyle.fontSize = "18px"
    textStyle.paddingRight = 2
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
    textStyle.paddingRight = 4
    iconStyle.width = "16px"
  }

  // CONDITIONAL STYLE (BASED ON PROPS.COLOR)
  function getClassVar(colorName) {
    switch (colorName) {
      case 'grey': return 'greyText icon--grey'
      default: return 'blackText';
    }
  }
  const classVar = getClassVar(props.color)


  return (
    <a className="link" style={containerStyle} href={props.url} target={(props.isInternal === "true") ? "" : "_blank"}>

      <div className={classVar} style={textStyle} >{props.text}</div>
      <img
        src={importImage(props.icon)}
        className={classVar}
        alt="Arrow icon"
        style={iconStyle}
      />

    </a>
  );
}

export default Button;
