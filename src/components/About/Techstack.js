import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiCsharp,
  SiDotnet,
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMicrosoftsqlserver,
  SiGithub,
} from "react-icons/si";

// الاحتفاظ بالملفات التي كانت مستخدمة مسبقاً ومتوافقة مع الـ CV
import Redis from "../../Assets/TechIcons/Redis.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";

function Techstack() {
  const skills = [
    { name: "C#", icon: <SiCsharp fontSize="28px" color="#239120" /> },
    { name: ".NET", icon: <SiDotnet fontSize="28px" color="#512BD4" /> },
    { name: "Angular", icon: <SiAngular fontSize="28px" color="#DD0031" /> },
    {
      name: "TypeScript",
      icon: <SiTypescript fontSize="28px" color="#3178C6" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript fontSize="28px" color="#F7DF1E" />,
    },
    { name: "HTML5", icon: <SiHtml5 fontSize="28px" color="#E34F26" /> },
    { name: "CSS3", icon: <SiCss3 fontSize="28px" color="#1572B6" /> },
    {
      name: "Tailwind",
      icon: <SiTailwindcss fontSize="28px" color="#06B6D4" />,
    },
    {
      name: "SQL Server",
      icon: <SiMicrosoftsqlserver fontSize="28px" color="#CC292B" />,
    },
    { name: "Redis", icon: <img src={Redis} alt="Redis" /> },
    { name: "Git", icon: <img src={Git} alt="Git" /> },
    { name: "GitHub", icon: <SiGithub fontSize="28px" color="#ffffff" /> },
    { name: "Postman", icon: <img src={Postman} alt="Postman" /> },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          {skill.icon}
          {skill.name && <div className="tech-icons-text">{skill.name}</div>}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
