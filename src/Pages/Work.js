import React from 'react';
import WorkIntro from "../Components/WorkIntro";
import data from "../Data/uxData.json";
// import categoriesData from "../Data/categories.json";
import FadeIn from 'react-fade-in';
import Button from "../Components/Button";
import ProjectPrev from "../Components/ProjectPrev";
import ReactGA from 'react-ga';
import useWindowSize from "../Components/useWindowSize";
import {useRef} from 'react';


function clickResume() {
  // GA Event
  ReactGA.event({
    category: 'Resume',
    action: 'Opened resume from the button on the bottom of the work page'
  })
}
function clickEmail() {
  // GA Event
  ReactGA.event({
    category: 'Email',
    action: 'Opened mail from the button on the bottom of the work page'
  })
}


// RENDERING
function App() {

  // USE REF HOOK FOR SCROLL TO ELEMENT
  const scrollToDiv = (ref) => ref.current?.scrollIntoView({behavior: 'smooth'});
  const el1 = useRef();
  const el2 = useRef();

  // RESONSIVENESS
  const window = useWindowSize();
  var isSmallScreen = window.width < 700

  const projectPrevs = data.map((item) => (
    <ProjectPrev id={item.id} />
  ));

  // STYLING
  const projectsFlex = {
    display: "flex",
    gap: isSmallScreen? 60 : 120,
    flexDirection: "column"  /* Stack sections vertically */
  }


  return (
    <FadeIn transitionDuration="500">
      <div className='pageContainer'>

        {/* Intro */}
        <WorkIntro reference={el1} click={()=> scrollToDiv(el2)}></WorkIntro>

        {/* UX Projects */}
        <div className='section-wide' style={{paddingTop: 140, marginTop: -140}} ref={el2}>
          <div className="sectionTitle" style={{textAlign: "center", marginBottom: isSmallScreen ? 20 : 40}}>selected projects</div>
          <div style={projectsFlex}>
            {projectPrevs}
          </div>
        </div>

        {/* CTAs */}
        <div className='section-wide' style={{marginBottom: 60}}>
          <div className='flex--vert flex-align-horiz--center'>
            <div className="sectionTitle">wanna connect?</div>
            <div className='flex--horiz'>
              <div onClick={clickEmail}>
                <Button
                  text="Say hi!"
                  url="mailto: ravinapatel.work@gmail.com"
                ></Button>
              </div>
              <div onClick={clickResume}>
                <Button
                  text="View resume"
                  url="../../ravina-resume.pdf"
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default App;
