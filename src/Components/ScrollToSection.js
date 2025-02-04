import React, {useState} from 'react';
import '../App.css';
import arrow from '../Icons/arrow-down.svg';

function Button({reference, click}) {

  // STATE
  const MIN_SCROLL = 100
  const [visible, setVisible] = useState(false)
  
  const updateVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > MIN_SCROLL){
      setVisible(false)
    } 
    else if (scrolled <= MIN_SCROLL){
      setVisible(true)
    }
  };

  window.addEventListener('scroll', updateVisible);
  React.useEffect(() => {updateVisible()});

  // STYLING
  // animation styling is in ../App.css
  const container = {
    zIndex: "500",
    
  }
  const button = {
    display: "inline-block",
    backgroundColor: "rgba(255, 255, 255, 0)",
    border: "none",
    cursor: "pointer",
    padding: 16
  }
  const iconStyle = {
    width: "32px"
  }

  return (
    <div ref={reference} className={ visible ? "slideIn" : "slideOutDown"} style={container}>
      <button
      style={button}
      className="iconButton"
      onClick={click}>
        <div>
          <img 
            src={arrow} 
            alt="Scroll down arrow" 
            style={iconStyle}>
          </img>
        </div>
      </button>
    </div>

  );
}

export default Button;
