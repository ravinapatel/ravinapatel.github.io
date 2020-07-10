
import React from 'react';
import BigNavbar from "./BigNavbar";
import MobileNavbar from "./MobileNavbar";
import useWindowSize from "./useWindowSize";

// RENDERING
function App() {
  const window = useWindowSize();

  return (
    window.width > 900 ?
      <BigNavbar></BigNavbar> :
      <MobileNavbar></MobileNavbar>
  );
}

export default App;


