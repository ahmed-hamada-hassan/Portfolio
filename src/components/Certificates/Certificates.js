import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCards from "./CertificateCards";
import Particle from "../Particle";
import { FaLaptopCode, FaUserTie, FaServer, FaRobot } from "react-icons/fa";
import { SiUdemy, SiCoursera } from "react-icons/si";

// ── Brand Icons ─────────────────────────────────────────────────────────────
import programmingAdvicesImg from "../../Assets/programmingadvices.png";

// ── Foundation Certs ───────────────────────────────────────────────
import cert05AlgL2 from "../../Assets/Certificates/certificate-of-completion-for-algorithms-problem-solving-level-2_page-0001.jpg";
import cert06CppL2 from "../../Assets/Certificates/certificate-of-completion-for-introduction-to-programming-using-c-level-2_page-0001.jpg";
import cert07AlgL3 from "../../Assets/Certificates/certificate-of-completion-for-algorithms-problem-solving-level-3_page-0001.jpg";
import cert08AlgL4 from "../../Assets/Certificates/certificate-of-completion-for-08-algorithms-problem-solving-level-4_page-0001.jpg";
import cert09FoundL2 from "../../Assets/Certificates/certificate-of-completion-for-09-foundations-level-2_page-0001.jpg";
import cert10OopConc from "../../Assets/Certificates/certificate-of-completion-for-10-oop-as-it-should-be-concepts_page-0001.jpg";
import cert11OopApp from "../../Assets/Certificates/certificate-of-completion-for-11-oop-as-it-should-be-applications_page-0001.jpg";
import cert12DsL1 from "../../Assets/Certificates/certificate-of-completion-for-12-data-structures-level1_page-0001.jpg";
import cert13AlgL5 from "../../Assets/Certificates/certificate-of-completion-for-13-algorithms-problem-solving-level-5_page-0001.jpg";

// ── Specialized Engineering Certs ────────────────────────────────────
import cert14CsharpL1 from "../../Assets/Certificates/certificate-of-completion-for-14-c-level-1_page-0001.jpg";
import cert15DbSqlL1 from "../../Assets/Certificates/certificate-of-completion-for-15-database-level-1-sql-concepts-and-practice_page-0001.jpg";
import cert16OopCsharp from "../../Assets/Certificates/certificate-of-completion-for-16-oop-as-it-should-be-in-c_page-0001.jpg";
import cert17DbSqlProj from "../../Assets/Certificates/certificate-of-completion-for-17-database-sql-projects-practice_page-0001.jpg";
import cert18CsharpAdo from "../../Assets/Certificates/certificate-of-completion-for-18-c-database-connectivity_page-0001.jpg";
import cert19FullProject from "../../Assets/Certificates/certificate-of-completion-for-19-full-real-project_page-0001.jpg";
import cert20CsharpL2 from "../../Assets/Certificates/certificate-of-completion-for-20-c-programming-level-2_page-0001.jpg";
import cert21DbTsql from "../../Assets/Certificates/certificate-of-completion-for-21-database-level2-concepts-t-sql_page-0001.jpg";
import cert22DsL2Csharp from "../../Assets/Certificates/certificate-of-completion-for-22-data-structures-level-2-in-c_page-0001.jpg";
import cert24WinServices from "../../Assets/Certificates/certificate-of-completion-for-24-windows-services_page-0001.jpg";
import certHtmlDeepDive from "../../Assets/Certificates/certificate-of-completion-for-html-deep-dive_page-0001.jpg";
import certCssDeepDive from "../../Assets/Certificates/certificate-of-completion-for-css-foundations-deep-dive_page-0001.jpg";
import certJsEssentials from "../../Assets/Certificates/certificate-of-completion-for-start-coding-with-javascript-beginner-s-essentials-guide_page-0001.jpg";
import certSolidPrinciples from "../../Assets/Certificates/certificate-of-completion-for-solid-principles_page-0001.jpg";
import certRestfulApi from "../../Assets/Certificates/certificate-of-completion-for-introduction-to-restful-api_page-0001.jpg";
import certJwtAspNet from "../../Assets/Certificates/certificate-of-completion-for-secure-your-apis-jwt-roles-policies-in-asp-net-core_page-0001.jpg";
import certAngular from "../../Assets/Certificates/angular.jpg";
import certTypescript from "../../Assets/Certificates/typescript.jpg";

// ── Business & Soft Skills Certs ─────────────────────────────────────────────
import certMcKinseyForward from "../../Assets/Certificates/Forward20261030-20-q5p7an_page-0001.jpg";
import certLearnHowToLearn from "../../Assets/Certificates/learn-how-to-learn.jpg";

// ── AI Certs ─────────────────────────────────────────────────────────────
import genAI from "../../Assets/Certificates/introduction-to-generative-AI-for-software-development.jpg";

function Certificates() {
  const [activeFilter, setActiveFilter] = useState("all");

  // ── Shared Issuer Logos ───────────────────────────────────────────────────
  const paIcon = (
    <img
      src={programmingAdvicesImg}
      alt="ProgrammingAdvices"
      style={{
        width: "24px",
        height: "24px",
        objectFit: "contain",
        borderRadius: "50%",
      }}
    />
  );

  // ── 1. Core Foundations (certs 5 – 13) ────────────────────────────────────
  const foundationCerts = [
    {
      img: cert05AlgL2,
      title: "Algorithms & Problem-Solving – Level 2",
      issuer: "ProgrammingAdvices",
      date: "Jan 2025",
      description:
        "Strengthened algorithmic thinking and problem-solving skills through structured Level 2 challenges.",
      icon: paIcon,
    },
    {
      img: cert06CppL2,
      title: "Introduction to Programming Using C++ – Level 2",
      issuer: "ProgrammingAdvices",
      date: "Jan 2025",
      description:
        "Advanced core C++ programming concepts including control flow, functions, and arrays.",
      icon: paIcon,
    },
    {
      img: cert07AlgL3,
      title: "Algorithms & Problem Solving – Level 3",
      issuer: "ProgrammingAdvices",
      date: "Jan 2025",
      description:
        "Mastered intermediate algorithmic techniques including recursion and sorting in a competitive context.",
      icon: paIcon,
    },
    {
      img: cert08AlgL4,
      title: "Algorithms & Problem Solving – Level 4",
      issuer: "ProgrammingAdvices",
      date: "Apr 2025",
      description:
        "Tackled advanced algorithmic challenges covering dynamic programming and graph traversal.",
      icon: paIcon,
    },
    {
      img: cert09FoundL2,
      title: "Foundations – Level 2",
      issuer: "ProgrammingAdvices",
      date: "Mar 2025",
      description:
        "Deepened foundational programming knowledge with a focus on problem decomposition and code quality.",
      icon: paIcon,
    },
    {
      img: cert10OopConc,
      title: "OOP as It Should Be – Concepts",
      issuer: "ProgrammingAdvices",
      date: "Mar 2025",
      description:
        "Covered the core pillars of object-oriented programming including encapsulation, inheritance, and polymorphism.",
      icon: paIcon,
    },
    {
      img: cert11OopApp,
      title: "OOP as It Should Be – Applications",
      issuer: "ProgrammingAdvices",
      date: "Apr 2025",
      description:
        "Applied OOP principles to real-world software design patterns and practical application development.",
      icon: paIcon,
    },
    {
      img: cert12DsL1,
      title: "Data Structures – Level 1",
      issuer: "ProgrammingAdvices",
      date: "Apr 2025",
      description:
        "Built a solid understanding of fundamental data structures including linked lists, stacks, and queues.",
      icon: paIcon,
    },
    {
      img: cert13AlgL5,
      title: "Algorithms & Problem Solving – Level 5",
      issuer: "ProgrammingAdvices",
      date: "Apr 2025",
      description:
        "Completed the highest algorithms level covering complex data structures and competitive programming strategies.",
      icon: paIcon,
    },
  ];

  // ── 2. Business & Soft Skills ──────────────────────────────────────────────
  const softSkillsCerts = [
    {
      img: certMcKinseyForward,
      title: "McKinsey Forward Program",
      issuer: "McKinsey.org",
      date: "Jun 2026",
      description:
        "Completed McKinsey's competitive Forward program, developing problem-solving, communication, and future-of-work skills.",
      icon: <FaUserTie color="#38bdf8" />,
    },
    {
      img: certLearnHowToLearn,
      title: "Learning How to Learn",
      issuer: "Coursera / Deep Teaching Solutions",
      date: "May 2026",
      link: "https://coursera.org/verify/R5D4MZHZH1GB",
      description:
        "Applied neuroscience-backed mental tools and techniques to accelerate learning and master difficult subjects.",
      icon: <SiCoursera color="#0056D2" size={24} />,
    },
  ];

  // ── 3. Specialized Engineering (14 +) ─────────────────────────────────────
  const specializedCerts = [
    {
      img: cert14CsharpL1,
      title: "C# – Level 1",
      issuer: "ProgrammingAdvices",
      date: "May 2025",
      description:
        "Gained a solid grounding in C# syntax, types, and .NET fundamentals through a structured graduation course.",
      icon: paIcon,
    },
    {
      img: cert15DbSqlL1,
      title: "Database Level 1 – SQL Concepts & Practice",
      issuer: "ProgrammingAdvices",
      date: "Jun 2025",
      description:
        "Mastered foundational SQL concepts including DDL, DML, and relational database design principles.",
      icon: paIcon,
    },
    {
      img: cert16OopCsharp,
      title: "OOP as It Should Be in C#",
      issuer: "ProgrammingAdvices",
      date: "Jun 2025",
      description:
        "Applied object-oriented programming patterns and best practices specifically in the C# language ecosystem.",
      icon: paIcon,
    },
    {
      img: cert17DbSqlProj,
      title: "Database – SQL Projects & Practice",
      issuer: "ProgrammingAdvices",
      date: "Jul 2025",
      description:
        "Practiced real-world SQL through hands-on database projects covering advanced queries and stored procedures.",
      icon: paIcon,
    },
    {
      img: cert18CsharpAdo,
      title: "C# & Database Connectivity (ADO.NET)",
      issuer: "ProgrammingAdvices",
      date: "Jul 2025",
      description:
        "Integrated C# applications with SQL Server databases using ADO.NET for robust data access and manipulation.",
      icon: paIcon,
    },
    {
      img: cert19FullProject,
      title: "Full Real Project – DVLD",
      issuer: "ProgrammingAdvices",
      date: "Nov 2025",
      description:
        "Developed a complete Driver & Vehicle Licensing Department system applying full-stack C# and SQL skills.",
      icon: paIcon,
    },
    {
      img: cert20CsharpL2,
      title: "C# Programming – Level 2",
      issuer: "ProgrammingAdvices",
      date: "Nov 2025",
      description:
        "Advanced C# proficiency covering LINQ, generics, delegates, and modern .NET programming techniques.",
      icon: paIcon,
    },
    {
      img: cert21DbTsql,
      title: "Database Level 2 – Concepts & T-SQL",
      issuer: "ProgrammingAdvices",
      date: "Nov 2025",
      description:
        "Deepened SQL expertise with T-SQL advanced features including views, triggers, and performance optimization.",
      icon: paIcon,
    },
    {
      img: cert22DsL2Csharp,
      title: "Data Structures Level 2 in C#",
      issuer: "ProgrammingAdvices",
      date: "Dec 2025",
      description:
        "Implemented advanced data structures such as trees, heaps, and graphs in C# for high-performance applications.",
      icon: paIcon,
    },
    {
      img: cert24WinServices,
      title: "Windows Services",
      issuer: "ProgrammingAdvices",
      date: "Dec 2025",
      description:
        "Designed and deployed background Windows Services in C# for automated, long-running server-side tasks.",
      icon: paIcon,
    },
    {
      img: certSolidPrinciples,
      title: "SOLID Principles",
      issuer: "ProgrammingAdvices",
      date: "Jan 2026",
      description:
        "Studied the five SOLID design principles to write maintainable, scalable, and loosely coupled software.",
      icon: paIcon,
    },
    {
      img: certRestfulApi,
      title: "Introduction to RESTful API",
      issuer: "ProgrammingAdvices",
      date: "Jan 2026",
      description:
        "Understood REST architectural principles and learned to design clean, stateless HTTP API endpoints.",
      icon: paIcon,
    },
    {
      img: certJwtAspNet,
      title: "Secure Your APIs: JWT, Roles & Policies in ASP.NET Core",
      issuer: "ProgrammingAdvices",
      date: "Mar 2026",
      description:
        "Implemented JWT-based authentication and role/policy authorization in ASP.NET Core Web APIs.",
      icon: paIcon,
    },
    {
      img: certHtmlDeepDive,
      title: "HTML – Deep Dive",
      issuer: "ProgrammingAdvices",
      date: "Feb 2026",
      description:
        "Explored advanced HTML semantics, accessibility best practices, and modern document structuring techniques.",
      icon: paIcon,
    },
    {
      img: certCssDeepDive,
      title: "CSS Foundations Deep Dive",
      issuer: "ProgrammingAdvices",
      date: "Mar 2026",
      description:
        "Mastered CSS layout systems including Flexbox and Grid along with responsive design and animation fundamentals.",
      icon: paIcon,
    },
    {
      img: certJsEssentials,
      title: "Start Coding with JavaScript: Beginner's Essentials Guide",
      issuer: "ProgrammingAdvices",
      date: "Apr 2026",
      description:
        "Covered JavaScript core concepts including variables, functions, DOM manipulation, and event handling.",
      icon: paIcon,
    },
    {
      img: certTypescript,
      title: "Understanding TypeScript",
      issuer: "Udemy",
      date: "May 2026",
      link: "https://ude.my/UC-2313856e-e956-4b31-abe9-1f5c6bd3a7ea",
      description:
        "Built strong TypeScript proficiency covering types, interfaces, generics, and integration with modern frameworks.",
      icon: <SiUdemy color="#A435F0" size={24} />,
    },
    {
      img: certAngular,
      title: "Angular – The Complete Guide",
      issuer: "Udemy",
      date: "Jul 2026",
      link: "https://ude.my/UC-58c9df4a-3d18-462d-a540-edaac558dcd1",
      description:
        "Completed a comprehensive 56-hour Angular course covering components, services, RxJS, routing, and NgRx.",
      icon: <SiUdemy color="#A435F0" size={24} />,
    },
  ];

  // ── 4. AI ─────────────────────────────────────────────────────────────
  const aiCerts = [
    {
      img: genAI,
      title: "Introduction to Generative AI for Software Development",
      issuer: "Coursera / DeepLearning.AI",
      date: "Nov 2026",
      link: "https://www.coursera.org/account/accomplishments/certificate/165O8V2FHYXZ",
      description:
        "Applied Large Language Models (LLMs) to enhance software development through AI-assisted coding, prompting, and performance analysis.",
      icon: <SiCoursera color="#0056D2" size={24} />,
    },
  ];

  const showFoundation =
    activeFilter === "all" || activeFilter === "foundation";
  const showSpecialized =
    activeFilter === "all" || activeFilter === "specialized";
  const showSoftSkills =
    activeFilter === "all" || activeFilter === "softskills";
  const showAI = activeFilter === "all" || activeFilter === "ai";

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Certifications &amp; <strong className="purple">Achievements</strong>
        </h1>
        <p
          style={{
            color: "#cbd5e1",
            fontSize: "1.02em",
            textAlign: "center",
            maxWidth: "750px",
            margin: "0 auto 30px auto",
          }}
        >
          Verified credentials, foundational engineering paths, and specialized
          technical milestones.
        </p>

        {/* Filter Navigation Buttons */}
        <div className="cert-filter-container">
          <button
            className={`cert-filter-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => setActiveFilter("all")}
          >
            All Credentials (
            {foundationCerts.length +
              specializedCerts.length +
              softSkillsCerts.length +
              aiCerts.length}
            )
          </button>
          <button
            className={`cert-filter-btn ${activeFilter === "foundation" ? "active" : ""}`}
            onClick={() => setActiveFilter("foundation")}
          >
            <FaLaptopCode
              style={{ marginRight: "7px", verticalAlign: "-2px" }}
            />
            Core Foundations ({foundationCerts.length})
          </button>
          <button
            className={`cert-filter-btn ${activeFilter === "specialized" ? "active" : ""}`}
            onClick={() => setActiveFilter("specialized")}
          >
            <FaServer style={{ marginRight: "7px", verticalAlign: "-2px" }} />
            Specialized Engineering ({specializedCerts.length})
          </button>
          <button
            className={`cert-filter-btn ${activeFilter === "softskills" ? "active" : ""}`}
            onClick={() => setActiveFilter("softskills")}
          >
            <FaUserTie style={{ marginRight: "7px", verticalAlign: "-2px" }} />
            Business &amp; Soft Skills ({softSkillsCerts.length})
          </button>
          <button
            className={`cert-filter-btn ${activeFilter === "ai" ? "active" : ""}`}
            onClick={() => setActiveFilter("ai")}
          >
            <FaRobot style={{ marginRight: "7px", verticalAlign: "-2px" }} />
            Artificial Intelligence ({aiCerts.length})
          </button>
        </div>

        {/* Section 1: Core Foundations */}
        {showFoundation && (
          <div style={{ marginBottom: "50px" }}>
            <div className="cert-section-header">
              <FaLaptopCode style={{ color: "#00ff87", fontSize: "1.2em" }} />
              <span>Core Foundations</span>
              <span className="cert-count-badge">{foundationCerts.length}</span>
            </div>
            <Row style={{ justifyContent: "center" }}>
              {foundationCerts.map((cert, index) => (
                <Col
                  md={6}
                  lg={4}
                  key={index}
                  style={{ marginBottom: "25px", display: "flex" }}
                >
                  <CertificateCards
                    img={cert.img}
                    title={cert.title}
                    issuer={cert.issuer}
                    date={cert.date}
                    description={cert.description}
                    link={cert.link}
                    icon={cert.icon}
                  />
                </Col>
              ))}
            </Row>
          </div>
        )}

        {/* Section 2: Specialized Engineering */}
        {showSpecialized && (
          <div style={{ marginBottom: "50px" }}>
            <div className="cert-section-header">
              <FaServer style={{ color: "#00ff87", fontSize: "1.2em" }} />
              <span>Specialized Engineering</span>
              <span className="cert-count-badge">
                {specializedCerts.length}
              </span>
            </div>
            <Row style={{ justifyContent: "center" }}>
              {specializedCerts.map((cert, index) => (
                <Col
                  md={6}
                  lg={4}
                  key={index}
                  style={{ marginBottom: "25px", display: "flex" }}
                >
                  <CertificateCards
                    img={cert.img}
                    title={cert.title}
                    issuer={cert.issuer}
                    date={cert.date}
                    description={cert.description}
                    link={cert.link}
                    icon={cert.icon}
                  />
                </Col>
              ))}
            </Row>
          </div>
        )}

        {/* Section 3: Business & Soft Skills */}
        {showSoftSkills && (
          <div style={{ marginBottom: "50px" }}>
            <div className="cert-section-header">
              <FaUserTie style={{ color: "#00ff87", fontSize: "1.2em" }} />
              <span>Business &amp; Soft Skills</span>
              <span className="cert-count-badge">{softSkillsCerts.length}</span>
            </div>
            <Row style={{ justifyContent: "center" }}>
              {softSkillsCerts.map((cert, index) => (
                <Col
                  md={6}
                  lg={4}
                  key={index}
                  style={{ marginBottom: "25px", display: "flex" }}
                >
                  <CertificateCards
                    img={cert.img}
                    title={cert.title}
                    issuer={cert.issuer}
                    date={cert.date}
                    description={cert.description}
                    link={cert.link}
                    icon={cert.icon}
                  />
                </Col>
              ))}
            </Row>
          </div>
        )}

        {/* Section 4: Artificial Intelligence */}
        {showAI && (
          <div style={{ marginBottom: "50px" }}>
            <div className="cert-section-header">
              <FaRobot style={{ color: "#00ff87", fontSize: "1.2em" }} />
              <span>Artificial Intelligence</span>
              <span className="cert-count-badge">{aiCerts.length}</span>
            </div>
            <Row style={{ justifyContent: "center" }}>
              {aiCerts.map((cert, index) => (
                <Col
                  md={6}
                  lg={4}
                  key={index}
                  style={{ marginBottom: "25px", display: "flex" }}
                >
                  <CertificateCards
                    img={cert.img}
                    title={cert.title}
                    issuer={cert.issuer}
                    date={cert.date}
                    description={cert.description}
                    link={cert.link}
                    icon={cert.icon}
                  />
                </Col>
              ))}
            </Row>
          </div>
        )}
      </Container>
    </Container>
  );
}

export default Certificates;
