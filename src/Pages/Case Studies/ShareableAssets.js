import React from 'react';
import Cover from "../../Components/case_study_components/Cover";
import uxData from "../../Data/uxData.json";
import FadeIn from 'react-fade-in';
import ScrollToTop from "../../Components/ScrollToTop";
import useWindowSize from "../../Components/useWindowSize";
import ChooseAnother from "../../Components/ChooseAnother";

// IMAGES
import algorithm from "../../Images/portfolio/ux/shareable-assets/highlights-gradient.png";
import ideaSketch from "../../Images/portfolio/ux/shareable-assets/idea-sketch.png";
// import variation from "../../Images/portfolio/ux/shareable-assets/variation-gif.gif"; (replaced import)
import variation from "../../Images/portfolio/ux/shareable-assets/variation.png";
import billionaires from "../../Images/portfolio/ux/shareable-assets/billionaires.png";
// import visual from "../../Images/portfolio/ux/shareable-assets/visual-gif.gif"; (replaced import)
import visual from "../../Images/portfolio/ux/shareable-assets/visual.png";
import badAccessibility from "../../Images/portfolio/ux/shareable-assets/bad-accessibility.png";
// import deliveryIterations from "../../Images/portfolio/ux/shareable-assets/delivery-iterations.gif"; (replaced import)
import deliveryIterations from "../../Images/portfolio/ux/shareable-assets/delivery-iterations.png";
import email from "../../Images/portfolio/ux/shareable-assets/email.png";
import assetReelGrey from "../../Images/portfolio/ux/shareable-assets/asset-reel-bg-fa.png";
import posts from "../../Images/portfolio/ux/shareable-assets/posts.png";
import shareCards from "../../Images/portfolio/ux/shareable-assets/share-cards.png";
import banner from "../../Images/portfolio/ux/shareable-assets/banner.png";
import emailRedesign from "../../Images/portfolio/ux/shareable-assets/email-redesign.png";

//ICONS
import helpCircle from "../../Icons/help-circle.svg";
import frown from "../../Icons/frown.svg";
import userCheck from "../../Icons/user-check.svg";
import checkCircle from "../../Icons/check-circle.svg";
import sliders from "../../Icons/sliders.svg";
import quotationMark from "../../Icons/quotation-mark.svg";
import sun from "../../Icons/sun.svg";


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
  const center = {textAlign: "center"}

  // CONTENT
  const PROJECT_ID = "shareable-assets"       // must match the project id in uxData
  const projectData = uxData[uxData.findIndex(item => item.id === PROJECT_ID)]
  const metadata = [
    ["Role", "Product Designer"],
    ["Team", `1 Product Manager
                1 Product Designer
                2 Engineers`],
    ["Timeline", "1 year (Launched October 2023)"]
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
            <div className='card-nested-surface--grey'> <img src={assetReelGrey} width={"100%"}></img> </div>
            <div className='card-nested-surface--grey'> <img src={email} width={"100%"}></img> </div>
            <div className='card-nested-surface--grey'> <img src={algorithm} width={"100%"}></img> </div>
            <div className='card-nested-surface--grey'> <img src={shareCards} width={"100%"}></img> </div>
          </div>
        </div>

        {/* opportunity */}
        <div className='section' >
          <div className="heading greyText">The Opportunity</div>
          <div className="title1">
            <b>Artists don’t share on social media as much as they would want to</b>
          </div>
          <div className='card-surface--grey card-stroke--shine flex--horiz' >
            <img src={quotationMark} width={ICON_WIDTH_SMALL} className="icon--grey"></img>
            <div className="body-medium">I should post more, but it takes a lot of time and effort to post on all social medias consistently.</div>
          </div>
          <div className='spacer'></div>

          <div className={isSmallScreen ? "flex--vert" : "flex--horiz"}>
            <div className='card-surface--white card-stroke--blue card-dir--corner flex--vert'>
              <img src={frown} width={ICON_WIDTH} className="icon--blue"></img>
              <div className="heading greyText">User Problem</div>
              <div className="title2">Artists want to share on social media more easily...</div>
            </div>
            <div className='card-surface--white card-stroke--blue card-dir--corner flex--vert'>
              <img src={userCheck} width={ICON_WIDTH} className="icon--blue"></img>
              <div className="heading greyText">Business Opportunity</div>
              <div className="title2">...and more artist shares would increase listening on Pandora</div>
            </div>
          </div>
        </div>

        {/* solution */}
        <div className='section' >
          <div className="title1"> <b>Introducing Shareable Assets</b> </div>
          <img src={ideaSketch}></img>
          <div className='card-surface--white card-stroke--blue card-dir--corner flex--vert'>
            <img src={sun} width={ICON_WIDTH} className='icon--blue'></img>
            <div className="heading greyText">Idea</div>
            <div className="title2">
              Shareable Assets is an end-to-end service that automatically generates custom graphics 
              when artists reach milestones and prompts them to share.
            </div>
          </div>
          <div className='body'>
            We decided to start with one milestone: The Million Streams Club. The system will be 
            scalable, so adding more milestones later will be easy.
          </div>
        </div>

        {/* award design */}
        <div className='section' >
          <div className="heading greyText">Award Design</div>
          <div className="title1"> <b>Designing a graphic that has room for variation</b> <span><i>-- Making it feel custom</i></span> </div>
          <div className="body">
            Our research showed that artists are more likely to share content that feels custom.
            My first attempt at making the graphics seem custom was through varied layouts. 
            However, this made the graphic less recognizable. 
            <br></br><br></br>
            I then explored creating the graphic with color swatches generated from the album art. The 
            color approach felt both more custom and more recognizable, but ensuring accessibility will 
            take more work (I’ll talk about this later).
          </div>

          <div className='spacer'></div>
          <div style={center}> <img src={variation} width={isSmallScreen ? "100%" : "80%"}></img> </div>
          <div className='spacer'></div>

          <div className='body'>
            For the visual direction, I took inspiration from the Pandora Billionaires Club to maintain 
            brand consistency and create more of an “official” look.
          </div>
          
          <div className='card-surface--grey flex--vert flex-align-horiz--center'>
            <div><img src={billionaires} width={200}></img></div>
            <div className="body">Pandora Billionaires Plaque</div>
          </div>
          <div className='spacer'></div>
          <div className='body'>
            Here is the design I settled on! This design was informed by feedback from many teams, 
            including artist relations, brand, content, and legal.
          </div>
          <div className='card-surface--grey'> <img src={visual} width={"100%"}></img> </div>
        </div>

        {/* gradient generation */}
        <div className='section'>
          <div className='title1'><b>Generating accessible gradients</b></div>
          <div className='body'>
            When generating this design automatically, the gradient plays a large part in the quality 
            and accessibility.
          </div>
          <div className='card-surface--grey flex--vert flex-align-horiz--center'>
            <div><img src={badAccessibility} width={200}></img></div>
            <div className="body">❌ What we’re hoping to prevent</div>
          </div>
          <div className='card-surface--white card-stroke--blue card-dir--corner flex--vert'>
            <img src={helpCircle} width={ICON_WIDTH} className='icon--blue'></img>
            <div className="heading greyText">Key Question</div>
            <div className="title2">
              How can we ensure that the white text is legible over the generated gradients?
            </div>
          </div>
          <div className='spacer'></div>
            
          <div className='body'>
            I specified an algorithm to generate gradients based on the dominant color of album 
            art, which the Pandora team already detects. 
            <br></br><br></br>
            Starting with this dominant color, my algorithm <b>adjusts for accessibility</b> by modifying 
            saturation and lightness, and then <b>builds the gradient palette</b> around this adjusted 
            color. For greyscale album art, it defaults to a few fallback gradients using variations
            of Pandora Blue.
          </div>
          <div className='card-surface--grey'><img src={algorithm} width={"100%"}></img> </div>
          <div className='body'>
            The original algorithm specs I handed off actually tested pretty well! During testing, 
            I checked edge cases for colors (very light, dark, bright, etc.), and tweaked some of 
            the original thresholds to ensure maximum accessibility.
          </div>
        </div>

        {/* minimizng dropoff */}
        <div className='section'>
          <div className='heading greyText'>Award Delivery</div>
          <div className='title1'><b>Minimizing drop-off in the delivery process</b></div>
          <div className='body'>
            Once an artist receives an email notifying them of a new Shareable Asset, how should 
            we prompt them to share?
            <br></br><br></br>
            We explored a few options, and ended up deciding to direct artists to an AMP landing 
            page. This option doesn’t have the friction of logging in, is feasible, and is in scope. 
            We plan to add a place in AMP to find old assets as a post-MVP feature.
          </div>

          <div className='spacer'></div>
          <div> <img src={deliveryIterations} width={"100%"}></img> </div>
          {/* <div className='spacer'></div> */}
        </div>

        {/* email design */}
        <div className='section'>
          <div className='title1'><b>Designing the Email</b></div>
          <div className='body'>
            I designed the email to be congratulatory and have a strong singular call to action 
            above the fold.
            <br></br><br></br>
            I also had to make sure that the design was responsive, adapted well to dark mode, 
            and showed up correctly in various email service providers (e.g. Gmail, Apple Mail, etc.).
          </div>
          <div className='card-surface--grey'> <img src={email} width={"100%"}></img> </div>
          <div className='spacer'></div>
          <div className='body'>
            As I designed this email style, the team saw that it could be a good time to give our 
            existing (and quite out-of-date) creator notification emails a redesign. The flexible components that
            I made made the redesigns very easy!
          </div>
          <div className='card-surface--grey'> <img src={emailRedesign} width={"100%"}></img> </div>
        </div>



        {/* final designs */}
        <div className='section'>
          <div className='heading greyText'>Final Designs</div>
          <div className='title1'><b>Empowering artists to share with fans</b></div>
          <div className='card-surface--white'> <img src={banner} width="100%"></img> </div>
        </div>

        {/* impact */}
        <div className='section'>
          <div className='heading greyText'>Impact</div>
          <div className='title1'><b>Excited artists are sharing their Pandora milestones with their fans!</b></div>
          <div className='card-surface--white card-stroke--blue card-dir--corner flex--horiz' >
            <img src={quotationMark} width={ICON_WIDTH_SMALL} className="icon--blue"></img>
            <div className="body-medium">Thanks to the <span className='blueText'>@amp_pandora</span> team for their tireless efforts to get artists’ music heard.”</div>
          </div>
          <div className='card-surface--grey' > <img src={posts} width="100%"></img> </div>
        </div>

        {/* reflection */}
        <div className='section'>
          <div className='heading greyText'>Reflection</div>
          <div className='card-surface--grey card-stroke--shine flex--horiz' >
            <img src={checkCircle} width={ICON_WIDTH_SMALL} className="icon--grey" style={iconTopMargin}></img>
            <div className="body">
              Thorough testing and UI reviews were crucial to the final product's quality, and building
              good relationships with my engineering partners made this process much easier!
            </div>
          </div>
          <div className='card-surface--grey card-stroke--shine flex--horiz' >
            <img src={sliders} width={ICON_WIDTH_SMALL} className="icon--grey icon-margin--top" style={iconTopMargin}></img>
            <div className="body">
              This project improved my understanding of digital color representations, specifically the HSL model.
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