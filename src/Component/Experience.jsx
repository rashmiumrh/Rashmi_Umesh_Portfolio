import React from "react";
import Reveal from "./Reveal";
import Icon from "./Icon";
import RichText from "./RichText";
import SectionHeader from "./SectionHeader";
import { experience } from "../data/resume";
import "../CSS/Experience.css";

const Experience = () => (
  <section id="experience" className="section section--alt" aria-labelledby="experience-title">
    <div className="container">
      <SectionHeader
        id="experience-title"
        index="02"
        eyebrow="Experience"
        title="Where I've"
        accent="built & shipped"
        description="Delivering production front-ends for AI platforms, commerce and enterprise clients — with a focus on performance, quality and reliable delivery."
      />

      <ol className="timeline">
        {experience.map((job, index) => (
          <Reveal as="li" key={job.company} className="timeline-item" delay={index * 100}>
            <div className="timeline-meta">
              <span className="timeline-period">
                <Icon name="calendar" size={15} />
                {job.period}
              </span>
              <span className="timeline-company">{job.company}</span>
              <span className="timeline-location">
                <Icon name="mapPin" size={14} />
                {job.location}
              </span>
            </div>

            <div className="timeline-marker" aria-hidden="true">
              <span className={`timeline-dot ${job.current ? "is-current" : ""}`}></span>
            </div>

            <article className="timeline-card surface-card">
              <header className="timeline-card-header">
                <div>
                  <h3 className="timeline-role">{job.role}</h3>
                  <p className="timeline-card-company">
                    {job.company} · {job.period}
                  </p>
                </div>
                {job.current && <span className="chip chip--accent timeline-badge">Current role</span>}
              </header>

              <p className="timeline-summary">{job.summary}</p>

              <ul className="timeline-highlights">
                {job.highlights.map((item, i) => (
                  <li key={i}>
                    <Icon name="check" size={16} strokeWidth={2.25} className="timeline-check" />
                    <span>
                      <RichText text={item} />
                    </span>
                  </li>
                ))}
              </ul>

              <ul className="timeline-tech" aria-label="Technologies used">
                {job.tech.map((tech) => (
                  <li key={tech} className="chip">
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
