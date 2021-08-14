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
  //   - padding            optional padding value on all sides of each project

  // STATE
  const [cols, setCols] = useState(props.cols);
  const [totalWidth, setTotalWidth] = useState(props.totalWidth);

  // CONSTANTS
  const PADDING = props.padding != null ? props.padding : 20;
  var columns = [];
  var projWidth = (totalWidth - (cols) * PADDING) / cols;
  const window = useWindowSize();

  // Array of Project components (adding project props just have to be updated here)
  const projects = props.data.map(item => < Project
    id={item.id}
    name={item.name}
    description={item.description}
    msg={item.msg}
    url={item.url}
    width={projWidth}
    square={props.square}
    isInternal={item.isInternal}
    isLarge={props.isLarge}
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

  // Adjust size of gallery according to window size
  function responsiveDown() {
    if (window.width < totalWidth) {
      if (cols > 1) {
        setCols(cols - 1)
        setTotalWidth(window.width - 2 * PADDING)
      }
      if (cols == 1) {
        setTotalWidth(window.width - 4 * PADDING)
      }
    }
    // if (window.width < totalWidth + 100) {
    //   if (cols > 1) {
    //     setCols(cols - 1)
    //     setTotalWidth(totalWidth - projWidth - 1.5 * PADDING)
    //   }
    // }
    // if ((window.width > totalWidth) && (cols == 1)) {
    //   setTotalWidth(window.width)
    // }
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
    width: projWidth
  }

  const rowStyle = {
    paddingBottom: PADDING / 2,
    paddingTop: PADDING / 2
  }

  const titleStyle = {
    paddingBottom: 20,
    width: Number(totalWidth)
  }


  // SCRIPT
  columnsInit();
  placeProjects();
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
