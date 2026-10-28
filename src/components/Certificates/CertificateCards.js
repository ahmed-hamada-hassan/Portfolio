import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FiExternalLink, FiZoomIn } from "react-icons/fi";
import { TbCertificate } from "react-icons/tb";

function CertificateCards({ img, title, issuer, date, description, link, icon }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Card className="certificate-card">
        {img && (
          <div className="certificate-img-container" onClick={() => setShowModal(true)}>
            <img src={img} alt={title} className="certificate-img" />
          </div>
        )}

        <Card.Body style={{ padding: "18px 20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "8px" }}>
            <div style={{ fontSize: "1.4em", marginTop: "2px", flexShrink: 0, display: "flex", alignItems: "center" }}>
              {icon || <TbCertificate color="#00e1d9" />}
            </div>
            <div style={{ flexGrow: 1 }}>
              <Card.Title style={{ fontSize: "1.08em", fontWeight: "700", color: "#ffffff", margin: 0, lineHeight: "1.4" }}>
                {title}
              </Card.Title>
              <div style={{ color: "#94a3b8", fontSize: "0.86em", marginTop: "4px" }}>
                <strong style={{ color: "#00e1d9" }}>{issuer}</strong> {date && ` • ${date}`}
              </div>
            </div>
          </div>

          {description && (
            <Card.Text
              style={{
                color: "#cbd5e1",
                fontSize: "0.88em",
                lineHeight: "1.6",
                marginTop: "10px",
                marginBottom: "14px",
                flexGrow: 1,
              }}
            >
              {description}
            </Card.Text>
          )}

          <div style={{ marginTop: "auto", paddingTop: "12px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {img && (
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => setShowModal(true)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.85em",
                  borderColor: "rgba(0, 225, 217, 0.35)",
                  color: "#00e1d9",
                  background: "rgba(0, 225, 217, 0.05)",
                  borderRadius: "20px",
                  padding: "4px 14px",
                  transition: "all 0.3s ease",
                }}
              >
                <FiZoomIn /> Preview
              </Button>
            )}

            {link && (
              <Button
                variant="primary"
                size="sm"
                href={link}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.85em",
                  borderRadius: "20px",
                  padding: "4px 14px",
                }}
              >
                <FiExternalLink /> Verify
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>

      {/* Lightbox Modal */}
      {img && (
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          size="lg"
          centered
          contentClassName="certificate-modal-content"
          style={{ backdropFilter: "blur(6px)" }}
        >
          <Modal.Header
            closeButton
            closeVariant="white"
            style={{
              background: "#060d1d",
              borderBottom: "1px solid rgba(0, 225, 217, 0.25)",
              color: "#ffffff",
            }}
          >
            <Modal.Title style={{ fontSize: "1.1em", fontWeight: "700", color: "#f8fafc" }}>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ background: "#030712", textAlign: "center", padding: "16px" }}>
            <img
              src={img}
              alt={title}
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
                borderRadius: "8px",
                boxShadow: "0 0 30px rgba(0, 0, 0, 0.85)",
              }}
            />
          </Modal.Body>
          {link && (
            <Modal.Footer
              style={{
                background: "#060d1d",
                borderTop: "1px solid rgba(0, 225, 217, 0.25)",
                justifyContent: "space-between",
              }}
            >
              <span style={{ color: "#00e1d9", fontSize: "0.9em", fontWeight: "600" }}>{issuer}</span>
              <Button
                variant="primary"
                size="sm"
                href={link}
                target="_blank"
                rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
              >
                <FiExternalLink /> Verify Official Credential
              </Button>
            </Modal.Footer>
          )}
        </Modal>
      )}
    </>
  );
}

export default CertificateCards;
