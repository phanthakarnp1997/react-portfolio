import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export default function Sidebar() {
  return (
    <div className="nav-bar">
      <Link to="/">
        <p className="text-logo">P</p>
      </Link>
    </div>
  );
}
