import "./index.scss";
import React from "react";
import withLoader from "../../utils/withLoader";

function Contact() {
  return (
    <>
      <div className="page-header">
        <div className="text-zone">Contact</div>
      </div>
    </>
  );
}

export default withLoader(Contact);
