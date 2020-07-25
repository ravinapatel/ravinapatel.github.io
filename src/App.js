import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Work from "./Pages/Work";
import About from "./Pages/About";
import Art from "./Pages/Art";
import Code from "./Pages/Code";
import Motion from "./Pages/Motion";

import Template from "./Pages/Case Studies/Template";
import Eatery from "./Pages/Case Studies/Eatery";
import Exceed from "./Pages/Case Studies/Exceed";
import Snap from "./Pages/Case Studies/Snap";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ParallaxProvider } from 'react-scroll-parallax';



// TODO:
// - rewrite case studies
// - while loading: {loading screen} else: <FadeIn></FadeIn>
// - project link should depend on isInternal not square prop
// ----------
// - fun animations
// - calculate actual height of columns in Gallery


// chooses three projects from a dataset, prioritizing ones with urls and excluding
// the one being currently viewed
function chooseMoreData(data, ID) {
  var x = []
  while (x.length < 3) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].id != ID && data[i].id != "buffer" && data[i].url != null) {
        x.push(data[i]);
      }
      if (x.length > 2) break;
    }
    if (x.length < 3) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].id != ID && data[i].id != "buffer") {
          x.push(data[i]);
        }
        if (x.length > 2) break;
      }
    }
  }
  return x
}

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <Switch className="websiteBody">
            <Route path="/about" component={About} />
            <Route path="/code" render={(props) => <Code {...props} chooseMoreData={chooseMoreData} />} />
            <Route path="/motion" render={(props) => <Motion {...props} chooseMoreData={chooseMoreData} />} />
            {/* <Route path="/resume" component={Resume} /> */}
            <Route path="/art" render={(props) => <Art {...props} chooseMoreData={chooseMoreData} />} />
            <Route path="/exceed" render={(props) => <Exceed {...props} chooseMoreData={chooseMoreData} />} />

            {/* Incomplete Articles (comment out when pushing) */}
            {/* <Route path="/snap-cliques" render={(props) => <Snap {...props} chooseMoreData={chooseMoreData} />} />
            <Route path="/template" render={(props) => <Template {...props} chooseMoreData={chooseMoreData} />} />
            <Route path="/eatery" render={(props) => <Eatery {...props} chooseMoreData={chooseMoreData} />} /> */}

            {/* must be last */}
            <Route path="/" component={Work} />
          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
