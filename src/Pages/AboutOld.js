import React from 'react';
import me from '../Images/about/about-img.jpg';
import timeline from '../Images/about/timeline.png';

// STYLING
const containerStyle = {
  textAlign: "center"
}

const bodyStyle = {
  textAlign: "left",
  verticalAlign: "top",
  display: "inline-block",
  padding: "50px",
  paddingTop: "80px",
  width: "400px",

  letterSpacing: "0.03em",
  lineHeight: "22px",
  fontSize: "14px",
  textDecoration: "none",
  color: "#1e1e1e",
}

const p = {
  paddingBottom: "5px"
}

const imgStyle = {
  textAlign: "right",
  verticalAlign: "top",
  display: "inline-block",
  padding: "50px",
  paddingTop: "100px",
  width: "300px",

  letterSpacing: "0.03em",
  fontSize: "14px",
  textDecoration: "none",
  color: "#1e1e1e",

}


// RENDERING
function About() {
  return (
    <div className="container" style={containerStyle}>
      <div className="container" style={containerStyle}>
        <div style={bodyStyle} >

          <p className="heading">My Journey to UX</p>
          {/* <p style={p}>I am a sophomore studying Computer Science at Cornell University. I
          am passionate about creating things, whether that means creating
            software, products, or experiences.</p>

          <p style={p}>On campus, I am a product designer for <a href="https://www.cornellappdev.com/"
            style={{ color: "#1e1e1e" }} class="text-link" target="_blank">Cornell AppDev</a>
            , where I conduct user experience research and design interfaces for
             mobile apps used by thousands of Cornell students. Last summer,
            I interned with <a href="https://www.vidmob.com/" style={{ color: "#1e1e1e" }}
              class="text-link" target="_blank">VidMob</a> where I evaluated the
             visual design work of potential VidMob Creators based on data science insights.</p> */}

          <p style={p}>At heart, I have always been a creator. I love being faced
          with complex challenges and trying to come up with elegant solutions.
          This passion is what initially drove me to Computer Science.</p>

          <p style={p}>
            During my freshman year of college, I discovered digital product design and fell
            in love. The job allows me to solve complex problems, while creating
            beautiful products that improve quality of life for countless people.
            Now, my background in Computer Science gives me a strong understanding
            of the technology industry and technological constraints, as well as an
            ability to rapidly prototype my designs.</p>

          {/* <p style={p}>On the side, I am a freelance graphic designer and have designed for
             several organizations, including <a href="https://cornellbigredraas.
             github.io/index.html" style={{ color: "#1e1e1e" }} class="text-link"
              target="_blank">Big Red Raas</a>, <a href="http://cornellthetatau.com/"
                style={{ color: "#1e1e1e" }} class="text-link" target="_blank">Theta Tau</a>
                , and <a href="https://www.facebook.com/CornellBhangra/" style={{ color: "#1e1e1e" }}
              class="text-link" target="_blank">Cornell Bhangra</a>. I also love
               working on side projects, my latest being a <a href="https://github.
               com/ravinapatel/Connect-Four-AI" style={{ color: "#1e1e1e" }}
              class="text-link" target="_blank">Connect Four AI</a>.</p>

          <p style={p}>I'm always looking for interesting projects, so feel free to shoot me an email
           at <a href="mailto:rpp62@cornell.edu?Subject=Hello%20" target="_top" style={{ color: "#1e1e1e" }} class="text-link">rpp62@cornell.edu</a>! </p>

          <p style={p}>find me on <a href="https://www.linkedin.com/in/ravinapatel0/" style={{ color: "#1e1e1e" }} class="text-link"
            target="_blank">LinkedIn</a>, <a href="https://github.com/ravinapatel" style={{ color: "#1e1e1e" }} class="text-link"
              target="_blank">GitHub</a>, or <a href="https://www.instagram.com/ravinart/" style={{ color: "#1e1e1e" }} class="text-link"
                target="_blank">Instagram</a></p> */}

        </div>

        <div style={imgStyle}>
          <img src={timeline} alt="brief history" width={"200px"} class="img-responsive" alt="" align="center" />
        </div>

      </div>
    </div >
  );
}

export default About;
