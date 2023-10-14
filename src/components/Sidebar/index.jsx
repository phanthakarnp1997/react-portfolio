import React, { useEffect, useRef, useState } from "react";
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
import { BASE_URL } from "../../utils/constant";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  let rootRef = useRef();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let handler = (e) => {
      if (isOpen && !rootRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [isOpen]);

  return (
    <div className={`nav-bar ${isOpen ? "open" : ""}`} ref={rootRef}>
      <div className="menu">
        <Link to={BASE_URL}>
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
        <Link to={BASE_URL}>
          <div className="icon-hover">
            <FontAwesomeIcon icon={faHouse} />
            <span>Home</span>
          </div>
        </Link>
        <Link to={`${BASE_URL}/about`}>
          <div className="icon-hover">
            <FontAwesomeIcon icon={faAddressCard} />
            <span>About Me</span>
          </div>
        </Link>
        <Link to={`${BASE_URL}/experience`}>
          <div className="icon-hover">
            <FontAwesomeIcon icon={faTimeline} />
            <span>Experience</span>
          </div>
        </Link>
        <Link to={`${BASE_URL}/skill`}>
          <div className="icon-hover">
            <FontAwesomeIcon icon={faLightbulb} />
            <span>Skill</span>
          </div>
        </Link>
        <Link to={`${BASE_URL}/contact`}>
          <div className="icon-hover">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Contact</span>
          </div>
        </Link>
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
  );
}
