import React from 'react';
import Cover from "../../Components/case_study_components/Cover";
import uxData from "../../Data/uxData.json";
import FadeIn from 'react-fade-in';
import ScrollToTop from "../../Components/ScrollToTop";
import useWindowSize from "../../Components/useWindowSize";
import ChooseAnother from "../../Components/ChooseAnother";

// IMAGES
import highlights from "../../Images/portfolio/ux/profile/highlights-profile.png";
import profileDisconnect from "../../Images/portfolio/ux/profile/profile-disconnect.png";
import profileCard from "../../Images/portfolio/ux/profile/profile-card.png";
import sticky from "../../Images/portfolio/ux/profile/sticky.gif";
// import sticky from "../../Images/portfolio/ux/profile/sticky.png"; // static version
import impact from "../../Images/portfolio/ux/profile/impact.png";
import responsive from "../../Images/portfolio/ux/profile/responsive.png";
import redesign from "../../Images/portfolio/ux/profile/redesign.gif";

// ICONS
import sun from "../../Icons/sun.svg";
import checkCircle from "../../Icons/check-circle.svg";
import chevronsUp from "../../Icons/chevrons-up.svg";
import helpCircle from "../../Icons/help-circle.svg";
import arrowUp from "../../Icons/arrow-up.svg";


function App(props) {

  // RESPONSIVENESS
  const window = useWindowSize();
  var isSmallScreen = window.width < 700

  // STYLING
  const ICON_WIDTH = 40
  const ICON_WIDTH_SMALL = 24
  const iconTopMargin = {
    paddingTop: 4
  }

  // CONTENT
  const PROJECT_ID = "profile"          // must match the project id in uxData
  const projectData = uxData[uxData.findIndex(item => item.id === PROJECT_ID)]
  const metadata = [
    ["Role", "Product Designer"],
    ["Team", `1 Product Manager
              2 Product Designers 
              2 Engineers`],
    ["Timeline", "1 year (2023)"]
  ];

  // RENDERING
  return (
    <FadeIn transitionDuration="500">
      <ScrollToTop></ScrollToTop>
      <div className='pageContainer'>

        <Cover id={PROJECT_ID} description={projectData.description} metadata={metadata}></Cover>

        {/* highlights */}
        <div className='section' >
          <div className='card-surface--white card-stroke--purple flex--vert flex-align-horiz--center'>
            <div> <img src={sun} width={ICON_WIDTH} className="icon--purple"></img> </div>
            <div className="heading greyText">Highlights</div>
            <img src={redesign} style={{width: "80%"}}></img>
            <div className='spacer'></div>
            <img src={responsive} style={{width: "100%"}}></img>
          </div>
        </div>

        {/* problem */}
        <div className='section' >
          <div className="heading greyText">The Problem</div>
          <div className="title1">
            <b>The AMP profile page is missing key features, and its design is out-of-date.</b>
          </div>
          <div className="body">
            As AMP goes through a re-platforming, we have an opportunity to enhance the product. For the profile 
            page, the team decided to add a few highly requested features and modernize the design style.
          </div>
          
          <div className='card-surface--grey card-stroke--shine flex--vert'>
            <div className='flex--horiz'>
              <img src={checkCircle} width={ICON_WIDTH_SMALL} className="icon--grey" style={iconTopMargin}></img>
              <div className='flex--vert'>
                <div className="heading greyText">New Features</div>
                <div className='body'>Allow artists to spotlight content</div>
                <div className='body'>Allow artists to create custom bios</div>
              </div>
            </div>
          </div>

          <div className='card-surface--grey card-stroke--shine flex--vert'>
            <div className='flex--horiz'>
              <img src={chevronsUp} width={ICON_WIDTH_SMALL} className="icon--grey" style={iconTopMargin}></img>
              <div className='flex--vert'>
                <div className="heading greyText">Opportunities</div>
                <div className='body'>Improve usability to increase engagement and profile shares</div>
                <div className='body'>Update the design language to align with AMP’s modernized style</div>
              </div>
            </div>
          </div>
        </div>

        {/* design decision highlight */}
        <div className='section' >
          <div className="heading greyText">Design Decision Highlight</div>
          <div className="title1"> <b>Boosting shares by presenting profiles in a familiar way</b> </div>
          
          <div className='card-surface--white card-stroke--blue card-dir--corner flex--vert'>
            <img src={helpCircle} width={ICON_WIDTH} className="icon--blue"></img>
            <div className="heading greyText">Business Goal</div>
            <div className="title2">How might we encourage artists to share their Pandora profiles with fans?</div>
          </div>

          <div className='body'>
            The original design created a disconnect between how profiles appear in AMP, and how they show up to 
            listeners on Pandora (see below). I suspect that this creates uncertainty for artists about what they 
            would be sharing and how it would appear to listeners.
          </div>
          <div className='card-surface--grey'> <img src={profileDisconnect} width="100%"></img> </div>
          <div className='spacer'></div>

          <div className='body'>
            To address this, I designed a “profile card” that more closely resembles the Pandora profile. This also 
            consolidates functionality from many sections into a single component, saving space on the page.
          </div>
          <div className='card-surface--grey'> <img src={profileCard} width="100%"></img> </div>
          <div className='card-surface--grey'> <img src={sticky} width="100%"></img> </div>
          <div className='spacer'></div>

          <div className='card-surface--white card-stroke--green card-dir--corner flex--vert' >
            <img src={arrowUp} width={ICON_WIDTH} className="icon--green"></img>
            <div className='heading greyText'>Success</div>
            <div className='title2'>
              The redesign resulted in a <b>68%</b> increase in profile shares!
            </div>
          </div>
        </div>

        {/* final designs */}
        <div className='section' >
          <div className='heading greyText'>Final Designs</div>
          <div className='title1'><b>Giving artists the tools they need to grow</b></div>
          <div className='body'>Contact me for more details about this project!</div>
          <div className='card-surface--white card-stroke--blue flex--vert flex-align-horiz--center'>
          <div> <img src={sun} width={ICON_WIDTH} className="icon--blue"></img> </div>
            <div className="heading greyText">Final Designs</div>
            {/* nested card stroke not working */}
            <div className='card-nested-surface--grey'>
              <img src={highlights} style={{width: "100%"}}></img>
            </div>
          </div>
        </div>

        {/* impact */}
        <div className='section' >
          <div className='heading greyText'>Impact</div>
          <div className='title1'><b>Lots of happy artists :)</b></div>

          <div className={isSmallScreen ? "flex--vert" : "flex--horiz"}>
            <div className='card-surface--white card-stroke--green card-dir--corner flex--horiz'>
              <img src={arrowUp} width={ICON_WIDTH} className="icon--green"></img>
              <div className="title2"><b>303%</b> increase in engagement</div>
            </div>
            <div className='card-surface--white card-stroke--green card-dir--corner flex--horiz'>
              <img src={arrowUp} width={ICON_WIDTH} className="icon--green"></img>
              <div className="title2"><b>68%</b> increase in profile shares</div>
            </div>
          </div>
          <div className='card-surface--grey'> <img src={impact} width="100%"></img> </div>
        </div>

        {/* read another case */}
        <ChooseAnother id={PROJECT_ID}></ChooseAnother>

      </div>
    </FadeIn >
  );
}

export default App;