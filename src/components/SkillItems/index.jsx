import React from "react";
import "./index.scss";

function SkillItems({ title, skills }) {
  return (
    <>
      <div className="container-skills">
        <span className="title">{title}</span>
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
