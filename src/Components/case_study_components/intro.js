import React from 'react';
import '../../App.css';

// A component that displays the intro tagline and specs of a project

// PROPS
// - tagline
// - specData

// STYLING
const SPECS_WIDTH = 300
const MIDDLE_SPACING = 170

const container = {
  textAlign: "center",
  width: "100%",
}

const left = {
  marginLeft: "0%",
  verticalAlign: "top",
  width: "50%",
  paddingTop: "15px",
  paddingRight: MIDDLE_SPACING,
  display: "inline-block",

  textAlign: "left",
  letterSpacing: "0.03em",
  fontSize: "24px"
}

const right = {
  display: "inline-block",
  right: "0%",
  verticalAlign: "top",
  width: SPECS_WIDTH
}

const list = {
  listStyleType: "none",
  padding: "0px"
}

const body = {
  width: SPECS_WIDTH,
  paddingBottom: 10
}

// RENDERING
function Intro(props) {

  function Specs() {
    return props.specData.map(spec => (
      <li >
        <p className="subheading">{spec.title}</p>
        <p className="body" style={body}>{spec.body}</p>
      </li>
    ));
  }

  return (
    <div style={container} >
      <div style={left}>{props.tagline}</div>

      <div style={right}>
        <ul style={list}>
          {Specs()}
        </ul>
      </div>
    </div >
  );
}

export default Intro;
