import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa";
import logo from "../Assets/logo.svg";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Container>
        <Row className="align-items-center py-2">
          {/* 1. Name with Logo at the first */}
          <Col
            md={4}
            className="d-flex align-items-center justify-content-center justify-content-md-start mb-2 mb-md-0"
          >
            <img
              src={logo}
              alt="Ahmed Hamada Logo"
              className="img-fluid"
              style={{ maxHeight: "30px", marginRight: "12px" }}
            />
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                fontWeight: 700,
                fontSize: "1.15em",
                letterSpacing: "0.8px",
                color: "#f8fafc",
              }}
            >
              Ahmed <span className="purple">Hamada</span>
            </span>
          </Col>

          {/* 2. Copyright / Middle Note */}
          <Col md={4} className="text-center mb-2 mb-md-0">
            <p
              style={{
                color: "#94a3b8",
                fontSize: "0.88em",
                margin: 0,
                fontFamily: "'Fira Code', monospace",
              }}
            >
              Copyright © {currentYear} AH. All rights reserved.
            </p>
          </Col>

          {/* 3. Upper Arrow to return to top (Contacts removed) */}
          <Col
            md={4}
            className="d-flex justify-content-center justify-content-md-end"
          >
            <button
              onClick={scrollToTop}
              className="scroll-to-top-btn"
              aria-label="Scroll to top"
              title="Return to top"
            >
              <FaArrowUp />
            </button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;
