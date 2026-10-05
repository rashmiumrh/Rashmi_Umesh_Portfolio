import React, { useState } from "react";
import Reveal from "./Reveal";
import Icon from "./Icon";
import SectionHeader from "./SectionHeader";
import { projectFilters, projects } from "../data/resume";
import "../CSS/Projects.css";

const hostname = (url) => new URL(url).hostname.replace(/^www\./, "");

// Cursor-follow spotlight; written to CSS vars so React never re-renders on move.
const trackPointer = (event) => {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  card.style.setProperty("--my", `${event.clientY - rect.top}px`);
};

// Live projects show a capture of the site's homepage; others fall back to an icon panel.
const ProjectVisual = ({ project }) => {
  const [loaded, setLoaded] = useState(false);

  const frame = (
    <>
      <div className="project-visual-bar">
        <span className="project-visual-dots">
          <i></i>
          <i></i>
          <i></i>
        </span>
        <span className="project-visual-url">
          {project.link ? (
            <>
              <Icon name="lock" size={11} />
              {hostname(project.link)}
            </>
          ) : (
            `${project.companyName} · ${project.domain}`
          )}
        </span>
      </div>

      {project.preview ? (
        <div className={`project-visual-shot ${loaded ? "is-loaded" : ""}`}>
          <img
            src={project.preview}
            alt=""
            width="1280"
            height="800"
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
          />
          <span className="project-visual-overlay">
            Visit live site
            <Icon name="arrowUpRight" size={15} />
          </span>
        </div>
      ) : (
        <div className="project-visual-body">
          <span className="project-visual-icon">
            <Icon name={project.icon} size={30} strokeWidth={1.5} />
          </span>
          {project.modules && (
            <span className="project-visual-modules">
              {project.modules.map((module) => (
                <span key={module}>{module}</span>
              ))}
            </span>
          )}
        </div>
      )}
    </>
  );

  // The preview is a mouse shortcut to the site; the footer button is the accessible link.
  return project.link && project.preview ? (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-visual project-visual--live"
      tabIndex={-1}
      aria-hidden="true"
    >
      {frame}
    </a>
  ) : (
    <div className="project-visual" aria-hidden="true">
      {frame}
    </div>
  );
};

const ProjectCard = ({ project, featured }) => (
  <article
    className={`project-card surface-card ${featured ? "project-card--featured" : ""}`}
    onPointerMove={trackPointer}
  >
    <ProjectVisual project={project} />

    <div className="project-body">
      <div className="project-meta">
        <span className="chip chip--accent">{project.domain}</span>
        <span className="project-company">{project.companyName}</span>
      </div>

      <h3 className="project-name">{project.name}</h3>
      <p className="project-tagline">{project.tagline}</p>
      <p className="project-description">{project.description}</p>

      <div className="project-contrib">
        <h4 className="project-contrib-title">My contribution</h4>
        <ul>
          {project.contributions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <footer className="project-footer">
        <ul className="project-tech" aria-label="Technologies used">
          {project.tech.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>

        <div className="project-actions">
          {project.link ? (
            <>
              <span className="project-status">
                <span className="project-status-dot" aria-hidden="true"></span>
                Live
              </span>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-cta"
                aria-label={`View project: ${project.name} (opens in a new tab)`}
              >
                View Project
                <Icon name="arrowUpRight" size={16} />
              </a>
            </>
          ) : (
            <>
              <span className="project-status project-status--muted">Built at {project.companyName}</span>
              <span className="project-private">
                <Icon name="lock" size={14} />
                No public link
              </span>
            </>
          )}
        </div>
      </footer>
    </div>
  </article>
);

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const visible = projects.filter((p) => filter === "all" || p.company === filter);

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <div className="projects-head">
          <SectionHeader
            id="projects-title"
            index="03"
            eyebrow="Selected work"
            title="Projects I've"
            accent="delivered"
            description="Production applications across AI, travel, healthcare, commerce and enterprise - built with React.js and shipped to real users."
          />

          <Reveal className="projects-filter" role="group" aria-label="Filter projects by company">
            {projectFilters.map((option) => {
              const count = projects.filter((p) => option.id === "all" || p.company === option.id).length;
              return (
                <button
                  key={option.id}
                  type="button"
                  className={`projects-filter-btn ${filter === option.id ? "is-active" : ""}`}
                  aria-pressed={filter === option.id}
                  onClick={() => setFilter(option.id)}
                >
                  {option.label}
                  <span className="projects-filter-count">{count}</span>
                </button>
              );
            })}
          </Reveal>
        </div>

        <ul className={`projects-grid ${filter === "all" ? "projects-grid--all" : ""}`} key={filter}>
          {visible.map((project, index) => (
            <Reveal
              as="li"
              key={project.id}
              className={project.featured && filter === "all" ? "projects-grid-featured" : ""}
              delay={(index % 3) * 90}
            >
              <ProjectCard project={project} featured={project.featured && filter === "all"} />
            </Reveal>
          ))}
        </ul>

        <p className="projects-note">
          Live links open the production sites in a new tab.
        </p>
      </div>
    </section>
  );
};

export default Projects;
