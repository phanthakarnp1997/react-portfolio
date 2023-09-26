import "./index.scss";
import React from "react";

export default function Terminal({ displayItem }) {
  return (
    <>
      <div className="bar"></div>
      <div id="screen">
        <div className="item--display">{displayItem}</div>
      </div>
    </>
  );
}
