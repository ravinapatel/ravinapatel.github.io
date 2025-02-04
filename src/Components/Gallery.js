import React from 'react';
import Project from "./Project";
import useWindowSize from "./useWindowSize";


function App(props) {
  // A component that displays an array of project data as a gallery of Project Components 

  // Props:
  //   - numColsArray       [bigScreen, medScreen, smallScreen]
  //   - totalWidth         total width of the gallery
  //   - data               array of project data
  //   - title              title of gallery section
  //   - square             bool indicating whether project images should be squares
  //   - padding            optional padding value


  // RESONSIVENESS
  const window = useWindowSize();
  var isBigScreen = window.width > 1200
  var isSmallScreen = window.width < 700
  
  // DATA
  if (!props.numColsArray) return null;   // wait for `numColsArray` to fetch

  const PADDING = props.padding != null ? props.padding : 20;
  function getNumCols() {
    if (isBigScreen) return props.numColsArray[0];
    else if (isSmallScreen) return props.numColsArray[2];
    else return props.numColsArray[1];
  }
  var numCols = getNumCols();

  // Array of Project components (adding project props just have to be updated here)
  const projects = props.data.map(item => < Project
    id={item.id}
    name={item.name}
    description={item.description}
    descriptionShort={item.descriptionShort}
    msg={item.msg}
    url={item.url}
    // width={bigScreenColwidth}
    width={"100%"}
    square={props.square}
    isInternal={item.isInternal}
    isLarge={props.isLarge}
  />)

  // SCRIPT
  function createColumns() {
    // Initiaze `columns` to be the correct size based on `numColsArray`
    var columns = [];
    if (isBigScreen) numCols = props.numColsArray[0];
    else if (isSmallScreen) numCols = props.numColsArray[2];
    else numCols = props.numColsArray[1];

    for (var i = 0; i < numCols; i++) {
      columns.push([]);
    }
    
    // Popoulate `columns` with projects
    for (var j = 0; j < props.data.length; j++) {
      var idx = j % numCols;
      columns[idx].push(projects[j]);
    }
    return columns
  }
  var columns = createColumns();



  // STYLING
  const containerStyle = {
    textAlign: "center",
  }

  const contentStyle1 = {
    display: "inline-block",
    position: "relative",
    width: isBigScreen ? props.totalWidth : 0.9 * window.width,
  }
  const contentStyle2 = {
    display: "flex",
  }

  const columnStyle = {
    flex: 1/numCols,
    paddingRight: PADDING / 2,
    paddingLeft: PADDING / 2,
  }

  const rowStyle = {
    paddingBottom: PADDING / 2,
    paddingTop: PADDING / 2
  }

  const titleStyle = {
    paddingBottom: 24,
    width: isBigScreen ? props.totalWidth : 0.9 * window.width
  }


  // RENDERING
  var columnsComponents = columns.map(col =>
    <div style={columnStyle}>
      {col.map(row =>
        < div style={rowStyle} >
          {row}
        </div>
      )}
    </div>
  )

  return (
    <div style={containerStyle}>
      <div className="sectionTitle" style={titleStyle}>{props.title}</div>
      <div style={contentStyle1}>
        <div style={contentStyle2}>
          {columnsComponents}
        </div >
      </div>
    </div>
  );
}

export default App;
