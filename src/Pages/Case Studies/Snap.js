import React from 'react';
import BlockQuote from "../../Components/case_study_components/blockQuote";
import Gallery from "../../Components/Gallery";
import uxData from "../../Data/uxData.json";
import FadeIn from 'react-fade-in';
import useWindowSize from "../../Components/useWindowSize";
import './CaseStudy.css';

// IMAGES
import Cover from "../../Images/portfolio/ux/snap-banner.png";
import currentDiscover from "../../Images/portfolio/ux/snap/current-discover.PNG";
import quotes from "../../Images/portfolio/ux/snap/quotes.png";
import trendsInsights from "../../Images/portfolio/ux/snap/trends-insights.png";
import brainstorming from "../../Images/portfolio/ux/snap/brainstorming.png";
import ideas from "../../Images/portfolio/ux/snap/ideas.png";
import mockup from "../../Images/portfolio/ux/snap/mockup.jpg";
import infoCard from "../../Images/portfolio/ux/snap/info-card.png";
import iterations from "../../Images/portfolio/ux/snap/iterations.png";
import cliquesSection from "../../Images/portfolio/ux/snap/cliques-section.png";
import finalFlow from "../../Images/portfolio/ux/snap/final-flow.png";


// Case study on Snapchat's Discover page

// RENDERING
function App(props) {

  // RESPONSIVENESS
  const window = useWindowSize();
  var isBigScreen = window.width > 900
  var isMediumScreen = window.width < 900
  var isSmallScreen = window.width < 700

  // STYLING
  const COLOR = "#AC65F1"
  const GREY = "#9a9a9a"
  const WIDTH = isBigScreen ? 800 : "90%"
  const PADDING = (window.width - WIDTH) / 2
  const SECTION_SPACING = 50
  const ID = "snap"       // must match the project id in uxData

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
  const link = {
    color: "#ababab",
    textDecoration: "none",
    cursor: "pointer"
  }

  return (
    <FadeIn transitionDuration="500">
      <div style={contentStyle}>

        {/* Intro */}
        <div style={section}>
          <div style={{ width: !isSmallScreen ? 400 : "", textAlign: "center", display: "inline-block", paddingBottom: 60 }} className="emphatic">
            Discover and share more content related to your interests.
          </div>

          <img src={Cover} alt="" width={WIDTH} ></img>

          <div style={tableContainer}>
            <div style={table}>
              <div style={tableCol}>
                <div className="subheading" >My Roles</div>
                <div className="body" >User research, UI design, Prototyping, User testing</div>
              </div>
              <div style={tableColFinal}>
                <div className="subheading" >Timeline</div>
                <div className="body" >Spring 2019, 4 months</div>
              </div>
            </div>
          </div>
        </div>

        {/* Background */}
        <div style={section}>
          <div className="heading" style={{ color: COLOR }}>Background</div>
          <div className="body" style={{ width: isSmallScreen ? "100%" : "70%" }}>
            People love to discover new content. We scroll through social media and
            stare at screens for hours to watch other people’s stuff. Yet, people
            find Snapchat’s For You section overwhelmingly “annoying” because:
            <ol>
              <li>
                The discover stories don’t align with their interests
              </li>
              <li>
                They have no way of telling Snapchat exactly what they want to see
              </li>
            </ol>
          </div>

          <div className="emphaticBlockSection" style={{ width: "80%" }}>
            How might we show people new content that they’re interested in?
          </div>
        </div>

        {/* Research */}
        <div style={section}>
          <div style={tableContainer}>
            <div className="heading" style={{ color: COLOR }}>Research</div>
            <div style={table}>
              <div style={tableCol}>
                <div className="emphatic" style={{ color: "#000" }}><b>Why don't people discover on the Discover page?</b></div>
                <div className="body">
                  I set out to understand why people don’t use the Discover page to
                  discover new content. I conducted user interviews with several Snapchat
                  users of various backgrounds and uses for the app.
                  <br></br><br></br>
                  The goals for the interviews were to find out what people expect
                  from the Discover page, and to understand what parts of the page
                  people tend to use or ignore.
                </div>
              </div>

              <div style={tableCol}>
                <img src={currentDiscover} alt="Market research" width={"60%"} ></img>
                <p style={{ textAlign: "center", color: GREY }}>Current Discover page design</p>
              </div>
            </div>
          </div>
        </div>

        <div style={section}>
          <div style={tableContainer}>
            <div style={table}>
              <div style={tableCol}>
                <img src={quotes} alt="" width={"100%"} ></img>
              </div>
              <div style={tableCol}>
                <div className="emphatic">
                  I found that the problem was with the content of stories and their
                  social elements, rather than with their ordering as I originally hypothesized.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Problem Synthesis */}
        <div style={section}>
          <div className="heading" style={{ color: COLOR, paddingBottom: 40 }}>Problem Synthesis</div>

          <div className="body" style={{ width: isSmallScreen ? "100%" : "70%", paddingBottom: 40 }}>
            I found summarized my findings from user research with the following
            trends v. insights table in order to define the problem.
          </div>
          <img src={trendsInsights} alt="" width={"90%"} ></img>

          <div className="emphaticBlockSection" style={{ marginTop: 60 }}>
            People want to find interesting media to share with friends, but they
            can’t because Snapchat does not know what users are interested in and
            Discover stories don’t foster social interactions.
          </div>
        </div >

        {/* Ideating */}
        <div style={section}>
          <div className="heading" style={{ color: COLOR }}>Ideating</div>

          <div style={tableContainer}>
            <div style={table}>
              <div style={tableCol}>
                <div className="body" >
                  I asked two of my friends to join my brainstorming session. Coming from different
                  countries and academic focuses, my friends brought new and unique perspectives
                  to our session!
                  <br></br> <br></br>
                  After coming up with over fifty "How might we" questions, we aggregated
                  related questions into six opportunity spaces, and we chose two to further work with:
                  <ul>
                    <li> <b>Bringing content users want:</b> How might we understand people’s interests? </li>
                    <li> <b>Making Discover social:</b> How might we increase and improve interaction between users? </li>
                  </ul>
                </div>
              </div>

              <div style={tableCol}>
                <img src={brainstorming} alt="" width={"100%"} ></img>
              </div>
            </div>
          </div>
        </div>

        <div style={section}>
          <div className="body" style={{ width: isSmallScreen ? "100%" : "70%" }}>
            Then, we brainstormed countless ideas for the chosen opportunity areas. The
            final six ideas were:
          </div>

          <img src={ideas} alt="" width={"100%"} ></img>

          <div className="body" style={{ width: isSmallScreen ? "100%" : "70%" }}>
            Through SWOT analysis and analysing feasibility v. impact for each of the six
            ideas, I decided to go with Snap Cliques because it
            best solved the people problem and had high feasibility.
          </div>
        </div >

        {/* Building the Solution */}
        <div style={section}>
          <div className="heading" style={{ color: COLOR }}>Building the Solution</div>
          <div className="body" >
            Cliques are public group stories that people can join,
            post to, and view. Users can see which cliques their friends are part of
            and share content from cliques. Snap Cliques allows users to easily
            discover and engage with content of interest.
          </div>
        </div>

        {/* Content */}
        <div style={section}>
          <div style={tableContainer}>

            <div className="heading" style={{ color: COLOR }}>Market Research</div>
            <div style={table}>
              <div style={tableCol}>
                <div className="emphatic" ><b>What do people want to know before joining a clique?</b></div>
                <div className="body" >
                  A few other platforms have similar features. They tend to include the
                  group name, description, preview picture, and Join or Open button.
                  For Snap Cliques, I included each of those key elements.
                  <br></br><br></br>
                  However, most of these platforms use groups for personal exploration,
                  while Snap Cliques is meant to foster social interaction. Therefore,
                  I looked to social platforms like Instagram accounts and Facebook pages.
                  I found that showing friends’ activity and allowing users to share posts
                  were common ways to increase interpersonal engagement.
                </div>
              </div>

              <div style={tableColFinal}>
                <img src={infoCard} alt="" width={"80%"} ></img>
              </div>
            </div>
          </div>

          <BlockQuote
            color={COLOR}
            text="I chose content to draw interest in a clique, while providing
                    social cues about which cliques their friends engage with."
          ></BlockQuote>

        </div>

        {/* Visual Design */}
        <div style={section}>
          <div style={tableContainer}>

            <div className="heading" style={{ color: COLOR }}>Visual Design</div>
            <div style={table}>
              <div style={tableCol}>
                <img src={iterations} alt="" width={"100%"} ></img>
              </div>

              <div style={tableColFinal}>
                <div className="body" >
                  I went through many explorations for how to display information about a clique.
                  Snapchat uses both views in its current design. However, I noticed
                  that the view in <b>B</b> is more for miscellaneous capabilities. Since
                  the Info card is meant for more essential information, I decided
                  to go with <b>A</b>.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cliques Section */}
        <div style={section}>
          <div style={tableContainer}>

            <div className="heading" style={{ color: COLOR }}><b>User Testing</b></div>
            <div className="emphatic" ><b>Increasing feature engagement</b></div>
            <div style={table}>
              <div style={tableCol}>
                <div className="body" >
                  My research showed that Snapchat features that were more social
                  were better liked and more frequently used. Therefore, I wanted to
                  suggest cliques that a user's friends are in, in order to increase
                  engagement with the feature.
                  <br></br><br></br>
                  During my user testing, I used layout <b>A</b> but found that many people
                  were confused about what the two rows meant.
                  <br></br><br></br>
                  In explorations <b>B</b>, <b>C</b>, <b>D</b>, and <b>E</b>, I looked at different ways to organize
                  the section within one row. I found <b>B</b> to be the most clear and
                  seamless layout, so conducted a few more tests to see if it would be
                  more intuitive. I found a much better understanding of the difference
                  between your cliques and suggested cliques.
                  <br></br><br></br>
                  However, I also found that everyone used the search bar, rather
                  than the Join a Clique button, so I removed this from the design.

                </div>
              </div>

              <div style={tableColFinal}>
                <img src={cliquesSection} alt="" width={"100%"} ></img>
              </div>
            </div>
          </div>
        </div>


        {/* Final Designs */}
        <div style={section}>
          <div className="heading" style={{ color: COLOR }}>Final Designs</div>

          <img src={mockup} alt="" width={"100%"} style={{ display: "block", paddingBottom: 40 }}></img>

          {/* <img src={finalFlow} alt="" width={"100%"} style={{ display: "block" }}></img> */}

          <iframe src='https://www.youtube.com/embed/XvIjK84NwjU'
            frameborder='0'
            height="500"
            allow='autoplay; encrypted-media'
            allowfullscreen
            title='video'
          />

        </div>

        {/* Reflection */}
        <div style={section}>
          <div className="heading" style={{ color: COLOR }}>Reflection</div>
          <div className="body" style={{ width: isSmallScreen ? "100%" : "70%" }}>
            People are always looking for people to connect with over their interests.
            Many social media apps attempt to create platforms to solve this problem.
            However, Snapchat’s messy, just-woke-up vibe is powerful in its ability
            to encourage users to share anything they create or find. Snap Cliques
            leverages this power to enable people to connect with others over similar
            interests.
            <br></br><br></br>
            Huge thank you to
            <a href="https://www.cornellappdev.com/" style={link} class="text-link"
              target="_blank"> Cornell AppDev</a> and my TA,
            <a href="https://shoshanaswell.com/about" style={link} class="text-link"
              target="_blank"> Shoshana Swell</a>,
            for teaching me about Product Design, and guiding me through this case study!
          </div>
        </div>

        {/* See more case studies */}
        <div style={{ display: "inline-block", paddingTop: SECTION_SPACING }}><Gallery cols={props.chooseMoreData(uxData, ID).length} totalWidth="800" data={props.chooseMoreData(uxData, ID)} msg="check out another case study!"></Gallery></div>

      </div>
    </FadeIn >
  );
}

export default App;
