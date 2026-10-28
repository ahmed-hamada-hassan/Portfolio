import React from "react";
import { FaUsers, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";

function CommunityTimeline() {
  const activities = [
    {
      role: "",
      company: "",
      date: "",
      location: "",
      icon: <FaUsers />,
      points: [],
    },
  ];

  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      {activities.map((act, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-dot">{act.icon}</div>
          <div className="timeline-card">
            <div className="timeline-header-row">
              <div>
                <div className="timeline-role">{act.role}</div>
                <div className="timeline-company">{act.company}</div>
              </div>
              <div className="timeline-meta">
                <span className="timeline-badge">
                  <FaCalendarAlt style={{ fontSize: "0.85em" }} /> {act.date}
                </span>
                <span className="timeline-badge">
                  <FaMapMarkerAlt style={{ fontSize: "0.85em" }} />{" "}
                  {act.location}
                </span>
              </div>
            </div>

            <ul className="timeline-desc">
              {act.points.map((point, pIdx) => (
                <li key={pIdx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommunityTimeline;
