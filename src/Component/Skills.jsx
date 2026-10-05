import React from "react";
import Reveal from "./Reveal";
import Icon from "./Icon";
import SectionHeader from "./SectionHeader";
import { professionalSkills, skillGroups } from "../data/resume";
import "../CSS/Skills.css";

const WIDE_GROUPS = new Set(["Frontend", "Cloud & Deployment", "Workflow & Version Control"]);

const SkillLogo = ({ src }) =>
  src ? (
    <img
      src={src}
      alt=""
      width="20"
      height="20"
      loading="lazy"
      decoding="async"
      onError={(event) => event.currentTarget.parentElement.classList.add("is-fallback")}
    />
  ) : null;

const Skills = () => (
  <section id="skills" className="section section--alt" aria-labelledby="skills-title">
    <div className="container">
      <SectionHeader
        id="skills-title"
        index="04"
        eyebrow="Skills & tech stack"
        title="The toolkit behind"
        accent="the work"
        description="Organised by how I use them day to day — from component architecture and state, through build tooling, to shipping on AWS."
      />

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.title}
            className={`skill-card surface-card ${WIDE_GROUPS.has(group.title) ? "skill-card--wide" : ""}`}
            delay={(index % 4) * 70}
          >
            <header className="skill-card-header">
              <span className="skill-card-icon" aria-hidden="true">
                <Icon name={group.icon} size={18} />
              </span>
              <h3 className="skill-card-title">{group.title}</h3>
              <span className="skill-card-count">{group.skills.length}</span>
            </header>

            <ul className="skill-list">
              {group.skills.map((skill) => (
                <li key={skill.name} className="skill-item">
                  <span className={`skill-item-logo ${skill.logo ? "" : "is-fallback"}`} aria-hidden="true">
                    <SkillLogo src={skill.logo} />
                  </span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}

        <Reveal className="skill-card skill-card--soft surface-card" delay={210}>
          <header className="skill-card-header">
            <span className="skill-card-icon skill-card-icon--rose" aria-hidden="true">
              <Icon name="users" size={18} />
            </span>
            <h3 className="skill-card-title">Ways of Working</h3>
          </header>

          <ul className="soft-skill-list">
            {professionalSkills.map((skill) => (
              <li key={skill}>
                <Icon name="check" size={14} strokeWidth={2.25} />
                {skill}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Skills;
