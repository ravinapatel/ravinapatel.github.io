import React from 'react';
import Cover from "../../Components/case_study_components/Cover";
import uxData from "../../Data/uxData.json";
import FadeIn from 'react-fade-in';
import Link from "../../Components/Link";
import ScrollToTop from "../../Components/ScrollToTop";
import useWindowSize from "../../Components/useWindowSize";
import ChooseAnother from "../../Components/ChooseAnother";

// IMAGES
import highlights from "../../Images/portfolio/ux/resell/highlights.png";
import fbMarketplace from "../../Images/portfolio/ux/resell/fb-marketplace.png";
import dumpAndRun from "../../Images/portfolio/ux/resell/dump-and-run.png";
import journey from "../../Images/portfolio/ux/resell/journey.png";
import handoffIterations from "../../Images/portfolio/ux/resell/handoff.gif";
// import handoffIterations from "../../Images/portfolio/ux/resell/handoff.png"; // static version
import auth from "../../Images/portfolio/ux/resell/authentification.png";
import profile from "../../Images/portfolio/ux/resell/profile.png";
import venmo from "../../Images/portfolio/ux/resell/venmo.gif";
// import venmo from "../../Images/portfolio/ux/resell/venmo.png"; // static version
import edges from "../../Images/portfolio/ux/resell/edges.png";
import system from "../../Images/portfolio/ux/resell/design-system.png";
import home from "../../Images/portfolio/ux/resell/home.gif";
// import home from "../../Images/portfolio/ux/resell/home.png"; // static version
import fiveStars from "../../Images/portfolio/ux/resell/five-stars.png";

// ICONS
import helpCircle from "../../Icons/help-circle.svg";
import smile from "../../Icons/smile.svg";
import sun from "../../Icons/sun.svg";
import userCheck from "../../Icons/user-check.svg";
import send from "../../Icons/send.svg";
import quotationMark from "../../Icons/quotation-mark.svg";


function App(props) {

  // RESPONSIVENESS
  const window = useWindowSize();
  var isSmallScreen = window.width < 700
  var isBigScreen = window.width > 1200

  // STYLING
  const ICON_WIDTH = 40
  const ICON_WIDTH_MEDIUM = 32
  const ICON_WIDTH_SMALL = 24
  const center = {textAlign: "center"}
  const headerIndent = {
    marginLeft: -(ICON_WIDTH_MEDIUM + 40)
  }
  const iconContainer = {
    padding: 8,
    width: "fit-content",
  }
  const equalSize = {
    flex: "1 1 0px",
    alignSelf: "stretch"
  }

  // CONTENT
  const PROJECT_ID = "resell"           // must match the project id in uxData
  const projectData = uxData[uxData.findIndex(item => item.id === PROJECT_ID)]
  const metadata = [
    ["Role", "Lead Product Designer"],
    ["Team", `1 Product Manager
                3 Product Designers
                7 Engineers
                1 Product Marketer`],
    ["Timeline", "2 semesters (Fall '21 - Spring '22)"]
  ];
  const introDescription = `As part of the project team, Cornell AppDev, we built a marketplace 
    app for Cornell. We created the app 0 → 1 from research to beta testing in two semesters. 
    The app launched after I graduated and now has 5 stars on the App Store.`


  // RENDERING
  return (
    <FadeIn transitionDuration="500">
      <ScrollToTop></ScrollToTop>
      <div className='pageContainer'>

        <Cover id={PROJECT_ID} description={introDescription} metadata={metadata}></Cover>

        {/* highlights */}
        <div className='section' >
          <div className='card-surface--white card-stroke--purple flex--vert flex-align-horiz--center'>
            <div> <img src={sun} width={ICON_WIDTH} className="icon--purple"></img> </div>
            <div className="heading greyText">Highlights</div>
            <div className='card-nested-surface--grey flex--horiz flex-align-horiz--spread'> 
              <img src={home} width={"45%"}></img> 
              <img src={venmo} width={"45%"}></img> 
            </div>
            <div className='card-nested-surface--grey'> <img src={edges} width={"100%"}></img> </div>
            <div className='card-nested-surface--grey'> <img src={system} width={"100%"}></img> </div>

          </div>
        </div>

        {/* research */}
        <div className='section' >
          <div className="heading greyText">The Problem</div>
          <div className="title1">
            <b> <span className="greenText"> 17/17</span> students want to buy or sell used goods, but only 
            <span className="redText"> 3/17</span> use existing solutions</b>
          </div>
          <div className="body">Current solutions don’t solve student needs:</div>
          
          <div className='card-surface--grey card-stroke--shine flex--vert'>
            <div className='flex--horiz'>
              <img src={fbMarketplace} style={{width: "40%", maxWidth: "300px", objectFit: "cover"}}></img>
              <div className='flex--vert'>
                <div className="heading greyText">Facebook Marketplace</div>
                <div className="body-medium blockQuote"> “I can’t always trust sellers on online marketplaces" </div>
                <div className='body'> Students don’t have cars to pickup items </div>
              </div>
            </div>
          </div>

          <div className='card-surface--grey card-stroke--shine flex--vert'>
            <div className='flex--horiz'>
              <img src={dumpAndRun} style={{width: "40%", maxWidth: "300px", objectFit: "cover"}}></img>
              <div className='flex--vert'>
                <div className="heading greyText">Dump & Run</div>
                <div className="body-medium blockQuote"> "The Dump and Run is inconvenient" </div>
                <div className='body'> Only happens once a year </div>
              </div>
            </div>
          </div>

          <div className="body greyText">Note: Data and quotes were obtained through surveys and user interviews 
            we conducted on Cornell students of diverse backgrounds.</div>
        </div>

        {/* the problem */}
        <div className='section' >
          <div className='card-surface--white card-stroke--red card-dir--corner flex--vert'>
            <img src={helpCircle} width={ICON_WIDTH} className="icon--pink"></img>
            <div className="heading greyText">The Problem</div>
            <div className="title2">Students want to shop sustainably, but potential 
              buyers and sellers don’t have a convenient, trustworthy way to connect with each other.
            </div>
          </div>
        </div>

        {/* the solution */}
        <div className='section' >
          <div className="heading greyText">The Solution</div>
          <div className="title1"> <b> Introducing Resell</b> </div>
          <div className="body">Resell is a Cornell marketplace that aims to be convenient and trustworthy.</div>
          
          <div className={isSmallScreen ? "flex--vert" : "flex--horiz"}>
            <div className='card-surface--white card-stroke--purple card-dir--corner flex--vert' style={equalSize}>
              <img src={smile} width={ICON_WIDTH} className="icon--purple"></img>
              <div className="heading greyText">Value Prop</div>
              <div className="title2"><b>Convenient</b></div>
              <div className="body">✅ Available year-round</div>
              <div className="body">✅ Connects Cornell members at walkable distances of each other</div>
            </div>
            <div className='card-surface--white card-stroke--purple card-dir--corner flex--vert' style={equalSize}>
              <img src={userCheck} width={ICON_WIDTH} className="icon--purple"></img>
              <div className="heading greyText">Value Prop</div>
              <div className="title2"><b>Trustworthy</b></div>
              <div className="body">✅ Users are restricted to the Cornell community </div>
            </div>
          </div>
        </div>

        {/* creating convenience */}
        <div className='section'>
          <div className={isBigScreen ? 'flex--horiz flex-align-vert--center' : 'flex--vert'} style={isBigScreen ? headerIndent : {}}>
            <div className='card-surface--white flex--horiz flex-align-vert--center' style={iconContainer}><img src={smile} width={ICON_WIDTH_MEDIUM} className="icon--grey"></img></div>
            <div className='heading greyText'>Creating Convenience</div>
          </div>
          <div className="body">
            We interviewed power buyers, power sellers, and neutral students about online marketplaces and found 
            that organizing handoffs and payments was the toughest part for everyone.</div>
          <div className='card-surface--grey card-stroke--shine' > <img src={journey} style={{width: "100%"}}></img> </div>
          <div className='card-surface--grey card-stroke--shine flex--horiz' >
            <img src={quotationMark} width={ICON_WIDTH_SMALL} className="icon--grey"></img>
            <div className="body-medium">It’s a hassle to organize details of handoffs and payment.</div>
          </div>
          <div className='spacer'></div>

          <div className="title1"> <b>Making it easier to organize handoff</b> </div>
          <div className='body'>
            In my first approach, I aimed to simplify the tediousness of describing times and locations by allowing buyers and 
            sellers to propose meetings. However, this proved too rigid to handle real-world changes and questions.
            <br></br><br></br>
            A basic chat function would have had the same limitations as current solutions, so we introduced
            <span className="purpleText"><b> chat buttons</b></span>. Chat buttons facilitate scheduling, while maintaining the flexibility of a regular chat!
          </div>
          <div className='spacer'></div>
          <img src={handoffIterations}></img>
          <div className='spacer'></div>

          <div className='body'>
            The chat buttons we designed to facilitate scheduling also helped solve another problem...
          </div>
          <div className="title1">
            <b><span className="purpleText">17/17</span> students prefer to pay digitally, but we weren’t allowed to process payments as a Cornell club</b> 
          </div>
          <div className='body'>
            Students expressed that if in-app payment wasn’t an option, they would prefer to pay with Venmo. We leveraged the 
            chat button section to seamlessly integrate Venmo payments into the experience.
          </div>
          <div className='card-surface--grey card-stroke--shine' style={center}>
            <img src={venmo} width={isSmallScreen ? "80%" : "40%"}></img>
          </div>
        </div>

        {/* instilling trust */}
        <div className='section'>
          <div className={isBigScreen ? 'flex--horiz flex-align-vert--center' : 'flex--vert'} style={isBigScreen ? headerIndent : {}}>
            <div className='card-surface--white flex--horiz flex-align-vert--center' style={iconContainer}><img src={userCheck} width={ICON_WIDTH_MEDIUM} className="icon--grey"></img></div>
            <div className='heading greyText'>Instilling Trust</div>
          </div>
          <div className='title1'><b>Instilling trust in our users</b></div>
          <div className='card-surface--grey card-stroke--shine flex--horiz' >
            <img src={quotationMark} width={ICON_WIDTH_SMALL} className="icon--grey"></img>
            <div className="body-medium">I can’t always trust sellers on online marketplaces</div>
          </div>
          <div className='body'>
            A major issue with current online solutions is having to watch out for scammers. While authenticating 
            sign-ups with Cornell members helps address this, we still wanted to design accounts to appear as 
            real, trustworthy community members.
          </div>
          <div className='card-surface--grey card-stroke--shine' >
            <img src={auth} style={{width: "100%"}}></img>
          </div>
          <div className='card-surface--grey card-stroke--shine' >
            <img src={profile} style={{width: "100%"}}></img>
          </div>
        </div>

        {/* final designs */}
        <div className='section'>
          <div className='heading greyText'>Final Designs</div>
          <div className='title1'><b>A convenient marketplace for sustainable shopping</b></div>
          
          <div className='card-nested-surface--grey flex--horiz flex-align-horiz--spread'> 
              <img src={home} width={"45%"}></img> 
              <img src={venmo} width={"45%"}></img> 
            </div>
        </div>

        {/* reflection */}
        <div className='section'>
          <div className='heading greyText'>Impact & Reflection</div>
          <div className='title1'><b>People are using the app!</b></div>
          <div className='card-surface--white card-stroke--green card-dir--corner flex--vert' >
            <img src={send} width={ICON_WIDTH} className="icon--green"></img>
            <div className='heading greyText'>Success!</div>
            <img src={fiveStars} width={"25%"}></img> 
            <div className='title2'>
              We created the app 0 &rarr; 1 from research to beta testing in two semesters. The app launched after 
              I graduated and now has hundreds of users and 5 stars on the App Store!
            </div>
            <div className='flex--horiz'>
              <Link text={projectData.msg2} url={projectData.url2} isInternal="false" type="block" icon="arrowDiagonal"></Link>
              <Link text={projectData.msg3} url={projectData.url3} isInternal="false" type="block" icon="arrowDiagonal"></Link>
            </div>
          </div>

          <div className='spacer'></div>
          <div className='body'>Some exciting parts of this project:</div>
          <div className='card-surface--grey card-stroke--shine' >
            <div className='body'>
              It was incredibly rewarding leading the design team for this project. Shoutout 
              to Jin and Lia for being the best designers to work with!
            </div>
          </div>
          <div className='card-surface--grey card-stroke--shine' >
            <div className='body'>
              This was the first project that I worked on from inception to make it to the 
              App Store & Google Play Store!
            </div>
          </div>
          <div className='card-surface--grey card-stroke--shine' >
            <div className='body'>
              It was exciting to see the project continue after I graduated, and I'm so 
              grateful to the students who kept it going.
            </div>
          </div>
        </div>

        {/* read another case */}
        <ChooseAnother id={PROJECT_ID}></ChooseAnother>

      </div>
    </FadeIn >
  );
}

export default App;