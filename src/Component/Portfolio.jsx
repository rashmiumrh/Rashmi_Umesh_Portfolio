import React, { useEffect, useRef, useState } from "react";
import "../CSS/Portfolio.css";
import Education from "./Education";
import WorkExperience from "./Workexperience";
import Projects from "./Projects";
import Skills from "./Skills";
import Certifications from "./Certifications";

const Portfolio = ({ setActiveNav }) => {
  const portfolioRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("education");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setActiveNav("Portfolio");
        }
      },
      { threshold: 0.2 },
    );

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    return () => {
      if (portfolioRef.current) {
        observer.unobserve(portfolioRef.current);
      }
    };
  }, [setActiveNav]);

  const sections = [
    { id: "education", label: "Education" },
    { id: "work-experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "certifications", label: "Certifications" },
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case "education":
        return <Education isVisible={isVisible} />;
      case "work-experience":
        return <WorkExperience isVisible={isVisible} />;
      case "projects":
        return <Projects isVisible={isVisible} />;
      case "skills":
        return <Skills isVisible={isVisible} />;
      case "certifications":
        return <Certifications isVisible={isVisible} />;
      default:
        return <Education isVisible={isVisible} />;
    }
  };

  return (
    <section
      id="portfolio"
      ref={portfolioRef}
      className="portfolio-section bg-grain"
    >
      <div className="container-wide">
        <div
          className={`portfolio-header ${isVisible ? "animate-fadeInUp" : ""}`}
        >
          <div className="section-label">
            <span className="decorative-dot"></span>
            <span>My Journey</span>
          </div>

          <h2 className="portfolio-title">
            Professional
            <span className="gradient-text"> Portfolio</span>
          </h2>

          <p className="portfolio-description">
            Explore my journey through education, professional experiences,
            impactful projects, technical expertise, and certifications that
            shape my career as a software engineer.
          </p>
        </div>

        <div
          className={`portfolio-navigation ${isVisible ? "animate-fadeInUp stagger-2" : ""}`}
        >
          {sections.map((section) => (
            <button
              key={section.id}
              className={`portfolio-nav-btn ${activeSection === section.id ? "active" : ""}`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>

        <div
          className={`portfolio-content ${isVisible ? "animate-fadeInUp stagger-3" : ""}`}
        >
          {renderActiveSection()}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
