import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

// PROPS
// - text
// - url

function Button(props) {

  // STYLING
  // animation styling is in ../App.css
  const button = {
    display: "inline-block",
    border: "2px solid rgba(77, 77, 77, 0.2)",
    borderRadius: "5px",
    padding: "0.75em 20px"
  }

  return (
    <Link
      to={props.url}
      target="_blank"
      style={{ textDecoration: "none", color: "#373737", fontSize: "14px" }}>

      <div className="button" style={button}>{props.text}</div>
    </Link>
  );
}

export default Button;
