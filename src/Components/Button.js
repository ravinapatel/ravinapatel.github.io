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
    boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.05)",
    borderRadius: "2px",
    padding: "1em 30px",
    color: "#4d4d4d"
  }

  return (
    <Link
      to={props.url}
      target="_blank"
      download
      style={{ textDecoration: "none", color: "#373737", fontSize: "14px" }}>

      <div className="button" style={button}>{props.text}</div>
    </Link>
  );
}

export default Button;
