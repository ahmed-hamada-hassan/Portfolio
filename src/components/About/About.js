import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Education from "./Education";

function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          {/* 2. Skills */}
          <h1
            className="project-heading"
            style={{ paddingTop: "50px", paddingBottom: "10px" }}
          >
            Professional <strong className="purple">Skillset</strong>
          </h1>
          <p
            style={{
              color: "#d1d5db",
              textAlign: "center",
              marginBottom: "25px",
            }}
          >
            Core technologies, frameworks, and architectural patterns I leverage
            to build scalable full-stack and back-end systems.
          </p>
          <Techstack />

          {/* 3. Education */}
          <h1
            className="project-heading"
            style={{ paddingTop: "40px", paddingBottom: "10px" }}
          >
            Academic <strong className="purple">Education</strong>
          </h1>
          <Education />
        </Container>
      </Container>
    </>
  );
}

export default About;
