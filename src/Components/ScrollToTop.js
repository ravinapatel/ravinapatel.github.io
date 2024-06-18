import React, {useState} from 'react';
import '../App.css';
import arrow from "../Icons/upArrow.png";

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function Button(props) {

  // STATE
  const MIN_SCROLL = 600
  const [visible, setVisible] = useState(false)
  
  const updateVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > MIN_SCROLL){
      setVisible(true)
    } 
    else if (scrolled <= MIN_SCROLL){
      setVisible(false)
    }
  };
  
  window.addEventListener('scroll', updateVisible);


  // STYLING
  // animation styling is in ../App.css
  const container = {
    bottom: "0%",
    right: "0%",
    position: "fixed",
    padding: "40px",
    zIndex: "500",
    
  }
  const button = {
    display: "inline-block",
  }
  const iconStyle = {
    width: "18px"
  }

  return (
    
    <div className={ visible ? "slideIn" : "slideOut"} style={container}>
    <button
      style={button}
      className="circleButton"
      onClick={scrollToTop}>
      <div>
        <img 
          src={arrow} 
          alt="Scroll to top arrow" 
          style={iconStyle}>
        </img>
      </div>
    </button>
  </div>

  );
}

export default Button;
