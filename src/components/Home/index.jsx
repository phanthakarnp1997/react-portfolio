import "./index.scss";
import React, { useState } from "react";
import AnimateText from "../AnimateText";

export default function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const name = "I'm Phanthakarn Plukpanya";
  const rolename = "Software Developer";

  return (
    <div className="home-page">
      <div className="information">
        <div className={`${letterClass} _5`}>Hi !</div>
        <AnimateText idx={10} letterClass={letterClass} text={name} />
        <div className="role">
          <AnimateText idx={35} letterClass={letterClass} text={rolename} />
        </div>
      </div>
      <div className={`description`}>
        <h2>
          Greetings, I am Dew, an experienced software developer with a passion
          for problem-solving. I am eager to expand my knowledge of cutting-edge
          technologies and embrace fresh challenges to further enhance my
          skillset.
        </h2>
      </div>
    </div>
  );
}
