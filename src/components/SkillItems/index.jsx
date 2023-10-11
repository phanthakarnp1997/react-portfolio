import React from "react";
import "./index.scss";
import AnimateText from "../AnimateText";

function SkillItems({ title, skills, isAnimated }) {
  return (
    <>
      <div className="container-skills">
        {isAnimated ? (
          <span className="title">
            <AnimateText
              letterClass="text-animate-hover"
              text={title}
              idx={1}
            />
          </span>
        ) : (
          <span className="title">{title}</span>
        )}

        <div className="items-container">
          {skills.map((item, index) => (
            <div key={index} className="item">
              {item.svg}
              <label>{item.name}</label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SkillItems;
