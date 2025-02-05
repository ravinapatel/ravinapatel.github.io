import React from 'react';
import Cover from "../../Components/case_study_components/Cover";
import uxData from "../../Data/uxData.json";
import FadeIn from 'react-fade-in';
import Link from "../../Components/Link";
import ScrollToTop from "../../Components/ScrollToTop";
import useWindowSize from "../../Components/useWindowSize";
import ChooseAnother from "../../Components/ChooseAnother";

// IMAGES
import highlights from "../../Images/portfolio/ux/exceed/highlights.png";
import highlightsBadges from "../../Images/portfolio/ux/exceed/highlights-badges.png";
import highlightsData from "../../Images/portfolio/ux/exceed/highlights-data.png";
import cardTimes from "../../Images/portfolio/ux/exceed/card-times.png";
import motivation from "../../Images/portfolio/ux/exceed/motivation.png";
import onboarding from "../../Images/portfolio/ux/exceed/onboarding-interests.png";
import searchIterations from "../../Images/portfolio/ux/exceed/search-iterations.png";
import market from "../../Images/portfolio/ux/exceed/market.png";
// import saveNote from "../../Images/portfolio/ux/exceed/save-note.gif"; (replaced import & commented out 1)
import saveNote from "../../Images/portfolio/ux/exceed/save-note.png";

//ICONS
import award from "../../Icons/award.svg";
import clock from "../../Icons/clock.svg";
import search from "../../Icons/search.svg";
import send from "../../Icons/send.svg";
import frown from "../../Icons/frown.svg";

// ICONS
import sun from "../../Icons/sun.svg";


function App(props) {

  // RESPONSIVENESS
  const window = useWindowSize();
  var isSmallScreen = window.width < 700
  var isBigScreen = window.width > 1200

  // STYLING
  const ICON_WIDTH = 40
  const ICON_WIDTH_MEDIUM = 32
  const ICON_WIDTH_SMALL = 24
  const iconTopMargin = {
    paddingTop: 4
  }
  const equalSize = {
    flex: "1 1 0px",
    alignSelf: "stretch"
  }
  const headerIndent = {
    marginLeft: -(ICON_WIDTH_MEDIUM + 40)
  }
  const iconContainer = {
    padding: 8,
    width: "fit-content"
  }

  // CONTENT
  const PROJECT_ID = "exceed"       // must match the project id in uxData
  const projectData = uxData[uxData.findIndex(item => item.id === PROJECT_ID)]
  const metadata = [
    ["Role", "Product Designer"],
    ["Honors", "1st place in a Paravane Ventures case contest"],
    ["Timeline", "5 days in the summer of 2020"]
  ];


  // RENDERING
  return (
    <FadeIn transitionDuration="500">
      <ScrollToTop></ScrollToTop>
      <div className='pageContainer'>

        <Cover id={PROJECT_ID} description={projectData.description} metadata={metadata}></Cover>

        {/* highlights */}
        <div className='section' >
          <div className='card-surface--white card-stroke--blue flex--vert flex-align-horiz--center'>
            <div> <img src={sun} width={ICON_WIDTH} className="icon--blue"></img> </div>
            <div className="heading greyText">Highlights</div>
            <div className='card-nested-surface--grey'> <img src={highlights} width={"100%"}></img> </div>
            {/* <div className='card-nested-surface--grey flex--vert flex-align-horiz--center' style={equalSize}>
              <img src={saveNote} style={{width: "100%", maxWidth: 300}}></img>
            </div > */}
            <div className='card-nested-surface--grey'> <img src={highlightsBadges} width={"100%"}></img> </div>
          </div>
        </div>

        {/* challenge */}
        <div className='section' >
          <div className='card-surface--grey card-stroke--shine flex--vertical'>
            <div className="heading greyText">The Case Challenge</div>
            <div className='spacer'></div>
            <div className="body">
              People who are content with their current employment want to casually learn and grow and 
              keep up with recent events via short snackable content.
              <br></br><br></br>
              Design an app where people can receive a feed of relevant curated content to help them 
              learn, grow and develop.
            </div>
          </div>
        </div>

        {/* research */}
        <div className='section' >
          <div className='heading greyText'>Research</div>
          <div className='body'>
            Though the challenge was clear, I wanted to do user and market research to test the 
            opportunity hypothesis and dig deeper into the problem space. I found that:
          </div>
          <div className='title1'>
            31% of  <b>professionals don’t have 30 minutes a day</b> for learning, 
            yet <b>most platforms focus on long-form content</b>
          </div>

          <div className='body'>
            While most people have less than 30 minutes a day to dedicate to learning, mainstream 
            platforms, such as LinkedIn Learning and Skillshare, focus on long-form content.
          </div>
          <div className='card-surface--grey flex--vert'>
            <img src={market} style={{width: "100%"}}></img>
          </div>
          <div className='body greyText'>
            Note: Data was obtained through a survey of 20 working professionals of diverse 
            backgrounds, ages, and occupations.
          </div>
        </div>

        {/* solution */}
        <div className='section' >
          <div className='heading greyText'>Solution</div>
          <div className='body'>
            These findings confirmed that a learning app with snackable content could better 
            meet the needs of busy professionals.
          </div>
          <div className='card-surface--white card-stroke--blue card-dir--corner flex--vert'>
            <div className='title2'>
              <b>Exceed</b> is an app that provides snackable learning content to allow busy 
                professionals to continue growing.
            </div>
          </div>
          <div className='spacer'></div>

          <div className='body'>
            Exceed aims to fill the opportunity space, while improving the three primary pain 
            points that were found through research: motivation, time, and discovery.
          </div>

          <div className={ isSmallScreen ? 'flex--vert' : 'flex--horiz'}>
            <div className='card-surface--grey flex--vert flex-align-horiz--center' style={equalSize}>
              <img src={award} width={ICON_WIDTH_MEDIUM} className="icon--grey"></img>
              <div className="body"><b>Motivation</b></div>
              <div className="body" style={{textAlign: "center"}}>People need help staying motivated.</div>
            </div>
            <div className='card-surface--grey flex--vert flex-align-horiz--center' style={equalSize}>
              <img src={clock} width={ICON_WIDTH_MEDIUM} className="icon--grey"></img>
              <div className="body"><b>Time</b></div>
              <div className="body" style={{textAlign: "center"}}>Professionals have busy schedules, so it's hard to set aside time to learn.</div>
            </div>
            <div className='card-surface--grey flex--vert flex-align-horiz--center' style={equalSize}>
              <img src={search} width={ICON_WIDTH_MEDIUM} className="icon--grey"></img>
              <div className="body"><b>Discovery</b></div>
              <div className="body" style={{textAlign: "center"}}>People have trouble finding tools to learn specific subjects.</div>
            </div>
          </div>
        </div>

        {/* motivation */}
        <div className='section'>
          <div className={isBigScreen ? 'flex--horiz flex-align-vert--center' : 'flex--vert'} style={isBigScreen ? headerIndent : {}}>
            <div className='card-surface--white flex--horiz flex-align-vert--center' style={iconContainer}><img src={award} width={ICON_WIDTH_MEDIUM} className="icon--grey"></img></div>
            <div className='heading greyText'>Pain Point: Motivation</div>
          </div>
          <div className='title1'><b>Maintaining motivation through attainable goal setting</b></div>
          <div className='body'>
            A central issue I found through user research was that people thought they needed to
            dedicate much more time than they have, setting them up for failure.
          </div>
          <div className='card-surface--grey'>
            <span className='body redText'><b>31%</b></span> <span className='body'>of people are not meeting their daily learning goal...</span>
          </div>
          <div className='card-surface--grey'>
            ... but <span className='body redText'><b>80%</b></span> <span className='body'>of them have set their goal to be an hour a day</span>
          </div>
          <div className='card-surface--white card-stroke--blue card-dir--corner flex--vert'>
            <img src={frown} width={ICON_WIDTH} className="icon--blue"></img>
            <div className='heading greyText'>Key Insight</div>
            <div className='title2'>People overcommit in goal setting, leading to failure, and decreasing motivation.</div>
          </div>
          <div className='spacer'></div>

          <div className='body'>
            To turn this negative cycle into a positive one, I designed an onboarding step to suggest more <b>attainable 
            goals</b> and offer reminder notifications. I also allow users to <b>earn achievement badges</b> to keep them excited about their progress.
          </div>
          <div className='card-surface--grey flex--vert flex-align-horiz--center'>
            <img src={motivation} style={{width: "100%", maxWidth: 500}}></img> 
          </div>
        </div>

        {/* time */}
        <div className='section'>
          <div className={isBigScreen ? 'flex--horiz flex-align-vert--center' : 'flex--vert'} style={isBigScreen ? headerIndent : {}}>
            <div className='card-surface--white flex--horiz flex-align-vert--center' style={iconContainer}><img src={clock} width={ICON_WIDTH_MEDIUM} className="icon--grey"></img></div>
            <div className='heading greyText'>Pain Point: Time</div>
          </div>
          <div className='title1'><b>Fitting into a tight schedule</b></div>
          <div className='body'>
            Since interviewees frequently expressed that they didn't have enough time to dedicate to learning,
            I chose three media types that were conducive to short time budgets: video, audio, and text.
            <br></br><br></br>
            I also emphasized the short watch, listen, and read times in the card design.
          </div>
          <div className='card-surface--grey flex--vert flex-align-horiz--center'>
            <img src={cardTimes} style={{width: "100%"}}></img> 
          </div>
          <div className='spacer'></div>
          <div className='body'>
            Rather than expecting busy professionals to set aside time to learn, I wanted Exceed to fit into a hectic schedules. 
            To do this, I allow users to <b>save content for later</b>, and <b>quickly jot down notes</b> as they watch or listen. 
            This way, they can easily pick up where they left off.
          </div>
          <div className='card-surface--grey flex--vert flex-align-horiz--center'>
            <img src={saveNote} style={{width: "100%", maxWidth: 300}}></img> 
          </div>
        </div>


        {/* discovery */}
        <div className='section'>
          <div className={isBigScreen ? 'flex--horiz flex-align-vert--center' : 'flex--vert'} style={isBigScreen ? headerIndent : {}}>
            <div className='card-surface--white flex--horiz flex-align-vert--center' style={iconContainer}><img src={search} width={ICON_WIDTH_MEDIUM} className="icon--grey"></img></div>
            <div className='heading greyText'>Pain Point: Discovery</div>
          </div>
          <div className='title1'><b>Encouraging targeted discovery</b></div>
          <div className='card-surface--grey'>
            <span className='body redText'><b>50%</b></span> <span className='body'>of people knew what they wanted to learn but had 
              trouble finding the right tools to do it.</span>
          </div>

          <div className='body'>
            To address this, I collect interests during onboarding to create a personalized home feed that guides 
            users to content they are looking for.
          </div>
          <div className='card-surface--grey flex--vert flex-align-horiz--center'>
            <img src={onboarding} style={{width: "100%", maxWidth: 200}}></img> 
          </div>
          <div className='spacer'></div>

          <div className='body'>
            For the search entry point, I added an Explore page to the navigation instead of using a search bar or icon. 
            This dedicated page lets users easily find content related to their interests from onboarding.
          </div>
          <img src={searchIterations} style={{width: "100%"}}></img> 
        </div>

        {/* final designs */}
        <div className='section'>
          <div className='heading greyText'>Final Designs</div>
          <div className='title1'><b>Empowering artists to share with fans</b></div>
          <div className='card-surface--white'> <img src={highlights} style={{width: "100%"}}></img> </div>
        </div>



        {/* reflection */}
        <div className='section'>
          <div className='heading greyText'>Impact & Reflection</div>
          <div className='title1'><b>A successful sprint!</b></div>
          <div className='card-surface--white card-stroke--green card-dir--corner flex--vert' >
            <img src={send} width={ICON_WIDTH} className="icon--green"></img>
            <div className='heading greyText'>Success!</div>
            <div className='title2'> My submission won first place in the case competition! </div>
            <Link text={projectData.msg2} url={projectData.url2} isInternal="false" type="block" icon="arrowDiagonal"></Link>
          </div>

          <div className='spacer'></div>
          <div className='body'>Some exciting parts of this project:</div>
          <div className='card-surface--grey card-stroke--shine' >
            <div className='body'>
              The 5-day time constraint also pushed me to research, ideate, and build very quickly. 
              I followed Google's design sprint framework to work through the process.
            </div>
          </div>
          <div className='card-surface--grey card-stroke--shine' >
            <div className='body'>
              As a student, designing for busy professionals was a new challenge since they were so 
              different from me. I had to rely fully on research and interviews to understand their 
              experience and needs.
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