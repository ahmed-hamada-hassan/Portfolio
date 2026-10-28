import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerceImg from "../../Assets/Projects/ecommerce.png";
import dvldImg from "../../Assets/Projects/dvld.png";

function Projects() {
  const ecommercePoints = [
    "Engineered a highly scalable backend with 80+ endpoints utilizing Clean Architecture, Domain-Driven Design (DDD), and the CQRS pattern via MediatR.",
    "Optimized system performance and data retrieval using Redis caching, Cursor/Offset pagination strategies, and custom EF Core Interceptors.",
    "Implemented secure JWT authentication with Role-Based Access Control (RBAC), and automated core workflows using Background Hosted Services.",
  ];

  const dvldPoints = [
    "Engineered a comprehensive desktop application for license and violation management, strictly adhering to a 3-Tier Architecture (Presentation, BLL, DAL) for optimal code modularity.",
    "Developed robust C# business logic and ADO.NET data access layers to handle complex workflows, including application tracking, test scheduling, and multi-category license issuance.",
    "Designed an intuitive Windows Forms GUI with advanced data binding and input validation, backed by a highly relational SQL Server database.",
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the featured back-end, Full-Stack, and desktop application
          projects I've built recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={ecommerceImg}
              isBlog={false}
              title="E-Commerce API - Back-End"
              points={ecommercePoints}
              ghLink="https://github.com/ahmed-hamada-hassan/ecommerce-backend"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={dvldImg}
              isBlog={false}
              title="Driver & Vehicle Licensing System (DVLD)"
              points={dvldPoints}
              ghLink="https://github.com/ahmed-hamada-hassan/DVLD-System"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
