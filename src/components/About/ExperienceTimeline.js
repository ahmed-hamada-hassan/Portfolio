import React from "react";
import {
  FaBriefcase,
  FaRobot,
  FaLaptopCode,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function ExperienceTimeline() {
  const experiences = [
    {
      role: "",
      company: "",
      date: "",
      location: "",
      icon: <FaRobot />,
      points: [],
    },
  ];

  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      {experiences.map((exp, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-dot">{exp.icon}</div>
          <div className="timeline-card">
            <div className="timeline-header-row">
              <div>
                <div className="timeline-role">{exp.role}</div>
                <div className="timeline-company">{exp.company}</div>
              </div>
              <div className="timeline-meta">
                <span className="timeline-badge">
                  <FaCalendarAlt style={{ fontSize: "0.85em" }} /> {exp.date}
                </span>
                <span className="timeline-badge">
                  <FaMapMarkerAlt style={{ fontSize: "0.85em" }} />{" "}
                  {exp.location}
                </span>
              </div>
            </div>

            <ul className="timeline-desc">
              {exp.points.map((point, pIdx) => (
                <li key={pIdx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceTimeline;
