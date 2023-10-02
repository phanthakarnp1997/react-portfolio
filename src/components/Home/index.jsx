import "./index.scss";
import HeroImage from "../../assets/rocket-ship.png";
import React, { useState, useEffect } from "react";
import AnimateText from "../AnimateText";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");

  const name = "I'm Phanthakarn Plukpanya";
  const rolename = "Software Developer";
  const textIntroduce = `Greetings, I am Dew, an experienced software developer with a passion
  for problem-solving. I am eager to expand my knowledge of cutting-edge
  technologies and embrace fresh challenges to further enhance my
  skillset.`;

  const typingIntroduceComponent = (
    <TypeAnimation speed={50} sequence={[textIntroduce, 1000]} />
  );

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 6000);
  }, []);

  return (
    <>
      <div className="home-page">
        <div className="wrapper">
          <div className="text-zone information">
            <AnimateText idx={5} letterClass={`${letterClass}`} text="Hi!" />
            <AnimateText idx={10} letterClass={letterClass} text={name} />
            <div>
              <AnimateText idx={35} letterClass={letterClass} text={rolename} />
            </div>
          </div>
          <div className="greeting-zone description">
            {typingIntroduceComponent}
          </div>
        </div>
        <div className="image-zone">
          <img src={HeroImage} alt="hero-image" />
        </div>
      </div>
    </>
  );
}
