import React from 'react';
import '../../App.css';

// PROPS
// - color
// - text

// RENDERING
function Quote(props) {

  const blockquote = {
    borderLeft: "10px solid",
    borderColor: props.color,
    padding: "0.5em 30px"
  }

  return (
    <div className="blockquote" style={blockquote} >
      <div className="emphatic">{props.text}</div>
    </div >
  );
}

export default Quote;
