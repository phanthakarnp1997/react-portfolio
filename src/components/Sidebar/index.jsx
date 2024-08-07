import "./index.scss";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faHouse,
  faAddressCard,
  faTimeline,
  faLightbulb,
  faEnvelope,
  faBars,
  faFile,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { BASE_URL } from "../../utils/constant";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const rootRef = useRef();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handler = (e) => {
      if (isOpen && !rootRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [isOpen]);

  const navLinks = [
    {
      to: BASE_URL,
      icon: faHouse,
      text: "Home",
      isEnd: true,
    },
    {
      to: `${BASE_URL}/about`,
      icon: faAddressCard,
      text: "About Me",
      isEnd: false,
    },
    {
      to: `${BASE_URL}/experience`,
      icon: faTimeline,
      text: "Experience",
      isEnd: false,
    },
    {
      to: `${BASE_URL}/skill`,
      icon: faLightbulb,
      text: "Skill",
      isEnd: false,
    },
    {
      to: `${BASE_URL}/contact`,
      icon: faEnvelope,
      text: "Contact",
      isEnd: false,
    },
  ];

  const socialLinks = [
    {
      href: "https://phanthakarn-plukpanya-resume.tiiny.site/",
      icon: faFile,
    },
    {
      href: "https://www.linkedin.com/in/phanthakarn-plukpanya-358863193/",
      icon: faLinkedin,
    },
    {
      href: "https://github.com/phanthakarnp1997",
      icon: faGithub,
    },
  ];

  return (
    <div className={`nav-bar ${isOpen ? "open" : ""}`} ref={rootRef}>
      <div className="menu">
        <NavLink
          className={({ isActive }) => (isActive ? "navlink-active" : "")}
          to={BASE_URL}
          end
        >
          <p className="text-logo">P</p>
        </NavLink>
        <FontAwesomeIcon
          icon={isOpen ? faXmark : faBars}
          color="#ffd700"
          size="3x"
          className={isOpen ? "x-icon text-logo" : "hamburger-icon text-logo"}
          onClick={toggleSidebar}
        />
      </div>
      <nav className={`nav-icon ${isOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            className={({ isActive }) => (isActive ? "navlink-active" : "")}
            to={link.to}
            end={link.isEnd}
          >
            <div className="icon-hover">
              <FontAwesomeIcon icon={link.icon} />
              <span>{link.text}</span>
            </div>
          </NavLink>
        ))}
      </nav>
      <ul className={`nav-social ${isOpen ? "open" : ""}`}>
        {socialLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} target="_blank">
              <FontAwesomeIcon icon={link.icon} className="icon-hover" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
