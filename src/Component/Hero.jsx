import React, { useEffect, useState } from "react";
import portfolioImage from "../assets/portfolio.jpg";
import Icon from "./Icon";
import Counter from "./Counter";
import { profile, stats } from "../data/resume";
import { getExperienceYears } from "../utils/experience";
import "../CSS/Hero.css";

const RoleRotator = ({ roles }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2800);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <span className="role-rotator">
      <span className="sr-only">{roles.join(", ")}</span>
      <span className="role-rotator-track" aria-hidden="true">
        {roles.map((role, i) => (
          <span key={role} className={`role-rotator-item ${i === index ? "is-active" : ""}`}>
            {role}
          </span>
        ))}
      </span>
    </span>
  );
};

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const years = getExperienceYears();

  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="hero-backdrop" aria-hidden="true">
        <div className="hero-orb hero-orb--gold"></div>
        <div className="hero-orb hero-orb--rose"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="hero-kicker hero-enter" style={{ "--d": "0ms" }}>
            <span className="hero-kicker-dot" aria-hidden="true"></span>
            {profile.title} · {profile.location}
          </p>

          <h1 id="hero-title" className="hero-title hero-enter" style={{ "--d": "90ms" }}>
            <span className="hero-greeting">Hello, I'm</span>
            <span className="gradient-text">{profile.name}</span>
          </h1>

          <p className="hero-role hero-enter" style={{ "--d": "180ms" }}>
            <span className="hero-role-label">Software Engineer -</span>
            <RoleRotator roles={profile.roles} />
          </p>

          <p className="hero-intro hero-enter" style={{ "--d": "270ms" }}>
            Software Engineer with {years}+ years of experience {profile.intro}
          </p>

          <div className="hero-actions hero-enter" style={{ "--d": "360ms" }}>
            <a href="#projects" className="btn btn-primary">
              View Projects
              <Icon name="arrowRight" size={17} className="btn-icon-shift" />
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <Icon name="fileText" size={17} />
              View Resume
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me
              <Icon name="arrowRight" size={16} className="btn-icon-shift" />
            </a>
          </div>

          <ul className="hero-stack hero-enter" style={{ "--d": "450ms" }} aria-label="Primary stack">
            {profile.heroStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>

        <div className="hero-visual hero-enter" style={{ "--d": "200ms" }}>
          <div className="hero-portrait">
            <div className="hero-portrait-ring" aria-hidden="true"></div>
            <div className={`hero-portrait-frame ${imageLoaded ? "is-loaded" : ""}`}>
              <img
                src={portfolioImage}
                alt="Portrait of Rashmi Umesh"
                width="480"
                height="600"
                fetchPriority="high"
                decoding="async"
                onLoad={() => setImageLoaded(true)}
              />
            </div>

            <div className="hero-badge hero-badge--top">
              <span className="hero-badge-icon">
                <Icon name="briefcase" size={16} />
              </span>
              <span>
                <span className="hero-badge-label">Currently at</span>
                <strong>Novagito AI</strong>
              </span>
            </div>

            <div className="hero-badge hero-badge--bottom">
              <span className="hero-badge-icon">
                <Icon name="code" size={16} />
              </span>
              <span>
                <span className="hero-badge-label">Specialising in</span>
                <strong>React.js &amp; UI</strong>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <dl className="hero-stats hero-enter" style={{ "--d": "520ms" }}>
          {stats.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <dt className="hero-stat-label">{stat.label}</dt>
              <dd className="hero-stat-value">
                <Counter
                  value={stat.value === "experience" ? years : stat.value}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                />
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <a href="#about" className="hero-scroll" aria-label="Scroll to About section">
        <span className="hero-scroll-line" aria-hidden="true"></span>
      </a>
    </section>
  );
};

export default Hero;
