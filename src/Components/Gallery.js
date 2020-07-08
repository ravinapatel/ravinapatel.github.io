import React from 'react';
import Project from "./Project";


function App(props) {
  // A component that displays a group of Project Components as a gallery

  // Props:
  //   - cols               number of columns for the gallery
  //   - totalWidth         total width of the gallery
  //   - data               array of project data
  //   - msg                title of gallery section
  //   - square             bool indicating whether project images should be squares

  // CONSTANTS
  const PADDING = props.padding != null ? props.padding : 20;
  var columns = [];
  const width = (props.totalWidth - (props.cols) * PADDING) / props.cols;

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
  // Initiazlies `columns` based on `cols`
  function columnsInit() {
    for (var i = 0; i < props.cols; i++) {
      columns.push([]);
    }
  }
  // Adds projects into `columns` in the correct (shortest) columns
  function placeProjects() {
    for (var i = 0; i < props.data.length; i++) {
      columns[chooseColumn()].push(projects[i]);
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

  // STYLING
  const containerStyle = {
    display: "flex",
    width: Number(props.totalWidth)
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
    width: Number(props.totalWidth),
    letterSpacing: "0.03em",
    fontSize: "18px",
    textDecoration: "none",
    color: "#000000"
  }


  // SCRIPT
  columnsInit();
  placeProjects();

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
