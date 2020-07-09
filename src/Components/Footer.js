import React from 'react';


function App() {
  // Style
  const container = {
    color: "#ababab",
    width: "100%",
    height: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  const content = {
    flex: "0 0 500px",
    textAlign: "center",
    fontSize: "14px"
  }

  return (
    <div className="container" style={container}>
      <div style={content}>
        <br></br>
        <br></br>
        <p>designed and developed by ravina patel</p>
      </div>
    </div >
  );
}

export default App;
