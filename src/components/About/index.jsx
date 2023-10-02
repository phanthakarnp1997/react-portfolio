import "./index.scss";
import React from "react";
import withLoader from "../../utils/withLoader";

function About() {
  return (
    <>
      <div className="page-header">
        <div className="text-zone">About Me</div>
      </div>
    </>
  );
}

export default withLoader(About);
