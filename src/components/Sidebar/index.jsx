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
        <FontAwesomeIcon icon={faHouse} />
        <FontAwesomeIcon icon={faAddressCard} />
        <FontAwesomeIcon icon={faTimeline} />
        <FontAwesomeIcon icon={faLightbulb} />
        <FontAwesomeIcon icon={faEnvelope} />
      </nav>

      <ul className="nav-social">
        <li>
          <FontAwesomeIcon icon={faLinkedin} />
        </li>
        <li>
          <FontAwesomeIcon icon={faGithub} />
        </li>
      </ul>
    </div>
  );
}
