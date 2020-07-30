import React from 'react';
import BlockQuote from "../../Components/case_study_components/blockQuote";
import Cover from "../../Images/portfolio/ux/snap-banner.png";
import image from "../../Images/portfolio/graphic-design/Ravina.jpg";
import Gallery from "../../Components/Gallery";
import uxData from "../../Data/uxData.json";
import useWindowSize from "../../Components/useWindowSize";
import './CaseStudy.css';


// Case study on Snapchat's Discover page

// RENDERING
function Eatery(props) {

  // RESPONSIVENESS
  const window = useWindowSize();
  var isBigScreen = window.width > 900
  var isMediumScreen = window.width < 900
  var isSmallScreen = window.width < 700

  // STYLING
  const COLOR = "#AC65F1"
  const WIDTH = isBigScreen ? 800 : "90%"
  const SECTION_SPACING = 50
  const ID = "TODO"       // must match the project id in uxData

  const contentStyle = {
    textAlign: "center",
  }

  const section = {
    display: "inline-block",
    paddingBottom: SECTION_SPACING,
    paddingTop: SECTION_SPACING,
    width: WIDTH
  }
  const tableContainer = {
    display: "inline-block",
    marginTop: 30,
    marginBottom: 30
  }
  const table = {
    MsFlex: 1,  /* IE 10 */
    display: "flex",
    width: WIDTH
  }
  const tableCol = {
    flex: 1,
    paddingRight: 50
  }
  const tableColFinal = {
    flex: 1,
  }

  return (
    <div style={contentStyle}>
      {/* Intro */}
      <div style={section}>
        <div style={{ width: 400, textAlign: "center", display: "inline-block", paddingBottom: 60 }} className="emphatic">
          This is a template with all the components to use when writing a case study
        </div>

        <img src={Cover} alt="" width={WIDTH} ></img>

        <div style={tableContainer}>
          <div style={table}>
            <div style={tableCol}>
              <div className="subheading" >My Role</div>
              <div className="body" >blah blah blah</div>
            </div>
            <div style={tableCol}>
              <div className="subheading" >Team</div>
              <div className="body" >blah blah blah</div>
            </div>
            <div style={tableColFinal}>
              <div className="subheading" >Duration</div>
              <div className="body" >blah blah blah</div>
            </div>
          </div>
        </div>
      </div>

      {/* Image + Text */}
      <div style={section}>
        <div style={{ display: isSmallScreen ? "block" : "flex" }}>
          <div style={{ paddingRight: isSmallScreen ? 0 : 60, paddingBottom: isSmallScreen ? 60 : 0 }}>
            <div className="heading">01</div>
            <div className="heading">Cool thing about this</div>
            <div className="body">People love to discover new content. We scroll through social media and stare at screens for hours to watch other people’s stuff.
          Yet, people find Snapchat’s For You section overwhelmingly “annoying” because</div>
          </div>
          <img src={image} alt="image" width={300} ></img>
        </div>
      </div>

      {/* Image + Text */}
      <div style={section}>
        <div style={{ display: isSmallScreen ? "block" : "flex" }}>
          <img src={image} alt="image" width={300} ></img>
          <div style={{ paddingLeft: isSmallScreen ? 0 : 60, paddingTop: isSmallScreen ? 60 : 0 }}>
            <div className="heading">01</div>
            <div className="heading">Cool thing about this</div>
            <div className="body">People love to discover new content. We scroll through social media and stare at screens for hours to watch other people’s stuff.
          Yet, people find Snapchat’s For You section overwhelmingly “annoying” because</div>
          </div>
        </div>
      </div>

      {/* Heading + Text */}
      <div style={section}>
        <div className="heading" style={{ color: COLOR }}>Ways to emphasize text</div>
        <div className="body">
          <b>Use b tags to bold text</b> within a `body` div. People love to discover new content. We scroll through social media and stare at screens for hours to watch other people’s stuff.
          Yet, people find Snapchat’s For You section overwhelmingly “annoying” because:
        </div>

        {/* Emphatic Block Text (without background) */}
        <div className="emphaticBlockText">
          How might we solve this incredibly complex problem with an intuitive and enjoyable experience?
        </div>

        <div className="body">
          People love to discover new content. We scroll through social media and stare at screens for hours to watch other people’s stuff.
          Yet, people find Snapchat’s For You section overwhelmingly “annoying” because:
        </div>

        {/* BlockQuote */}
        <BlockQuote
          color={COLOR}
          text="People want to find interesting media to share with friends,
            but they can’t because Snapchat does not know what users are interested
            in and Discover stories don’t foster social interactions."
        ></BlockQuote>

        <div className="body">
          People love to discover new content. We scroll through social media and stare at screens for hours to watch other people’s stuff.
          Yet, people find Snapchat’s For You section overwhelmingly “annoying” because:
        </div>

        {/* Emphatic Block Section (with background) */}
        <div className="emphaticBlockSection">
          How might we solve this incredibly complex problem with an intuitive and enjoyable experience?
        </div>
      </div>

      {/* Heading + Text */}
      <div style={section}>
        <div className="heading" style={{ color: COLOR }}>Lists</div>
        <div className="body">
          I set out to understand why people don’t use the Discover page to discover new content.
          My main takeaways from user interviews were:

        {/* Numbered List */}
          <ol>
            <li>
              People like watching what they’re already interested in
              <br></br>
              Use a <b> line break </b> to start a new line in a list item
            </li>
            <li>
              Otherwise, here's a normal item
            </li>
            <li>
              And here's another
            </li>
          </ol>
        </div>

        {/* Columns of Text */}
        <div style={tableContainer}>
          <div style={table}>
            <div style={tableCol}>
              <div className="subheading" >My Role</div>
              <div className="body" >
                Public Group Stories would bring users
                interesting content and promote social interaction. Local Connections
                would increase user interaction, but it would not immediately deliver
                interesting content. Since Public Group Stories better solved the problem,
                I decided to move forward with this idea.
                </div>
            </div>
            <div style={tableCol}>
              <div className="subheading" >Team</div>
              <div className="body" >
                Public Group Stories would bring users
                interesting content and promote social interaction. Local Connections
                would increase user interaction, but it would not immediately deliver
                interesting content. Since Public Group Stories better solved the problem,
                I decided to move forward with this idea.
                </div>
            </div>
            <div style={tableCol}>
              <div className="subheading" >Duration</div>
              <div className="body" >
                Public Group Stories would bring users
                interesting content and promote social interaction. Local Connections
                would increase user interaction, but it would not immediately deliver
                interesting content. Since Public Group Stories better solved the problem,
                I decided to move forward with this idea.
              </div>
            </div>
          </div>
        </div>

        <div className="body">
          I set out to understand why people don’t use the Discover page to discover new content.
          My main takeaways from user interviews were:

          {/* Bulleted List */}
          <ul>
            <li>Posting to a clique</li>
            <li>Joining a clique</li>
            <li>Suggesting a clique to a friend</li>
            <li>Seeing information about a clique</li>
          </ul>

          {/* Bulleted List */}
          <div className="bulletList">
            <ul className="dashed">
              <li>Posting to a clique</li>
              <li>Joining a clique</li>
              <li>Suggesting a clique to a friend</li>
              <li>Seeing information about a clique</li>
            </ul>
          </div>
        </div>




      </div>

      <div style={{ display: "inline-block", paddingTop: SECTION_SPACING }}><Gallery cols={props.chooseMoreData(uxData, ID).length} totalWidth="800" data={props.chooseMoreData(uxData, ID)} msg="check out another case study!"></Gallery></div>

    </div >
  );
}

export default Eatery;
