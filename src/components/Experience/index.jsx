import withLoader from "../../utils/withLoader";
import "./index.scss";
import React from "react";
import AnimateText from "../AnimateText";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

function Experience() {
  const experiences = [
    {
      date: "2024 - present",
      title: "Programmer Analyst",
      company: "CDG Systems Co. Ltd",
      responsibilities: [
        "Designed, developed, and deployed RESTful API using ASP.NET Web API",
        "Developed RESTful API using JAVA EE",
        "Created an API for external government agencies",
        "Developed desktop applications using WPF",
        "Developed new and maintains existing applications",
        "Works closely with Project Manager and Team Leads on change request function",
        "System Design (Database, System Workflow)",
      ],
      iconDefinition: faBriefcase,
    },
    {
      date: "2019 - 2023",
      title: "Programmer",
      company: "CDG Systems Co. Ltd",
      responsibilities: [
        "Designed, developed, and deployed RESTful API using ASP.NET Web API",
        "Created an API for external government agencies",
        "Developed desktop applications using WPF and Windows Forms",
        "Developed new and maintains existing applications",
        "Works closely with Project Manager and Team Leads on change request function",
      ],
      iconDefinition: faBriefcase,
    },
    {
      date: "Jun 2019 - Sep 2019",
      title: "Freelance",
      responsibilities: [
        "Developed POS System using Vue.js and Spring Boot",
        "Developed Web Application using Angular and Spring Boot",
      ],
      iconDefinition: faBriefcase,
    },
    {
      date: "Jul 2018 - Oct 2018",
      title: "Software Developer (Internship)",
      company: "G-Able Public Company Limited",
      responsibilities: [
        "Developed web application using Anuglar",
        "Developed RESTful API using JAVA and Spring framework",
      ],
      iconDefinition: faBriefcase,
    },
    {
      date: "Sep 2016 - Mar 2019",
      title: "Student (Computer Science)",
      company: "Rajamangala University of Technology Krungthep",
      responsibilities: [
        "Farmer Robot Project Using Arduino, MQTT and (HTML,CSS,JavaScript)",
      ],
      iconDefinition: faGraduationCap,
    },
  ];
  return (
    <>
      <div className="container experience-page">
        <h1>
          <AnimateText
            letterClass="text-animate-hover"
            text="Experience"
            idx={1}
          />
        </h1>
        <div className="timeline-container">
          <VerticalTimeline>
            {experiences.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#022C43", color: "#f9f871" }}
                contentArrowStyle={{
                  borderRight: "7px solid  #022C43",
                }}
                date={item.date}
                iconStyle={{ background: "#022C43", color: "#fff" }}
                icon={<FontAwesomeIcon icon={item.iconDefinition} />}
              >
                <h3 className="vertical-timeline-element-title">
                  {item.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {item.company}
                </h4>
                <ul>
                  {item.responsibilities?.map((responsibilitie, index) => (
                    <li key={index}>
                      <p>{responsibilitie}</p>
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}

export default withLoader(Experience);
