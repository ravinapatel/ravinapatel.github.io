import React from 'react';

import Gallery from "../../Components/Gallery";
import BlockQuote from "../../Components/case_study_components/blockQuote";
import uxData from "../../Data/uxData.json";
import useWindowSize from "../../Components/useWindowSize";
import FadeIn from 'react-fade-in';
import './CaseStudy.css';

// IMAGES

import finalCover from "../../Images/portfolio/ux/exceed/final-cover.png";

import Cover from "../../Images/portfolio/ux/patch/laptop-mockup.jpg";
import laptopMockup from "../../Images/portfolio/ux/patch/laptop-mockup.jpg";
import content from "../../Images/portfolio/ux/exceed/content.png";

import processTypes from "../../Images/portfolio/ux/exceed/process-time.png";
import processSave from "../../Images/portfolio/ux/exceed/process-save.png";
import processCard from "../../Images/portfolio/ux/exceed/process-card.png";
import processExplore from "../../Images/portfolio/ux/exceed/process-explore.png";
import timeIcon from "../../Images/portfolio/ux/exceed/time-icon.png";
import exploreIcon from "../../Images/portfolio/ux/exceed/explore-icon.png";
import motivationIcon from "../../Images/portfolio/ux/exceed/motivation-icon.png";
import crossIcon from "../../Images/portfolio/ux/exceed/cross-icon.png";

import personalization from "../../Images/portfolio/ux/exceed/personalization.png";
import motivation from "../../Images/portfolio/ux/exceed/motivation.png";
import interests from "../../Images/portfolio/ux/exceed/onboarding-interests.png";
import time from "../../Images/portfolio/ux/exceed/time.png";


// The Exceed App

// RENDERING
function App(props) {

  // RESPONSIVENESS
  const window = useWindowSize();
  var isBigScreen = window.width > 900
  var isMediumScreen = window.width < 900
  var isSmallScreen = window.width < 700

  // STYLING
  const COLOR = "#27C8D2"
  const GREY = "#9a9a9a"
  const WIDTH = isBigScreen ? 800 : "90%"
  const PADDING = (window.width - WIDTH) / 2
  const SECTION_SPACING = 50
  const ID = "patch"       // must match the project id in uxData

  const contentStyle = {
    textAlign: "center",
    overflow: "hidden"
  }

  const section = {
    display: "inline-block",
    paddingBottom: SECTION_SPACING,
    paddingTop: SECTION_SPACING,
    width: WIDTH,
    marginLeft: PADDING,
    marginRight: PADDING
  }
  const tableContainer = {
    display: "inline-block",
    marginTop: 30,
    marginBottom: 30
  }
  const table = {
    MsFlex: 1,  /* IE 10 */
    display: isSmallScreen ? "block" : "flex",
    width: WIDTH
  }
  const tableCol = {
    flex: 1,
    paddingRight: isSmallScreen ? 0 : 60, paddingBottom: isSmallScreen ? 60 : 0,
  }
  const tableColFinal = {
    flex: 1,
  }

  return (
    <FadeIn transitionDuration="500">
      <div style={contentStyle}>
        {/* Intro */}
        <div style={section}>
          <div style={{ width: 400, textAlign: "center", display: "inline-block", paddingBottom: 60 }} className="emphatic">
            A way for consumers to give feedback and for developers to process and respond to it.
        </div>

          <img src={Cover} alt="Project cover image" width={WIDTH} ></img>

          <div style={tableContainer}>
            <div style={table}>
              <div style={tableCol}>
                <div className="subheading" >My Role</div>
                <div className="body" > Design lead</div>
                <div className="body" > Focus: developer-facing web platform</div>
              </div>
              <div style={tableCol}>
                <div className="subheading" >Team</div>
                <div className="body" ><u>Developers</u>: Omar Rasheed, Yana Sang, Cameron Russell</div>
                <div className="body" ><u>Designers</u>: Gracie Jing, Ravina Patel (me)</div>
              </div>
              <div style={tableCol}>
                <div className="subheading" >Duration</div>
                <div className="body" >2 months</div>
              </div>
            </div>
          </div>
        </div>

        {/* Background */}
        <div style={section}>
          <div className="heading" style={{ color: COLOR }}>Background</div>
          <div className="body">
            As a developer or designer, getting feedback about your product’s
            performance is critical to keeping up with the needs of the users
            and satisfying customers. This problem exists with any digital
            product, so why should features solving this problem have to be
            built out for every product? Our team set out to create a solution
            that we could easily use to get and organize feedback across all of
            our apps.
          </div>
        </div>

        {/* Research */}

        {/* a. Market research */}
        {/* b. User research */}
        <div style={section}>
          <div className="emphatic" style={{ color: "#000" }}>
            <b>Why do people give feedback?</b>
          </div>

          <div className="body">
            Spoke to consumers: what do they give feedback on? Do they ever give
            feedback? Why or why not?
          </div>
        </div>

        <div style={section}>
          <div className="emphatic" style={{ color: "#000" }}>
            <b>Why do people want feedback?</b>
          </div>

          <div className="body">
            Spoke to developers: how do they currently get feedback? What do they
            wish to do with feedback? Are they able to accomplish that?
          </div>
        </div>


        {/* Problem */}

        <div style={section}>
          <div className="heading" style={{ color: COLOR }}>Problem</div>

          <div className="body">
            According to our two user groups (developers and consumers), we
            we defined two people problems. My role in the project was for the
            developer-facing platform, so I will focus more on the first problem:
          </div>

          <div className="emphaticBlockSection">
            When developers get feedback from users about their product, they
            want to easily process and respond to requests. They can’t do that
            because the communication they receive is unorganized, and it is
            difficult to contact users that experience issues.
          </div>

          <div className="emphaticBlockSection">
            When consumers use apps, they want to offer their input to creators,
            but they don't because it takes too long, and they feel like their
            voice isn't heard.
          </div>
        </div >

        {/* Building the Solution */}
        <div style={section}>
          <div className="heading" style={{ color: COLOR }}>Building the Solution</div>
          <div className="body" >
            My research shows that people want to continue learning and growing even
            after they are content with their work.
            <br></br> <br></br>
            Exceed delivers a curated feed of content that makes it easy and fun
            to learn between busy schedules. Its onboarding process makes the content
            and learning experience personalized to your interests, goals, and needs.

          </div>
        </div>

        {/* <div style={section}>
          <img src={solutionCover} alt="" width={"100%"} style={{ display: "block" }}></img>
        </div> */}

        {/* 01. Time */}
        <div style={section}>
          <div style={tableContainer}>
            <img src={timeIcon} alt="" style={{ display: "block", paddingBottom: 20 }}></img>
            <div className="subheading" style={{ color: GREY }}>Visual Design</div>
            <div className="emphatic"><b>Fitting into a tight schedule</b></div>
            <div style={table}>
              <div style={tableCol}>
                <div >
                  <div className="body" >
                    Through user and market research, I chose three media types that were
                    conducive to short time budgets: video, audio, and text.
                  </div>
                </div>
              </div>
              <div style={tableColFinal}>
                <img src={processTypes} alt="Specify interests in onboarding" width={"100%"} ></img>
              </div>
            </div>
          </div>
        </div>

        <div style={section}>
          <div style={tableContainer}>
            <div style={table}>
              <div style={tableCol}>
                <img src={processCard} alt="Specify interests in onboarding" width={"100%"} ></img>
              </div>
              <div style={tableColFinal}>
                <div >
                  <div className="body" style={{ paddingTop: 10 }}>
                    I <b>emphasized the watch or read time</b> of content to encourage users
                  to consume content that fits with their time.
                </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div style={section}>
          <div style={tableContainer}>
            <div style={table}>
              <div style={tableCol}>
                <div >
                  <div className="body" style={{ paddingTop: 10 }}>
                    Users can <b>save content for later</b>, and jot down notes as they watch or listen.
                  This way, they can easily pick up where they left off.
                </div>
                </div>
              </div>
              <div style={tableColFinal}>
                <img src={processSave} alt="Specify interests in onboarding" width={"100%"} ></img>
              </div>
            </div>
          </div>
        </div>


        {/* 02. Discovery */}
        <div style={section}>
          <div style={tableContainer}>
            <img src={exploreIcon} alt="" style={{ display: "block", paddingBottom: 20 }}></img>
            <div className="subheading" style={{ color: GREY }}>Iterations</div>
            <div className="emphatic"><b>Encouraging targetted search</b></div>
            <div style={table}>
              <div style={tableCol}>
                <div >
                  <div className="body">
                    I went through a few interations for the Search entry point. User
                    research showed that people struggled to find tools to learn specific
                    topics. Therefore, my design goal for the search functionality was to
                    <b> make searching for a topic easy</b>.
                    <br></br><br></br>
                    Originally, I considered embedding a simple search functionality at
                    the top of the home feed (as in iterations A and B). However, this made
                    it difficult to know what to search for. Iteration C allows users
                    to explore topics they're interested in and see trending content. This
                    makes it easier to understand what type of topics they can search for.
                  </div>
                </div>
              </div>
              <div style={tableColFinal}>
                <img src={processExplore} alt="Home and events pages" width={"100%"} ></img>
              </div>
            </div>
          </div>
        </div>

        {/* 03. Motivation */}
        <div style={section}>
          <div style={tableContainer}>
            <img src={motivationIcon} alt="" style={{ display: "block", paddingBottom: 20 }}></img>
            <div className="subheading" style={{ color: GREY }}>Copy</div>
            <div className="emphatic"><b>Stay motivated</b></div>
            <div style={table}>
              <div style={tableCol}>
                <div >
                  <div className="body">
                    Set weekly goals and earn achievements as you progress. A central
                    issue I found through user research was that people thought they
                    needed to dedicate much more time than necessary to learning, and
                    thus they fell short. I used copy to <b>encourage setting attainable
                    goals</b> during onboarding.
                    <br></br> <br></br>
                    In order to sustain motivation, users earn achievements as they
                    learn more with Exceed. They are rewarded for several actions, such as
                    consistent learning and the amount of content consumed. The number of
                    topics learned is displayed at the top of the page, as a reminder of
                    the user's progress and motivation to increase the number by learning
                    more.
                  </div>
                </div>
              </div>
              <div style={tableColFinal}>
                <img src={motivation} alt="Set goals and earn achievements" width={"100%"} ></img>
              </div>
            </div>
          </div>
        </div>

        {/* 04. Interests */}
        <div style={section}>
          <div style={tableContainer}>
            <img src={crossIcon} alt="" style={{ display: "block", paddingBottom: 20 }}></img>
            <div className="subheading" style={{ color: GREY }}>Onboarding</div>
            <div className="emphatic"><b>Accomadating cross-industrial interests</b></div>
            <div style={table}>
              <div style={tableCol}>
                <div >

                  <div className="body" >
                    In order to allow users to continue to grow in each of their non-industry
                    conforming interests, I decided to collect their interests during onboarding.
                    These will be used to curate their feeds.
                  <br></br> <br></br>
                    <b>Interaction note: </b> As users select interests, additional similar
                  interests show up.
                </div>
                </div>
              </div>
              <div style={tableColFinal} >
                <img src={interests} alt="Specify interests in onboarding" width={"70%"} ></img>
              </div>
            </div>
          </div>
        </div>

        {/* Final Designs */}
        {/* <div className="heading" style={{ color: COLOR, width: WIDTH, marginLeft: PADDING, marginRight: PADDING }}>Final Designs</div> */}

        <div style={section}>
          <div className="heading" style={{ color: COLOR, paddingBottom: 20 }}>Final Designs</div>
          <img src={finalCover} alt="" width={"100%"} style={{ display: "block" }}></img>
        </div>

        {/* Curated content */}
        <div style={section}>
          <div style={tableContainer}>
            <div style={table}>
              <div style={tableCol}>
                <div>
                  <div className="heading">01</div>
                  <div className="emphatic"><b>Curated content</b></div>
                  <div className="body">
                    A personalized feed of content and events to learn and grow from,
                    based on a user's interests. Content is either video, audio, or text
                    that can be easily consumed on-the-go.
                  </div>
                </div>
              </div>
              <div style={tableColFinal}>
                <img src={content} alt="Home and events pages" width={"100%"} ></img>
              </div>
            </div>
          </div>
        </div>

        {/* Discovery */}
        <div style={section}>
          <div style={tableContainer}>
            <div style={table}>
              <div style={tableCol}>
                <img src={personalization} alt="Home and events pages" width={"100%"} ></img>
              </div>
              <div style={tableColFinal}>
                <div >
                  <div className="heading">02</div>
                  <div className="emphatic"><b>Built for discovery</b></div>
                  <div className="body">
                    Search for any subject or explore content related
                    to a specific topic of interest. See what's trending if you don't know
                    where to start!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Saving */}
        <div style={section}>
          <div style={tableContainer}>
            <div style={table}>
              <div style={tableCol}>
                <div >
                  <div className="heading">03</div>
                  <div className="emphatic"><b>Save lists and notes for later</b></div>
                  <div className="body">
                    Save interesting content for later, and jot down thoughts at any time. All
                    saved content and notes are collected into My List for easy access.
                  </div>
                </div>
              </div>
              <div style={tableColFinal}>
                <img src={time} alt="Save content and ideas for later" width={"100%"} ></img>
              </div>
            </div>
          </div>
        </div>

        {/* Reflection */}
        <div style={section}>
          <div className="heading" style={{ color: COLOR }}>Reflection</div>
          <div className="body" style={{ width: isSmallScreen ? "100%" : "70%" }}>
            Working on this projects was really exciting because the target user demographic
            was completely different from myself and my usual circle. I had to rely fully
            on user interviews and research to put myself in the shoes of the user.
          <br></br>
            <br></br>
          The 5-day time constraint also pushed me to research, ideate, and build quickly.
          I followed used Google's design sprint framework to work through the problem.
          <br></br>
            <br></br>
            <b>Next Steps</b>
            <br></br>
          If I were to continue working on this project, I would like to conduct A/B testing
          to quantify the effects of the design system on the target audience. Based on the
          collected data, I could continue to refine the visual design.
        </div>
        </div>




        <div style={{ display: "inline-block", paddingTop: SECTION_SPACING }}><Gallery cols={props.chooseMoreData(uxData, ID).length} totalWidth="800" data={props.chooseMoreData(uxData, ID)} msg="check out another case study!"></Gallery></div>

      </div>
    </FadeIn >
  );
}

export default App;
