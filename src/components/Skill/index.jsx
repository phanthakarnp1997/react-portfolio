import withLoader from "../../utils/withLoader";
import "./index.scss";
import React from "react";
import AnimateText from "../AnimateText";
import SkillItems from "../SkillItems";
import {
  frontendData,
  backendData,
  toolSkills,
  databaseSkills,
} from "../../data/skills-data";

function Skill() {
  const isAnimated = true;

  return (
    <>
      <div className="container skill-page">
        <h1>
          <AnimateText letterClass="text-animate-hover" text="Skill" idx={1} />
        </h1>
        <div className="skill-content">
          <div>
            <SkillItems
              isAnimated={isAnimated}
              title={"Frontend"}
              skills={frontendData}
            />
            <SkillItems
              isAnimated={isAnimated}
              title={"Backend"}
              skills={backendData}
            />
            <SkillItems
              isAnimated={isAnimated}
              title={`Tools`}
              skills={toolSkills}
            />
            <SkillItems
              isAnimated={isAnimated}
              title={"Database"}
              skills={databaseSkills}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default withLoader(Skill);
