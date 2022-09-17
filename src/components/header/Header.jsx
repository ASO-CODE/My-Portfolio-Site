import React, { useEffect, useState } from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/ASO-CODE.png";
import HeaderSocials from "./HeaderSocials";
import AnimatedLetters from "../AnimatedLetters";
const Header = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["S", "o", "l", "o", "m", "o", "n"];
  const jobArray = [
    "F",
    "r",
    "o",
    "n ",
    "t",
    "e",
    "n",
    "d",
    " ",
    "D",
    "e",
    "v",
    ".",
  ];

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hi I'm</h5>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={1}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={15}
          />
        </h1>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
