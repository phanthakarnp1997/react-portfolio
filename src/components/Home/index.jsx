import "./index.scss";
import React from "react";

export default function Home() {
  return (
    <div className="home-page">
      <div className="information">
        <span>Hi</span>
        <span className="emoji-animation wave"></span>
        <p>I'm Phanthakarn Plukpanya </p>
        <p className="role">Software Developer</p>
      </div>
      <div className="description">
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
