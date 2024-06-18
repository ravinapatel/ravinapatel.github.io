
import React, {useState} from 'react';
import BigNavbar from "./BigNavbar";
import MediumNavbar from "./MediumNavbar";
import MobileNavbar from "./MobileNavbar";
import useWindowSize from "./useWindowSize";

import { useLocation } from 'react-router-dom';


// RENDERING
function App() {

  const window = useWindowSize();
  let location = useLocation();

  // STATE
  const [active, setActive] = useState("none")
  React.useEffect(() => {
    const url = location.pathname;
    if (url.includes("work")) { setActive("work") }
    else if (url.includes("play")) { setActive("play") }
    else if (url.includes("about")) { setActive("about") }
    else if (url.includes("pandora")) { setActive("none") }
    else if (url.includes("exceed")) { setActive("none") }
    else if (url.includes("snap-cliques")) { setActive("none") }
    else { setActive("work") }
  }, []);
    
  // CONDITIONAL NAV SIZE
  if (window.width > 1200) {return <BigNavbar active={active} ></BigNavbar>}
  if (window.width > 700) {return <MediumNavbar active={active} ></MediumNavbar>}
  else {return <MobileNavbar active={active} ></MobileNavbar>};
}

export default App;