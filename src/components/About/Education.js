import React from "react";
import { Row, Col } from "react-bootstrap";
// تأكد من وجود لوجو جامعة بني سويف في المسار ده
import bsuLogo from "../../Assets/bsu-logo.jpg";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBookOpen,
} from "react-icons/fa";

const coreFoundations = [
  "Navigation Science & Space Tech",
  "System Analysis & Design",
  "Software Engineering",
  "Object-Oriented Programming (OOP)",
  "Data Structures & Algorithms",
  "Design Patterns & SOLID",
  "Clean Architecture & DDD",
  "CQRS Pattern",
  "Databases",
];

function Education() {
  return (
    <div className="education-card">
      <Row className="align-items-center">
        <Col md={3} className="education-logo-container">
          <img
            src={bsuLogo}
            alt="Beni-Suef University"
            className="education-logo-img img-fluid"
          />
        </Col>

        <Col md={9} style={{ paddingLeft: "25px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "8px",
            }}
          >
            <FaGraduationCap style={{ fontSize: "1.6em", color: "#00ff87" }} />
            <h3
              style={{
                fontSize: "1.35em",
                fontWeight: "700",
                color: "#ffffff",
                margin: 0,
              }}
            >
              Bachelor of Science in Navigation Science & Space Technology
            </h3>
          </div>

          <h5
            style={{
              color: "#00ff87",
              fontWeight: "600",
              marginBottom: "12px",
              fontSize: "1.05em",
            }}
          >
            Beni-Suef University
          </h5>

          <div className="timeline-meta" style={{ marginBottom: "14px" }}>
            <span className="timeline-badge">
              <FaCalendarAlt style={{ fontSize: "0.85em" }} /> Sep 2023 – Aug
              2028 (Expected)
            </span>
            <span className="timeline-badge">
              <FaMapMarkerAlt style={{ fontSize: "0.85em" }} /> Beni-Suef, Egypt
            </span>
          </div>

          <p
            style={{
              color: "#d1d5db",
              fontSize: "0.93em",
              lineHeight: "1.6",
              marginBottom: "10px",
            }}
          >
            Pursuing a rigorous academic degree while independently mastering
            software engineering principles to build scalable .NET and Angular
            applications.
            <br />
            <strong
              style={{
                color: "#ffffff",
                marginTop: "8px",
                display: "inline-block",
              }}
            >
              Self-Taught & Academic Foundations:
            </strong>
          </p>

          <div className="education-course-tags">
            {coreFoundations.map((topic, idx) => (
              <span key={idx} className="education-course-tag">
                <FaBookOpen style={{ fontSize: "0.75em", color: "#00ff87" }} />{" "}
                {topic}
              </span>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Education;
