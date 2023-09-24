import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faHouse,
  faAddressCard,
  faTimeline,
  faLightbulb,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <div className="nav-bar">
      <Link to="/">
        <p className="text-logo">P</p>
      </Link>
      <nav className="nav-icon">
        <div className="icon-hover">
          <FontAwesomeIcon icon={faHouse} />
          <span>Home</span>
        </div>
        <div className="icon-hover">
          <FontAwesomeIcon icon={faAddressCard} />
          <span>About Me</span>
        </div>
        <div className="icon-hover">
          <FontAwesomeIcon icon={faTimeline} />
          <span>Experience</span>
        </div>
        <div className="icon-hover">
          <FontAwesomeIcon icon={faLightbulb} />
          <span>Skill</span>
        </div>
        <div className="icon-hover">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Contact</span>
        </div>
      </nav>

      <ul className="nav-social">
        <li>
          <FontAwesomeIcon icon={faLinkedin} className="icon-hover" />
        </li>
        <li>
          <FontAwesomeIcon icon={faGithub} className="icon-hover" />
        </li>
      </ul>
    </div>
  );
}
