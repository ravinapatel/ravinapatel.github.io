import React from 'react';
import BlockQuote from "../../Components/case_study_components/blockQuote";
import Intro from "../../Components/case_study_components/intro";
import Cover from "../../Images/portfolio/ux/snap-banner.png";
import CoverBackground from "../../Images/portfolio/ux/snap-banner-background.png";
import Title from "../../Images/portfolio/ux/title.png";
import { ParallaxBanner } from 'react-scroll-parallax';
import Gallery from "../../Components/Gallery";
import uxData from "../../Data/uxData.json";



// Case study on Snapchat's Discover page

// STYLING
const COLOR = "#AC65F1"
const SMALL_WIDTH = "50%"
const BIG_WIDTH = "75%"
const SECTION_SPACING = 100
const ID = "snap"       // must match id in uxData

const contentStyle = {
  textAlign: "center",
}

const smallSection = {
  display: "inline-block",
  paddingBottom: SECTION_SPACING,
  padding: SECTION_SPACING,
  width: SMALL_WIDTH
}

const bigSection = {
  display: "inline-block",
  paddingBottom: SECTION_SPACING,
  padding: SECTION_SPACING,
  width: BIG_WIDTH
}

// CONTENTS
const introData = [
  {
    title: "My Role",
    body: "UX Researcher, UI Designer, Motion Designer",
  },
  {
    title: "My Team",
    body: "Riya Singh, Aarushi Parashar, Tushar Khan",
  },
  {
    title: "Timeline",
    body: "2 years",
  },
];

// RENDERING
function Eatery(props) {

  return (
    <div style={contentStyle}>
      <ParallaxBanner
        className="your-class"
        layers={[
          {
            image: CoverBackground,
            amount: 0.9,
          },
          {
            image: Title,
            amount: 0.3,
          },
        ]}
        style={{
          height: '500px',
        }}
      >
      </ParallaxBanner>

      {/* <img src={Cover} alt="Eatery cover image" width="100%"></img> */}

      <div style={bigSection}>
        <Intro
          tagline="This is what my project is about. This is what my project is 
          about. This is what my project is about. This is what my project is about. "
          specData={introData}
        ></Intro>
      </div>

      <div style={smallSection}>
        <div className="heading" style={{ color: "#000" }}>Background</div>
        <div className="body">
          People love to discover new content. We scroll through social media and stare at screens for hours to watch other people’s stuff.
          Yet, people find Snapchat’s For You section overwhelmingly “annoying” because:
          <ol>
            <li>
              The discover stories don’t align with their interests
            </li>
            <li>
              They have no way of telling Snapchat exactly what they want to see
            </li>
          </ol>
          How might Snapchat show people new content that they’re interested in?

        </div>
      </div>

      <div style={smallSection}>
        <div className="heading" style={{ color: COLOR }}>Research</div>
        <div className="body">
          I set out to understand why people don’t use the Discover page to discover new content.
          My main takeaways from user interviews were:
          <ol>
            <li>
              People like watching what they’re already interested in
              <br></br>
              “I use it for interests like sports or music”
            </li>
            <li>
              People use the Friends section to stay engaged with what their friends are up to
              <br></br>
              “I watch stories to keep up with friends’ shenanigans”
            </li>
          </ol>
          I found that the problem was with the content of stories and their social elements, rather than with their ordering as I originally hypothesized.
        </div>
      </div>

      <div style={smallSection}>
        <BlockQuote
          color={COLOR}
          text="People want to find interesting media to share with friends,
            but they can’t because Snapchat does not know what users are interested
            in and Discover stories don’t foster social interactions."
        ></BlockQuote>
      </div>

      <div style={smallSection}>
        <div className="heading" style={{ color: COLOR }}>Ideation</div>
        <div className="body">
          With two of my friends, I set out to find possible solutions to the new
          people problem. We came down to two main opportunity areas:
        <ol>
            <li>
              Bringing content users want — How might we understand people’s interests?
          </li>
            <li>
              Making Discover social — How might we increase and improve interaction between users?
          </li>
          </ol>
          Hundreds of sticky notes later, I narrowed down the solutions to two main ideas
          <ol>
            <li>
              Public Group Stories — create stories related to a specific interest that users can join
          </li>
            <li>
              Local Connections — connect nearby people with similar interests
          </li>
          </ol>
          Based on current Snapchat stories and the geomap, both ideas seemed to
          be quite feasible for Snapchat. It then came down to which solution better
          addressed my people problem. Public Group Stories would bring users
          interesting content and promote social interaction. Local Connections
          would increase user interaction, but it would not immediately deliver
          interesting content. Since Public Group Stories better solved the problem,
          I decided to move forward with this idea.
        </div>
      </div>

      <div style={smallSection}>
        <div className="heading" style={{ color: COLOR }}>Solution</div>
        <div className="body">
          I decided to move forward with Public Group Stories and re-branded
          the feature to be Snap Cliques! For this feature, there were many
          flows necessary to create a cohesive feature:
            <ul>
            <li>Posting to a clique</li>
            <li>Joining a clique</li>
            <li>Suggesting a clique to a friend</li>
            <li>Seeing information about a clique</li>
          </ul>
            I organized these flows in the following diagram:
            <br></br>
            I used this model to create my initial low-fidelity sketches:

      </div>
      </div>
      <div style={smallSection}>
        <div className="emphatic" style={{ color: "#000" }}>What do people want to know before joining a clique?</div>
        <div className="body">
          A few other platforms have similar features. They tend to include the
          group name, description, preview picture, and Join or Open button. For
          Snap Cliques, I included each of those key elements.
          <br></br>
          <br></br>
          However, most of these platforms use groups for personal exploration,
          while Snap Cliques is meant to foster social interaction. Therefore, I
          looked to social platforms like Instagram accounts and Facebook pages.
          I found that showing friends’ activity and allowing users to share posts
          were common ways to increase interpersonal engagement.

          When I conducted user testing, I displayed the following content:
          <ol>
            <li>Description of the clique</li>
            <li>Friends in the clique</li>
            <li>Icon for the clique</li>
          </ol>
          and the following features:
          <ol>
            <li>Suggest the clique to a friend</li>
            <li>Join the clique</li>
          </ol>
          During interviews, I found that many people wanted to see some posts
           in a clique before joining. This prompted me to add a Preview feature:
          <br></br>
          <br></br>
           I used design A during my user testing. Then I explored two options for
            enabling people to preview a clique. There was a high demand for the
             feature, so in B I made an explicit button for it. In C, I replaced
              the button with the purple ring for watching stories. Since this icon
               is very authentic to Snapchat, I felt that it was sufficiently clear.
                So, I went with C because it maximizes clarity with authenticity.
        </div>

      </div>

      <div style={{ display: "inline-block", paddingTop: SECTION_SPACING }}><Gallery cols={props.chooseMoreData(uxData, ID).length} totalWidth="800" data={props.chooseMoreData(uxData, ID)} msg="check out another case study!"></Gallery></div>

    </div>
  );
}

export default Eatery;
