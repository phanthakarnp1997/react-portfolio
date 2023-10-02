import "./index.scss";
import React from "react";
import Lottie from "lottie-react";
import { TypeAnimation } from "react-type-animation";
import astronautAnimation from "../../assets/astronautLottie.json";

export default function PreLoader() {
  return (
    <div className="loading-container">
      <Lottie
        className="loading-animation"
        animationData={astronautAnimation}
        loop={true}
      />
      <TypeAnimation
        sequence={["Page is Loading", 1000]}
        style={{ fontSize: "3em" }}
        repeat={Infinity}
      />
    </div>
  );
}
