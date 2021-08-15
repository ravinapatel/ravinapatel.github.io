import React from 'react';
import git from '../Icons/git.png';
import insta from '../Icons/insta.png';
import linkedIn from '../Icons/linkedIn.png';
import mail from '../Icons/mail.png';
import resume from '../Icons/resume.png';
import ReactGA from 'react-ga';


// RENDERING
function App(props) {

  // PROPS
  // - light      if true: light icons, which turn dark on hover
  //                 else: dark icons, which turn light on hover

  // STYLING
  const PADDING = 30
  const CLASS = props.light === "true" ? "socialLight" : "social"

  function handleClick(social) {
    // GA Event
    ReactGA.event({
      category: 'Social',
      action: 'Opened ' + social + ' from social media strip'
    })
  }

  return (
    <div style={{ display: "block" }}>
      <a href="mailto: rpp62@cornell.edu" target="_blank" onClick={() => handleClick('email')}>
        <img src={mail} alt="email" width={"17px"} className={CLASS} align="center" /></a>
      <a href="https://www.linkedin.com/in/ravinapatel0/" target="_blank" onClick={() => handleClick('LinkedIn')}>
        <img src={linkedIn} alt="linkedIn" width={"17px"} className={CLASS} align="center" style={{ paddingLeft: PADDING }} /></a>
      <a href="../../ravina-resume.pdf" target="_blank" onClick={() => handleClick('resume')}>
        <img src={resume} alt="resume" width={"17px"} className={CLASS} align="center" style={{ paddingLeft: PADDING }} /></a>
      <a href="https://github.com/ravinapatel" target="_blank" onClick={() => handleClick('Github')}>
        <img src={git} alt="github" width={"17px"} className={CLASS} align="center" style={{ paddingLeft: PADDING }} /></a>
      <a href="https://www.instagram.com/ravinart/" target="_blank" onClick={() => handleClick('Instagram')}>
        <img src={insta} alt="insta" width={"17px"} className={CLASS} align="center" style={{ paddingLeft: PADDING }} /></a>
    </div >

  );
}

export default App;
