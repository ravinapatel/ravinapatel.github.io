import React from 'react';
import Socials from "./Socials";

function App() {
  // Style
  const container = {
    color: "#ababab",
    width: "100%",
    textAlign: "center",
    fontSize: "14px"
  }

  return (
    <div style={container}>
      <div style={{ paddingTop: 80, paddingBottom: 30 }}>
        <p style={{ paddingBottom: 10 }}>designed and developed by ravina patel</p>
        <Socials light="true"></Socials>
      </div>
    </div >
  );
}

export default App;
