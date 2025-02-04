import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ReactGA from 'react-ga';

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
// import { ParallaxProvider } from 'react-scroll-parallax';

import Work from "./Pages/Work";
import About from "./Pages/About";
import Play from "./Pages/Play";

import Exceed from "./Pages/Case Studies/Exceed";
import Resell from "./Pages/Case Studies/Resell";
import Profile from "./Pages/Case Studies/Profile";
import ShareableAsssets from "./Pages/Case Studies/ShareableAssets";

// -----------------------------------------------------------------------------
// TODO:
// - while loading: {loading screen} else: <FadeIn></FadeIn>
    // https://react.dev/reference/react/lazy#suspense-for-code-splitting
// - calculate actual height of columns in Gallery
// -----------------------------------------------------------------------------

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

            {/* IMPORTANT: when adding routes here, be sure to update the function in Navbar.js */}
            <Route path="/about" component={About} />
            <Route path="/play" render={(props) => <Play/>} />
            <Route path="/shareable-assets" render={(props) => <ShareableAsssets/>} />
            <Route path="/exceed" render={(props) => <Exceed/>} />
            <Route path="/resell" render={(props) => <Resell/>} />
            <Route path="/profile" render={(props) => <Profile/>} />

            {/* Paths to render Notion case studies */}
            {/* <Route path="/pandora" render={(props) => <CaseStudy {...props} id='pandora'/>} /> */}
            
            <Route path="/" component={Work} />     {/* must be last */}

          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    // </ParallaxProvider>
  );
}

export default App;
