import withLoader from "../../utils/withLoader";
import "./index.scss";
import React from "react";

function Skill() {
  return (
    <>
      <div className="page-header">
        <div className="text-zone">Skill</div>
      </div>
    </>
  );
}

export default withLoader(Skill);
