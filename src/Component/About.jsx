import React from "react";
import Reveal from "./Reveal";
import Icon from "./Icon";
import RichText from "./RichText";
import SectionHeader from "./SectionHeader";
import { about } from "../data/resume";
import "../CSS/About.css";

const About = () => (
  <section id="about" className="section" aria-labelledby="about-title">
    <div className="container">
      <div className="about-layout">
        <div className="about-main">
          <SectionHeader
            id="about-title"
            index="01"
            eyebrow="About me"
            title="Engineering interfaces that feel"
            accent="effortless."
          />

          <div className="about-copy">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal as="p" key={index} delay={index * 90}>
                <RichText text={paragraph} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal as="aside" className="about-facts surface-card" delay={120} aria-label="Quick facts">
          <h3 className="about-facts-title">At a glance</h3>
          <dl>
            {about.facts.map((fact) => (
              <div className="about-fact" key={fact.label}>
                <span className="about-fact-icon" aria-hidden="true">
                  <Icon name={fact.icon} size={18} />
                </span>
                <div>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <ul className="about-strengths">
        {about.strengths.map((item, index) => (
          <Reveal as="li" key={item.title} className="strength-card surface-card" delay={index * 80}>
            <span className="strength-icon" aria-hidden="true">
              <Icon name={item.icon} size={20} />
            </span>
            <h3 className="strength-title">{item.title}</h3>
            <p className="strength-text">{item.text}</p>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

export default About;
