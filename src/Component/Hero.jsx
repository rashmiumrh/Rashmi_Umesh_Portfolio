import React, { useEffect, useRef, useState } from "react";
import "../CSS/Hero.css";

const Hero = ({ setActiveNav }) => {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setActiveNav("Home");
        }
      },
      { threshold: 0.5 },
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [setActiveNav]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const yOffset = -80;
      const y =
        aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" ref={heroRef} className="hero-section">
      <div className="hero-background">
        <div className="hero-gradient-orb hero-orb-1"></div>
        <div className="hero-gradient-orb hero-orb-2"></div>
        <div className="hero-gradient-orb hero-orb-3"></div>
      </div>

      <div className="hero-content ">
        <div
          className={`hero-text mt-14 md:mt-4 ${isVisible ? "animate-fadeInUp" : ""}`}
        >
          <span className="hero-greeting">Hello, I'm</span>

          <h1 className="hero-title">
            <span className="hero-name gradient-text">Rashmi Umesh</span>
          </h1>

          <div className="hero-subtitle-wrapper">
            <span className="decorative-line"></span>
            <h2 className="hero-subtitle">Software Engineer</h2>
            <span className="decorative-line"></span>
          </div>

          <p
            className={`hero-description ${isVisible ? "animate-fadeInUp stagger-2" : ""}`}
          >
            Crafting elegant, user-centric web experiences with React.js and
            modern frontend technologies. Nearly 2.5 years of experience building
            responsive, high-performance applications that users love.
          </p>

          <div
            className={`hero-cta ${isVisible ? "animate-fadeInUp stagger-3" : ""}`}
          >
            <button className="btn btn-primary" onClick={scrollToAbout}>
              <span>Explore My Work </span>
              {/* <svg
      className="btn-icon"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M7.5 15L12.5 10L7.5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg> */}
            </button>

            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </div>

          <div
            className={`hero-stats ${isVisible ? "animate-fadeInUp stagger-4" : ""}`}
          >
            <div className="hero-stat">
              <span className="stat-number gradient-text">2.5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider"></div>
            <div className="hero-stat">
              <span className="stat-number gradient-text">6+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-divider"></div>
            <div className="hero-stat">
              <span className="stat-number gradient-text">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>

        <div
          className={`hero-scroll-indicator ${isVisible ? "animate-fadeInUp stagger-5" : ""}`}
        >
          <span className="scroll-text">Scroll to explore</span>
          <div className="scroll-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
