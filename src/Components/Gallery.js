import React, { useState } from 'react';
import Project from "./Project";
import useWindowSize from "./useWindowSize";


function App(props) {
  // A component that displays an array of project data as a gallery of Project Components 

  // Props:
  //   - cols               number of columns for the gallery
  //   - totalWidth         total width of the gallery
  //   - data               array of project data
  //   - msg                title of gallery section
  //   - square             bool indicating whether project images should be squares
  //   - padding            optional padding value
  //   - totalWidthMobile   optional total width for mobile

  // STATE
  const [cols, setCols] = useState(props.cols);
  const [totalWidth, setTotalWidth] = useState(props.totalWidth);

  // CONSTANTS
  const PADDING = props.padding != null ? props.padding : 20;
  var columns = [];
  var width = (totalWidth - (cols) * PADDING) / cols;
  const window = useWindowSize();

  // Array of Project components
  const projects = props.data.map(item => < Project
    id={item.id}
    name={item.name}
    description={item.description}
    msg={item.msg}
    url={item.url}
    width={width}
    square={props.square}
  />)

  //FUNCTIONS
  // Initiazlies `columns` to be the correct size based on `cols`
  function columnsInit() {
    for (var i = 0; i < cols; i++) {
      columns.push([]);
    }
  }
  // Adds each project into the `columns` array in the correct (shortest) column
  function placeProjects() {
    for (var i = 0; i < props.data.length; i++) {
      if (!(cols == 1 && props.data[i].id == "buffer")) {
        columns[chooseColumn()].push(projects[i]);
      }
    }
  }
  // Finds the shortest column
  function chooseColumn() {
    var col = 0;
    var min = 1000000000;
    for (var i = 0; i < columns.length; i++) {
      if (height(columns[i]) < min) {
        min = height(columns[i]);
        col = i;
      }
    }
    return col
  }
  // Future: should really return actual height of column, not number of elements
  function height(array) {
    return array.length
  }

  // Custom Mobile Display
  function mobileDisplay() {
    if (window.width < 900 && totalWidth != props.totalWidthMobile) {
      if (props.totalWidthMobile != null) {
        setTotalWidth(props.totalWidthMobile)
      }
    }
  }

  // Adjust size of gallery according to window size
  function responsiveDown() {
    if (window.width < totalWidth) {
      if (cols > 1) {
        setCols(cols - 1)
        setTotalWidth(totalWidth - width - 1.5 * PADDING)
      }
    }
  }

  // Adjust size of gallery according to window size
  function responsiveUp() {
    if (window.width > 900) {
      setCols(props.cols)
      setTotalWidth(props.totalWidth)
    }
  }

  // STYLING
  const containerStyle = {
    display: "flex",
    width: Number(totalWidth)
  }

  const columnStyle = {
    paddingRight: PADDING / 2,
    paddingLeft: PADDING / 2,
    width: width
  }

  const rowStyle = {
    paddingBottom: PADDING / 2,
    paddingTop: PADDING / 2
  }

  const titleStyle = {
    textAlign: "center",
    paddingBottom: PADDING,
    height: "100%",
    width: Number(totalWidth),
    letterSpacing: "0.03em",
    fontSize: "18px",
    textDecoration: "none",
    color: "#000000"
  }


  // SCRIPT
  columnsInit();
  placeProjects();
  mobileDisplay();
  responsiveDown();
  // responsiveUp();

  var columnsComponents = columns.map(col =>
    <div className="column" style={columnStyle}>
      {col.map(row =>
        < div className="row" style={rowStyle} >
          {row}
        </div>
      )}
    </div>
  )

  return (
    <div>
      <div className="title" style={titleStyle}>{props.msg}</div>
      <div className="container" style={containerStyle}>
        {columnsComponents}
      </div >
    </div>
  );
}

export default App;
