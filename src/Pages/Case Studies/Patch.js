import React from 'react';

import Gallery from "../../Components/Gallery";
import BlockQuote from "../../Components/case_study_components/blockQuote";
import uxData from "../../Data/uxData.json";
import useWindowSize from "../../Components/useWindowSize";
import FadeIn from 'react-fade-in';
import './CaseStudy.css';

// IMAGES
import Cover from "../../Images/portfolio/ux/patch/laptop-mockup.jpg";
import finalCover from "../../Images/portfolio/ux/patch/solution-cover.png";

import organize from "../../Images/portfolio/ux/patch/organization.png";
import manyApps from "../../Images/portfolio/ux/patch/many-apps.png";
import chat from "../../Images/portfolio/ux/patch/two-way.png";


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
    marginBottom: 30,
    width: WIDTH
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
          <div style={{ width: !isSmallScreen ? 400 : "", textAlign: "center", display: "inline-block", paddingBottom: 60 }} className="emphatic">
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
                <div className="body" ><b>Developers</b>: Omar Rasheed, Yana Sang, Cameron Russell</div>
                <div className="body" ><b>Designers</b>: Gracie Jing (mobile), Me (web)</div>
              </div>
              <div style={tableColFinal}>
                <div className="subheading" >Duration</div>
                <div className="body" >2 months</div>
              </div>
            </div>
          </div>

          <div className="body">
            <em>NOTE: This case study is in progress, but here is a general summary
              of the process and final product.
              <br></br>(
              <a href="mailto: rpp62@cornell.edu" target="_blank"><div style={{ color: "#ababab", display: "inline-block" }}>contact me</div></a> for details)</em>

          </div>

        </div>

        {/* Background */}
        <div style={section}>
          <div className="heading" style={{ color: COLOR }}>Background</div>
          <div className="body">
            As a developer or designer, getting feedback about your product’s
            performance is critical to keeping up with the needs of the users
            and satisfying customers. This problem exists with any digital
            product, so why should each product have to re-solve the same
            problem? Our team set out to create a solution to this problem
            that would be easy to integrate with existing products.
          </div>
        </div>

        {/* Research */}
        <div style={section}>
          <div className="heading" style={{ color: COLOR }}>Defining the Problem</div>
          <div className="body">
            The feedback problem space is complex because it involves both the
            consumers of any app and the developers. Both of these user
            groups have different motivations and goals when approaching
            feedback, so we conducted separate interviews to define the people
            problem for each group.
          </div>
        </div>

        {/* Consumer Research */}
        <div style={section}>
          <div className="subheading" style={{ color: GREY }}>Consumers</div>
          <div className="emphatic" style={{ color: "#000" }}>
            <b>Why do people give feedback?</b>
          </div>
          <div className="body">
            We conducted some interviews with people of various ages and
            backgrounds about their experiences giving feedback on mobile
            and web applications. Some key insights from our interviews were:
            <ol>
              <li>Consumers don’t care enough about giving feedback to go
                through the steps it takes.</li>
              <li>They feel like giving their ideas, but they feel like their
                voices are not heard.</li>
              <li>The main types of feedback that consumers would give are for
                bugs, customer service, and feature requests.</li>
            </ol>
            Based on these insights, we formulated the following consumer people problem:
          </div>

          <div className="emphaticBlockSection">
            When consumers use apps, they want to offer their input to creators,
            but they don't because it takes too long, and they feel like their
            voice isn't heard.
          </div>
        </div>

        {/* Developer Research */}
        <div style={section}>
          <div className="subheading" style={{ color: GREY }}>Developers</div>
          <div className="emphatic" style={{ color: "#000" }}>
            <b>Why do people want feedback?</b>
          </div>
          <div className="body">
            We also interviewed app developers to understand their goals related
            to feedback, and what activities they currently do in order to achieve
            these goals. Some key insights from our interviews were:
            <ol>
              <li>Developers want to provide assistance to their users when
                users request it.</li>
              <li>Developers sometimes want to follow up on bug reports to get
                a better understanding of what went wrong.</li>
              <li>Developers struggle with organizing all the reports on their own.</li>
              <li>Third-party products that provide customer service
                functionalities are often costly or they don’t match the app UI.</li>
            </ol>
            Based on these insights, we formulated the following consumer people problem:
          </div>

          <div className="emphaticBlockSection">
            When developers get feedback from users about their product, they
            want to easily process and respond to requests. They can’t do that
            because the communication they receive is unorganized, it is
            difficult to follow up with users, and third-party products don’t
            fit in with their UI.
          </div>

        </div>

        {/* The Solution */}
        <div style={section}>
          <div className="heading" style={{ color: COLOR }}>The Solution</div>
          <div className="body" >
            We moved forward with an iOS plugin that allows users to give feedback,
            along with a web app that allows developers to receive and respond to
            feedback.
            <br></br><br></br>
            The iOS plugin makes it easy for developers to add our product onto
            their existing projects, and it allows them to customize our features to
            blend seamlessly with their own branding. The web app allows developers
            to easily manage and organize their responses for any number of projects
            on a device that they already use in their workflow.
            <br></br><br></br>
            My role was working on the web application, so I will focus on those
            designs moving forward.

          </div>
        </div>

        <div style={section}>
          <img src={finalCover} alt="" width={"100%"} style={{ display: "block" }}></img>
        </div>

        {/* Organization */}
        <div style={section}>
          <div style={tableContainer}>
            <div style={table}>
              <div style={tableCol}>
                <div>
                  <div className="heading">01</div>
                  <div className="emphatic"><b>Easy organization</b></div>
                  <div className="body">
                    All feedback is categorized into one of three categories: Bug reports,
                    Customer service, or Feature requests, and each report can
                    have additional tags describing the type of issue. This organization,
                    along with the large search area at the top, makes it easy for developers
                    to organize and sort their incoming reports.
                  </div>
                </div>
              </div>
              <div style={tableColFinal}>
                <img src={organize} alt="Organization" width={"100%"} ></img>
              </div>
            </div>
          </div>
        </div>

        {/* Communication */}
        <div style={section}>
          <div style={tableContainer}>
            <div style={table}>
              <div style={tableCol}>
                <img src={chat} alt="Chat with consumers" width={"100%"} ></img>
              </div>
              <div style={tableColFinal}>
                <div >
                  <div className="heading">02</div>
                  <div className="emphatic"><b>Communicate with consumers</b></div>
                  <div className="body">
                    Easily respond to customer reports with Patch.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Multiple apps */}
        <div style={section}>
          <div style={tableContainer}>
            <div style={table}>
              <div style={tableCol}>
                <div >
                  <div className="heading">03</div>
                  <div className="emphatic"><b>Manage multiple projects</b></div>
                  <div className="body">
                    Many developers work on or maintain several projects
                    at a time. Patch easily fits into this workflow by allowing users
                    to switch between apps at any time.
                  </div>
                </div>
              </div>
              <div style={tableColFinal}>
                <img src={manyApps} alt="Switch between apps" width={"100%"} ></img>
              </div>
            </div>
          </div>
        </div>

        {/* Reflection */}
        <div style={section}>
          <div className="heading" style={{ color: COLOR }}>Reflection</div>
          <div className="body" style={{ width: isSmallScreen ? "100%" : "70%" }}>
            This project was really exciting for me because it was a bunch of
            “firsts” for me. It was my first time:
            <ul>
              <li>balancing two very different, yet equally important user groups</li>
              <li>being a design lead</li>
              <li>working across two platforms (web and mobile)</li>
            </ul>
            Facing all of these challenges allowed me to grow significantly. I
            became comfortable with more complex challenges involving multiple
            products and user groups. Being a design lead pushed me to be on top
            of creating designs for every edge case, learn how to effectively
            hand-off designs to developers, and simultaneously manage a junior
            designer in my team and support her personal design goals and interests.
            <br></br><br></br>
            If I continued on this project, I would want to implement a few more
            features that would make it easier for developer teams to process
            feedback tickets. Some ideas we had in the queue were a way to
            prioritize certain tickets and a way for an admin to assign tickets
            to other team members. These ideas were both very feasible and would
            have a high impact in the organization of a team, but we were not able
            to get them done in time for the MVP.

          </div>
        </div>




        <div style={{ display: "inline-block", paddingTop: SECTION_SPACING }}><Gallery cols={props.chooseMoreData(uxData, ID).length} totalWidth="800" data={props.chooseMoreData(uxData, ID)} msg="check out another case study!"></Gallery></div>

      </div>
    </FadeIn >
  );
}

export default App;
