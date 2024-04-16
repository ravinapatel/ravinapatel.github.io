import React from 'react';
import '../App.css';

// PROPS
// - text
// - url
// - isInternal

function Button(props) {

  // STYLING
  // animation styling is in ../App.css
  const button = {
    display: "inline-block",
    backgroundColor: "white"
  }

  const textStyle = {
    textDecoration: "none", 
    color: "#000", 
    fontSize: "18px",
    fontWeight: 500
  }

  return (
    <a
      href={props.url}
      target={(props.isInternal === "true") ? "" : "_blank"}
      style={textStyle}>

      <div className="button" style={button}>{props.text}</div>
    </a>
  );
}

export default Button;
