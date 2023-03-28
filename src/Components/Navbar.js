
import React from 'react';
import BigNavbar from "./BigNavbar";
import MediumNavbar from "./MediumNavbar";
import MobileNavbar from "./MobileNavbar";
import useWindowSize from "./useWindowSize";

// RENDERING
function App() {
  const window = useWindowSize();
  if (window.width > 1200) {return <BigNavbar></BigNavbar>}
  if (window.width > 700) {return <MediumNavbar></MediumNavbar>}
  else {return <MobileNavbar></MobileNavbar>};
}

export default App;