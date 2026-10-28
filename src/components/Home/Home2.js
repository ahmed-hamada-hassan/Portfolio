import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a dedicated <b className="purple">Full-Stack Developer</b>{" "}
              specializing in the{" "}
              <b className="purple">.NET ecosystem and Angular</b>
              , driven by engineering scalable and high-performance systems.
              <br />
              <br />I specialize in{" "}
              <i>
                <b className="purple">
                  C#, ASP.NET Core, Angular, and SQL Server
                </b>
              </i>{" "}
              utilizing{" "}
              <b className="purple">
                Clean Architecture, CQRS, and Domain-Driven Design (DDD)
              </b>{" "}
              to build maintainable, production-ready code.
              <br />
              <br />
              My key areas of focus include developing{" "}
              <i>
                <b className="purple">
                  comprehensive end-to-end business solutions,
                </b>
              </i>{" "}
              like scalable E-Commerce platforms, and continuously expanding my
              database capabilities.
              <br />
              <br />I thrive on continuous independent learning, regularly
              sharing technical insights on <b className="purple">LinkedIn</b>,
              and tackling real-world software challenges while pursuing my
              academic degree at <b className="purple">Beni-Suef University</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="Ahmed Hamada"
                style={{
                  borderRadius: "50%",
                  border: "3.5px solid #00e1d9",
                  boxShadow:
                    "0 0 25px rgba(0, 225, 217, 0.55), 0 0 45px rgba(0, 255, 135, 0.35)",
                  maxWidth: "280px",
                  width: "100%",
                  aspectRatio: "1/1",
                  objectFit: "cover",
                  transition: "all 0.4s ease",
                }}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
