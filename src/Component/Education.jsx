import React from "react";
import Reveal from "./Reveal";
import Icon from "./Icon";
import SectionHeader from "./SectionHeader";
import { certifications, education } from "../data/resume";
import "../CSS/Education.css";

const Education = () => (
  <section id="education" className="section" aria-labelledby="education-title">
    <div className="container">
      <SectionHeader
        id="education-title"
        index="05"
        eyebrow="Education & certifications"
        title="Foundations &"
        accent="credentials"
      />

      <div className="education-layout">
        <Reveal as="article" className="education-card surface-card">
          <span className="education-icon" aria-hidden="true">
            <Icon name="graduationCap" size={26} strokeWidth={1.5} />
          </span>
          <p className="education-period">{education.period}</p>
          <h3 className="education-degree">{education.degree}</h3>
          <p className="education-institution">
            {education.institution}
            <span>
              <Icon name="mapPin" size={14} />
              {education.location}
            </span>
          </p>
        </Reveal>

        <div className="cert-block">
          <Reveal as="h3" className="cert-heading">
            <Icon name="award" size={18} />
            Certifications
          </Reveal>

          <ul className="cert-grid">
            {certifications.map((cert, index) => (
              <Reveal as="li" key={cert.title} delay={index * 70}>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-card surface-card"
                  aria-label={`${cert.title} certification by ${cert.issuer}, ${cert.year} - view credential (opens in a new tab)`}
                >
                  <span className="cert-card-top">
                    <span className="cert-issuer">{cert.issuer}</span>
                    <Icon name="arrowUpRight" size={16} className="cert-arrow" />
                  </span>
                  <span className="cert-title">{cert.title}</span>
                  <span className="cert-meta">Certified · {cert.year}</span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
