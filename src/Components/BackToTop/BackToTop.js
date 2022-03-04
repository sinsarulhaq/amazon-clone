import React, { useEffect, useState } from "react";
import "./BackToTop.css";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 900) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
        window.removeEventListener("scroll", toggleVisibility)
    }
}, [])
  return( 
  <div className="scroll-to-top">
      {isVisible && (
          <div className="back-top-container" onClick={scrollTop} >
        Back To Top      
        </div>
      )}
</div>
)}


export default BackToTop;
