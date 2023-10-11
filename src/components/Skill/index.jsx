import withLoader from "../../utils/withLoader";
import "./index.scss";
import React from "react";
import AnimateText from "../AnimateText";

function Skill() {
  return (
    <>
      <div className="container skill-page">
        <h1>
          <AnimateText letterClass="text-animate-hover" text="Skill" idx={1} />
        </h1>
      </div>
    </>
  );
}

export default withLoader(Skill);
