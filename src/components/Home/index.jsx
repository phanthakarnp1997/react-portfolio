import "./index.scss";
import HeroImage from "../../assets/rocket-ship.png";
import React, { useState, useEffect } from "react";
import AnimateText from "../AnimateText";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");

  const firstName = "Phanthakarn";
  const lastName = "Plukpanya";
  const jobName = "Programer";
  const jobName2 = "Analyst";
  const textIntroduce = `Greetings, I am Dew, an experienced programer analyst with a passion
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
      <div className="container home-page">
        <div className="text-zone">
          <div className="text-introduce">
            <AnimateText idx={5} letterClass={`${letterClass}`} text="Hi !" />
            <br />
            <div>
              <AnimateText
                idx={10}
                letterClass={letterClass}
                text={`${firstName}`}
              />
              <br />
              <AnimateText
                idx={15}
                letterClass={letterClass}
                text={`${lastName}`}
              />
            </div>
            <div>
              <AnimateText idx={20} letterClass={letterClass} text={jobName} />
              <br />
              <AnimateText idx={25} letterClass={letterClass} text={jobName2} />
            </div>
          </div>
          <h2>{typingIntroduceComponent}</h2>
        </div>
        <div className="image-zone">
          <img src={HeroImage} alt="hero-image" />
        </div>
      </div>
    </>
  );
}
