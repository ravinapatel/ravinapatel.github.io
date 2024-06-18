import React from 'react';
import '../App.css';
import useWindowSize from "../Components/useWindowSize";
import ProfilePicture from "../Images/about/me.png";
import Blob from "../Images/about/gradient-blobs.png";
import BlobTall from "../Images/about/gradient-blobs-tall.png";
import Link from "../Components/Link";
import Button from "../Components/Button";
import Polaroid from "../Components/Polaroid";
import FadeIn from 'react-fade-in';
import backgroundVideo from '../Images/gradient-cover.mp4'
import Socials from '../Components/Socials'
import Carousel from '../Components/Carousel'


function App(props) {

  // RESONSIVENESS
  const window = useWindowSize();
  var isBigScreen = window.width > 1200
  var isSmallMediumScreen = window.width < 920
  var isSmallScreen = window.width < 700

  // STYLING
  const SECTION_PADDING = 100

  const containerStyle = {
    paddingTop: 120,
    textAlign: "center",
    overflow: "clip"
  }
  const content = {
    display: "inline-block",
    position: "relative",
    textAlign: "left",
    width: isBigScreen ? 1100 : "100%",
  }
  const headerRow = {
    display: isSmallScreen ? "block" : "flex",
    width: isBigScreen ? "100%" : "90%",
    margin: "auto",
  }  
  const learnContainer = {
    width: "100%",
    margin: "auto",
    marginTop: SECTION_PADDING,
    marginBottom: SECTION_PADDING,
    textAlign: "left",
  }    
  const hScrollContainer = {
    paddingLeft: isBigScreen ? (window.width-1100)/2 -10 : "3%",
    overflow: "auto",
    display: "flex",
  }
  const carouselContainer = {
    // paddingLeft: isBigScreen ? (window.width-1100)/2 -10 : "3%",
    paddingLeft: isBigScreen ? 30 : "3%",
    // overflow: "auto",
  }
  const row = {
    display: isSmallMediumScreen ? "block" : "flex",
  }
  const headerColumnLeft = {
    flex: "35%",
    textAlign: "left"
  }

  const headerColumnRight = {
    flex: "65%",
    textAlign: "left",
  }
  const myName = {
    fontSize: "48px",
    fontWeight: "bold",
    paddingBottom: 10,
    marginTop: isSmallScreen ? -30 : 0
  }
  const tagStyle = {
    display: "inline-block",
    margin: "0px 10px 10px 0px"
  }
  const lastTagStyle = {
    display: "inline-block",
    margin: "0px 10px 30px 0px"

  }
  const contactLink = {
    display: "inline-block",
    margin: "-5px 10px 0px 0px"
  }
  // function getRandRot() {
  //   const deg = Math.floor(Math.random() * 4) - 1
  //   console.log(deg)
  //   return "rotate(" + deg + "deg)"
  // }


  const connectContent = {
    marginTop: SECTION_PADDING,
    marginBottom: SECTION_PADDING,
    backgroundImage: "url(/gradient-cover.gif)",
    backgroundSize: 'cover',
    padding: 24
  }
  const experienceContainer = {
    width: isBigScreen ? "100%" : "90%",
    margin: "auto",
    marginBottom: SECTION_PADDING,
  }
  const sectionTitle = {
    padding: "0px 0px 24px 0px "
  }
  const learningTitle = {
    position: "relative",
    padding: "0px 0px 24px 0px ",
    width: "fit-content",
    marginLeft: isBigScreen ? (window.width-1100)/2 : "5%",
  }
  const expColumnLeft = {
    flex: "60%",
  }
  const expColumnRight = {
    flex: "40%",
  }
  for (const leftCol of [headerColumnLeft, expColumnLeft]) {
    if (isBigScreen) leftCol.margin = "0px 50px 0px 0px"
    else if (isSmallMediumScreen) leftCol.margin = "0px 42px 42px 0px"
    else leftCol.marginRight = "10%"
  }

  const blobContainer = {
    position: "absolute",
    left: -600,
    top: 0,
    zIndex: -10
  }
  const blobContainerTall = {
    position: "absolute",
    left: 800,
    top: -400,
    zIndex: -10
  }

  const polaroidMap = {
    uke: "I asked for a ukulele for my 18th birthday and have been *amateurly* playing ever since.",
    bnat: "I trained in the classical Indian dance form, Bharatnatyam, for seven years and earned my B.A. in Fine Arts.",
    raas: "I learned the Indian dance style, Garba-Raas, on Big Red Raas at Cornell. I became captain for two years and brought the team to nationals for the first time!",
    painting: "I decided to try to be an 'artist' one day in eighth grade. I picked up mediums as I went including watercolor, pen, and wood burning!",
    react: "I learned React.js one summer and rebuilt this very website!",
    duo: "I started learning French on Duolingo, and am currently obsessed. Je veux aller en France l'année prochaine!",
    hiphop: "I started learning Hip Hop through Youtube tutorials during the pandemic, then joined a team in college, and now I take classes in NYC.",
    sew: "I'm learning to sew. Starting with some simple tailoring and hoping to do a thrift flip by the end of the year!"
  }

  const experienceMap = [
    ["Pandora", "Associate Product Designer"],
    ["Pandora", "Product Design Intern"],
    ["Paravane Ventures", "Product Design Case Analyst"],
    ["Cornell AppDev", "Product Designer, Product Manager"],
    ["Vidmob", "Motion Design Intern"],
    ["Cornell Theta Tau", "Marketing Chair"]
  ]

  const educationMap = [
    ["Cornell University", "B.S. Computer Science"],
    ["Nrityakala Dance Academy", "B.A. Fine Arts"]
  ]

  const experienceContent = experienceMap.map(item => 
    <div>
      <div className={isSmallScreen ? 'body2' : 'body'} style={{display: "inline-block", fontWeight: 500, paddingRight: 10}}>{item[0]}</div>
      <div className={isSmallScreen ? 'body2Light' : 'bodyLight'} style={{display: "inline-block", paddingRight: 10}}>|</div>
      <div className={isSmallScreen ? 'body2Light' : 'bodyLight'} style={{display: "inline-block"}}>{item[1]}</div>
    </div>
  )

  const educationContent = educationMap.map(item => 
    <div>
      <div className={isSmallScreen ? 'body2' : 'body'} style={{fontWeight: 500, paddingRight: 10}}>{item[0]}</div>
      <div className={isSmallScreen ? 'body2Light' : 'bodyLight'} style={{paddingBottom: 24}}>{item[1]}</div>
    </div>
  )
    

  const POLAROID_WIDTH = isSmallScreen ? 220 : 250;
  

  // RENDERING
  return (
  <FadeIn transitionDuration="500">
    <div style={containerStyle}>

      <div style={content}>

        <div style={blobContainer}>
          <img src={Blob}></img>
        </div>

        <div style={blobContainerTall}>
          <img src={BlobTall}></img>
        </div>

        {/* HEADER */}
        <div style={headerRow}>
          <div style={headerColumnLeft}>
            <img
              src={ProfilePicture}
              alt="Ravina"
              width= {isSmallScreen ? "50%" : "100%"}
              style={{borderRadius: 1000, border: "1px solid #e1e1e1"}}
            />
          </div>
          <div style={headerColumnRight}>
            <div className='brand' style={myName}>ravina patel</div>
            <div className='tag' style={tagStyle}>product designer</div>
            <div className='tag' style={tagStyle}>learner</div>
            <div className='tag' style={lastTagStyle}>new yorker-in-training</div>
            <div className='body' style={{padding: "0px 0px 20px 0px"}}>
              Hi there! As a product designer, I'm passionate about transforming unsolved, complex problems into simple solutions that feel natural.
            </div>
            <div className='body' style={{padding: "0px 0px 10px 0px"}}>
              Currently, I’m building creator tools at <Link text={"SiriusXM"} url={"https://www.siriusxm.com/"} isInternal="false" type="inline" icon="arrowDiagonal" color="rgba(0, 0, 0, 1)"></Link>. 
              Before this, I studied Computer Science and User Experience at <Link text={"Cornell University"} url={"https://www.cornell.edu/"} isInternal="false" type="inline" icon="arrowDiagonal" color="rgba(0, 0, 0, 1)"></Link>,
              built apps with cross-functional teams in <Link text={"Cornell AppDev"} url={"https://www.cornellappdev.com/"} isInternal="false" type="inline" icon="arrowDiagonal" color="rgba(0, 0, 0, 1)"></Link>,
              and interned at 
              a <Link text={"bunch"} url={"https://www.vidmob.com/"} isInternal="false" type="inline" icon="arrowDiagonal" color="rgba(0, 0, 0, 1)"></Link> 
              &nbsp; <Link text={"of"} url={"https://pandoracharts.com/"} isInternal="false" type="inline" icon="arrowDiagonal" color="rgba(0, 0, 0, 1)"></Link>
              &nbsp; <Link text={"places"} url={"https://paravaneventures.com/"} isInternal="false" type="inline" icon="arrowDiagonal" color="rgba(0, 0, 0, 1)"></Link>
                .
            </div>
            <div style={{paddingRight: 18, display: "inline-block"}}>
              <Button text={"Say hi!"} url="mailto: rpp62@cornell.edu" isInternal="false"></Button>
            </div>
            <Button text={"View resume"} url="./ravina-resume.pdf" isInternal="false"></Button>
            {/* <Socials></Socials> */}
          </div>
        </div>

        {/* LET'S CHAT */}
          {/* <div style={connectContent}>
            <div style={contactLink}><Link text={"Email me"} url="mailto: rpp62@cornell.edu" isInternal="false" type="block" icon="arrowDiagonal" color="rgba(0, 0, 0, 1)"></Link></div>
            <div style={contactLink}><Link text={"Resume"} url="../../ravina-resume.pdf" isInternal="false" type="block" icon="arrowDiagonal" color="rgba(0, 0, 0, 1)"></Link></div>
            <div style={contactLink}><Link text={"LinkedIn"} url="https://www.linkedin.com/in/ravinapatel0/" isInternal="false" type="block" icon="arrowDiagonal" color="rgba(0, 0, 0, 1)"></Link></div>
            <div style={contactLink}><Link text={"Instagram"} url="https://www.instagram.com/ravinart/" isInternal="false" type="block" icon="arrowDiagonal" color="rgba(0, 0, 0, 1)"></Link></div>
          </div> */}

        {/* EXPERIENCE */}
        {/* <div style={experienceContainer}>
          <div style={row}>
            <div style={expColumnLeft}>
              <div className='sectionTitle' style={sectionTitle}>experience</div>
              {experienceContent}
            </div>
            <div style={expColumnRight}>
              <div className='sectionTitle' style={sectionTitle}>education</div>
              {educationContent}
            </div>
          </div>
        </div> */}

      </div>

      {/* LEARN */}
      <div style={learnContainer}>
        <div className='sectionTitle' style={learningTitle}>
          what i'm up to
           {/* / riding the <a href="https://tombirchard.substack.com/p/starting-something-new-and-the-dunning" target="_blank" className='inlineLink'>Dunning-Kruger curve</a>  */}
        </div>
        <div className='body' style={learningTitle}>
          riding the <Link text={"Dunning-Kruger Curve"} url={"https://upload.wikimedia.org/wikipedia/commons/4/46/Dunning%E2%80%93Kruger_Effect_01.svg"} isInternal="false" type="inline" icon="arrowDiagonal" color="rgba(0, 0, 0, 1)"></Link>
          {/* <a href="https://upload.wikimedia.org/wikipedia/commons/4/46/Dunning%E2%80%93Kruger_Effect_01.svg" target="_blank" className='inlineLink'>Dunning-Kruger curve</a>  */}
        </div>
        {/* <div style={hScrollContainer}>
          <Polaroid id="hiphop" caption={polaroidMap["hiphop"]} angle={"rotate(0deg)"} width={POLAROID_WIDTH-20}></Polaroid>          
          <Polaroid id="duo" caption={polaroidMap["duo"]} angle={"rotate(-1deg)"} width={POLAROID_WIDTH}></Polaroid>
          <Polaroid id="sew" caption={polaroidMap["sew"]} angle={"rotate(1deg)"} width={POLAROID_WIDTH}></Polaroid>
          <Polaroid id="painting" caption={polaroidMap["painting"]} angle={"rotate(0deg)"} width={POLAROID_WIDTH}></Polaroid>
          <Polaroid id="react" caption={polaroidMap["react"]} angle={"rotate(1deg)"} width={POLAROID_WIDTH + 50}></Polaroid>
          <Polaroid id="raas" caption={polaroidMap["raas"]} angle={"rotate(0deg)"} width={POLAROID_WIDTH}></Polaroid>
          <Polaroid id="uke" caption={polaroidMap["uke"]} angle={"rotate(1deg)"} width={POLAROID_WIDTH+50}></Polaroid>
          <Polaroid id="bnat" caption={polaroidMap["bnat"]} angle={"rotate(-1deg)"} width={POLAROID_WIDTH}></Polaroid>
        </div> */}

        <div style={carouselContainer}><Carousel></Carousel></div>

      </div>

      
    </div>
  </FadeIn>
  );
}

export default App;
