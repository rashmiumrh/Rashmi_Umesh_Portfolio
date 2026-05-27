import React, { useEffect, useRef, useState } from "react";
import portfolioImage from "../assets/portfolio.jpg";
import "../CSS/About.css";

const About = ({ setActiveNav }) => {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setActiveNav("About");
        }
      },
      { threshold: 0.3 },
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, [setActiveNav]);
  const getExperience = () => {
    const startDate = new Date(2023, 5); // June 2023
    const currentDate = new Date();

    let totalMonths =
      (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
      (currentDate.getMonth() - startDate.getMonth());

    totalMonths -= 2; // subtract 2 months

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years === 0) {
      return `${months} months`;
    }

    if (months === 0) {
      return `${years} year${years > 1 ? "s" : ""}`;
    }

    return `${years}.${months} years`;
  };
  const skills = [
    "HTML/CSS",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Redux and Context Api",
    "TypeScript",
  ];

  return (
    <section id="about" ref={aboutRef} className="about-section bg-grain">
      <div className="container-wide">
        <div className="about-content">
          <div
            className={`about-image-wrapper ${isVisible ? "animate-fadeInLeft" : ""}`}
          >
            <div className="image-decorative-frame">
              <img
                src={portfolioImage}
                alt="Rashmi Umesh - Software Engineer"
                className="about-image"
              />
              <div className="image-glow"></div>
            </div>
          </div>

          <div
            className={`about-text ${isVisible ? "animate-fadeInRight" : ""}`}
          >
            <div className="section-label">
              <span className="decorative-dot"></span>
              <span>Get to know me</span>{" "}
              <span className="decorative-dot"></span>
            </div>

            <h2 className="about-title">
              Passionate about creating
              <span className="gradient-text">
                {" "}
                beautiful digital experiences
              </span>
            </h2>

            <div className="about-description">
              <p>
                I'm <strong>Rashmi Umesh</strong>, a dedicated Software Engineer
                with nearly <strong>{getExperience()}</strong> of experience
                crafting innovative, user-centric web applications. My journey
                in software development has been driven by a passion for
                creating seamless digital experiences that users love.
              </p>

              <p>
                Specializing in <strong>React.js</strong> and{" "}
                <strong>Tailwind CSS</strong>, I build responsive, visually
                stunning solutions that combine clean code with performance
                optimization. I believe great software is where elegant design
                meets functional excellence.
              </p>

              <p>
                Currently working at <strong>Novagito AI</strong>, I've
                contributed to AI-driven customer solutions including chatbot
                interfaces, analytics dashboards, and the NG360 CXaaS platform.
                Previously at <strong>ezAtlas</strong>, I developed scalable
                applications for asset and distributor management systems.
              </p>

              <p>
                I'm excited to connect with fellow developers, explore new
                opportunities, and continue pushing the boundaries of what's
                possible in web development. Let's build something amazing
                together!
              </p>
            </div>

            <div className="skills-section">
              <h3 className="skills-title">Core Technologies</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className={`skill-tag ${isVisible ? `animate-fadeInUp stagger-${index + 1}` : ""}`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="about-action">
              <a href="#portfolio" className="btn btn-primary">
                View My Work
                {/* <svg className="btn-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
