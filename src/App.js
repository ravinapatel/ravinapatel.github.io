import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ReactGA from 'react-ga';

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
// import { ParallaxProvider } from 'react-scroll-parallax';

import Work from "./Pages/Work";
import About from "./Pages/About";
import Play from "./Pages/Play";

import Pandora from "./Pages/Case Studies/Pandora";
import Exceed from "./Pages/Case Studies/Exceed";
import Snap from "./Pages/Case Studies/Snap";
// import Patch from "./Pages/Case Studies/Patch";
// import CaseStudy from "./Pages/Case Studies/CaseStudy";

// -----------------------------------------------------------------------------
// TODO:
// - write resell case study
// - while loading: {loading screen} else: <FadeIn></FadeIn>
// - calculate actual height of columns in Gallery
// -----------------------------------------------------------------------------


// chooses three projects from a dataset `data`, prioritizing ones with urls and 
// excluding the one being currently viewed (indicated by `ID`)
function chooseMoreData(data, ID) {
  var x = []
  while (x.length < 3) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].id !== ID && data[i].id !== "buffer" && data[i].url !== null) {
        x.push(data[i]);
      }
      if (x.length > 2) break;
    }
    if (x.length < 3) {
      for (i = 0; i < data.length; i++) {
        if (data[i].id !== ID && data[i].id !== "buffer") {
          x.push(data[i]);
        }
        if (x.length > 2) break;
      }
    }
  }
  return x
}

function App() {

  // GOOGLE ANALYTICS
  const trackingId = "UA-172133344-1"; // Google Analytics tracking ID
  useEffect(() => {
    ReactGA.initialize(trackingId);
    ReactGA.pageview(window.location.pathname + window.location.search); // report page view
  }, [])

  return (
    // <ParallaxProvider>
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/play" render={(props) => <Play {...props} chooseMoreData={chooseMoreData} />} />
            {/* <Route path="/pandora" render={(props) => <CaseStudy {...props} id='pandora' chooseMoreData={chooseMoreData} />} /> */}
            <Route path="/pandora" render={(props) => <Pandora {...props} chooseMoreData={chooseMoreData} />} />
            <Route path="/exceed" render={(props) => <Exceed {...props} chooseMoreData={chooseMoreData} />} />
            {/* <Route path="/exceed" render={(props) => <CaseStudy {...props} id='exceed' chooseMoreData={chooseMoreData} />} /> */}
            <Route path="/snap-cliques" render={(props) => <Snap {...props} chooseMoreData={chooseMoreData} />} />
            {/* <Route path="/snap-cliques" render={(props) => <CaseStudy {...props} id='snap' chooseMoreData={chooseMoreData} />} /> */}
            {/* <Route path="/resell" render={(props) => <CaseStudy {...props} id='resell'  chooseMoreData={chooseMoreData} />} /> */}

            {/* Incomplete Articles (comment out when pushing) */}
            {/* <Route path="/template" render={(props) => <Template {...props} chooseMoreData={chooseMoreData} />} /> */}
            {/* <Route path="/eatery" render={(props) => <Eatery {...props} chooseMoreData={chooseMoreData} />} /> */}

            {/* must be last */}
            <Route path="/" component={Work} />
          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    // </ParallaxProvider>
  );
}

export default App;
