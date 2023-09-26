import "./index.scss";
import React from "react";

export default function Terminal({ titleBar, itemDisplay }) {
  return (
    <>
      <div className="bar">
        <span>{titleBar}</span>
      </div>
      <div id="screen">
        <div className="item--display">{itemDisplay}</div>
      </div>
    </>
  );
}
