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
        <div className="timeline">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#022C43", color: "#f9f871" }}
              contentArrowStyle={{
                borderRight: "7px solid  #022C43",
              }}
              date="2019 - present"
              iconStyle={{ background: "#022C43", color: "#fff" }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">Programmer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                CDG Systems Co. Ltd
              </h4>
              <p>Responisibilty...</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#022C43", color: "#f9f871" }}
              contentArrowStyle={{
                borderRight: "7px solid  #022C43",
              }}
              date="Jul 2018 - Oct 2018"
              iconStyle={{ background: "#022C43", color: "#fff" }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Developer (Internship)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                G-Able Public Company Limited
              </h4>
              <p>Responisibilty...</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#022C43", color: "#f9f871" }}
              contentArrowStyle={{
                borderRight: "7px solid  #022C43",
              }}
              date="Sep 2016 - Mar 2019"
              iconStyle={{ background: "#022C43", color: "#fff" }}
              icon={<FontAwesomeIcon icon={faGraduationCap} />}
            >
              <h3 className="vertical-timeline-element-title">
                Student (Computer Science)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Rajamangala University of Technology Krungthep
              </h4>
              <p>
                Farmer Robot Project Using Arduino, MQTT and
                (HTML,CSS,JavaScript)
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}

export default withLoader(Experience);
