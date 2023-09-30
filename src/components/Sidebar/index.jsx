import React, { useState } from "react";
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
  faBars,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`nav-bar ${isOpen ? "open" : ""}`}>
        <div className="menu">
          <Link to="/">
            <p className="text-logo">P</p>
          </Link>
          <FontAwesomeIcon
            icon={faBars}
            color="#ffd700"
            size="3x"
            className="hamburger-icon text-logo"
            onClick={toggleSidebar}
          />
        </div>
        <nav className={`nav-icon ${isOpen ? "open" : ""}`}>
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
        <ul className={`nav-social ${isOpen ? "open" : ""}`}>
          <li>
            <a
              href="https://www.linkedin.com/in/phanthakarn-plukpanya-358863193/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon-hover" />
            </a>
          </li>
          <li>
            <a href="https://github.com/phanthakarnp1997" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="icon-hover" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
