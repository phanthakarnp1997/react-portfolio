import "./index.scss";
import React from "react";
import withLoader from "../../utils/withLoader";
import AnimateText from "../AnimateText";
import Lottie from "lottie-react";
import developerAnimation from "../../assets/developer-animation.json";

function About() {
  const aboutText = `My name is Phanthakarn Plukpanya, but you can call me Dew. I graduated with a bachelor’s degree in Computer Science from Rajamangala University of Technology Krungthep. Currently, I work as a programmer analyst and have accumulated 5 years of experience in various programming languages such as C# (.NET Core, .NET Framework), Java (Spring Boot, Spring Framework), as well as system design involving databases and system workflows. Additionally, I have a basic understanding of JavaScript and TypeScript. I dedicate hours to studying new technologies and frameworks to continually enhance my skill set.`;

  return (
    <>
      <div className="container about-page">
        <div>
          <h1>
            <AnimateText
              letterClass="text-animate-hover"
              text="About Me"
              idx={1}
            />
          </h1>
          <div className="text-zone">{aboutText}</div>
        </div>
        <div className="image-zone">
          <Lottie animationData={developerAnimation} />
        </div>
      </div>
    </>
  );
}

export default withLoader(About);
