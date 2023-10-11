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
  return (
    <>
      <div className="container skill-page">
        <h1>
          <AnimateText letterClass="text-animate-hover" text="Skill" idx={1} />
        </h1>
        <div className="skill-content">
          <div>
            <SkillItems title={"Frontend"} skills={frontendData} />
            <SkillItems title={"Backend"} skills={backendData} />
            <SkillItems title={"Tools"} skills={toolSkills} />
            <SkillItems title={"Database"} skills={databaseSkills} />
          </div>
        </div>
      </div>
    </>
  );
}

export default withLoader(Skill);
