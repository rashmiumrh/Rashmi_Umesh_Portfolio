import React from "react";
import { techStrip } from "../data/resume";
import "../CSS/TechStrip.css";

const TechItem = ({ tech }) => (
  <li className="tech-strip-item">
    <img src={tech.logo} alt="" width="22" height="22" loading="lazy" decoding="async" />
    <span>{tech.name}</span>
  </li>
);

const TechStrip = () => (
  <section className="tech-strip" aria-label="Technologies I work with">
    <p className="tech-strip-label">Technologies I ship with</p>
    <div className="tech-strip-viewport">
      <ul className="tech-strip-track">
        {techStrip.map((tech) => (
          <TechItem key={tech.name} tech={tech} />
        ))}
      </ul>
      {/* Duplicate set makes the loop seamless; hidden from assistive tech. */}
      <ul className="tech-strip-track" aria-hidden="true">
        {techStrip.map((tech) => (
          <TechItem key={tech.name} tech={tech} />
        ))}
      </ul>
    </div>
  </section>
);

export default TechStrip;
