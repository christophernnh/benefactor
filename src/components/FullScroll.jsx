import React, { useState, useEffect, useRef } from "react";
import FullScroll1 from "./FullScroll1.jsx";
import FullScroll2 from "./FullScroll2.jsx";
import Footer from "./footer.jsx";
import "../styles.css";
import FullScroll3 from "./FullScroll3.jsx";

const FullPageScroll = ({ navShowChange, onNavShowChange }) => {
  const containerRef = useRef(null);
  const [show, setShow] = useState(true);
  const [navShow, setNavShow] = useState(navShowChange);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = containerRef.current.scrollTop;
      console.log("Scroll position:", scrollPosition);
      if (scrollPosition >= 1300) {
        setShow(true);
      } else if (scrollPosition >= 600) {
        setNavShow(false);
        setShow(false);
      } else if(scrollPosition <= 100){
        setNavShow(true);
        setShow(true);
      }
      onNavShowChange(navShow);
      console.log(navShow);
    };

    const containerElement = containerRef.current;
    containerElement.addEventListener("scroll", handleScroll);

    return () => {
      containerElement.removeEventListener("scroll", handleScroll);
    };
  }, [navShow, onNavShowChange]);

  return (
    <div
      ref={containerRef}
      className="snap-y snap-mandatory overflow-y-scroll h-screen"
    >
      <FullScroll1 Show={show} />
      <FullScroll2 Show={show} />
      <FullScroll3></FullScroll3>
      <Footer></Footer>
    </div>
  );
};

export default FullPageScroll;
