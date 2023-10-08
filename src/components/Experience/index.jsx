import withLoader from "../../utils/withLoader";
import "./index.scss";
import React from "react";
import AnimateText from "../AnimateText";

function Experience() {
  return (
    <>
      <div className="container experience-page">
        <h1>
          {" "}
          <AnimateText
            letterClass="text-animate-hover"
            text="Experience"
            idx={1}
          />
        </h1>
      </div>
    </>
  );
}

export default withLoader(Experience);
