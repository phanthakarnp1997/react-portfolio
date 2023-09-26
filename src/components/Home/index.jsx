import "./index.scss";
import React, { useState, useEffect } from "react";
import AnimateText from "../AnimateText";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const sayhi = "Hi !";
  const name = "I'm Phanthakarn Plukpanya";
  const rolename = "Software Developer";

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 6000);
  }, []);

  return (
    <div className="home-page">
      <div className="information">
        <AnimateText
          idx={5}
          letterClass={`say-hi ${letterClass}`}
          text={sayhi}
        />
        <AnimateText idx={10} letterClass={letterClass} text={name} />
        <div className="role">
          <AnimateText idx={35} letterClass={letterClass} text={rolename} />
        </div>
      </div>
      <div className={`description`}>
        <TypeAnimation
          speed={50}
          sequence={[
            `Greetings, I am Dew, an experienced software developer with a passion
          for problem-solving. I am eager to expand my knowledge of cutting-edge
          technologies and embrace fresh challenges to further enhance my
          skillset.`,
            1000,
          ]}
        />
      </div>
    </div>
  );
}
