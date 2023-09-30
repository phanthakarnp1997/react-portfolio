import "./index.scss";
import React from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="App">
        <Sidebar />
        <div className="page star-field">
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
          <span className="tags top-tags">&lt;body&gt;</span>
          <Outlet />
          <span className="tags bottom-tags">
            &lt;/body&gt;
            <br />
            <span className="bottom-tag-html">&lt;/html&gt;</span>
          </span>
        </div>
      </div>
    </>
  );
}
