import "./index.scss";
import React from "react";
import withLoader from "../../utils/withLoader";
import AnimateText from "../AnimateText";
import Lottie from "lottie-react";
import developerAnimation from "../../assets/developer-animation.json";

function About() {
  const aboutText = `My name is Phanthakarn Plukpanya. You can also call me Dew. I
                      graduated with a bachelor’s degree in computer science from
                      Rajamangala University of Technology Krungthep. I am currently a
                      software developer. I have years of experience (4 years) in many
                      programming languages such as C# (.NET Core,.NET Framework), Java
                      (Springboot, Spring Framework), and Basic in Javascript and TypeScript.
                      I spend hours studying a new technology or framework to improve my
                      skillset.`;

  return (
    <>
      <div className="page-container">
        <div className="page-header">
          <div className="text-zone text-about">
            <AnimateText
              letterClass=" header text-animate-hover"
              text="About Me"
              idx={1}
            />
          </div>
          <div className="content-zone">{aboutText}</div>
        </div>
        <div className="animation-section">
          <Lottie animationData={developerAnimation} loop={true} />
        </div>
      </div>
    </>
  );
}

export default withLoader(About);
