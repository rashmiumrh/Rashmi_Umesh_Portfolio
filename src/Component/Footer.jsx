import React from "react";
import Icon from "./Icon";
import { navItems, profile } from "../data/resume";
import "../CSS/Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#hero" className="footer-name">
            {profile.name}
            <span className="navbar-logo-dot" aria-hidden="true"></span>
          </a>
          <p>
            {profile.title} · {profile.roles[0]}
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="footer-social">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
            <Icon name="linkedin" size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Send an email">
            <Icon name="mail" size={18} />
          </a>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" aria-label="View resume">
            <Icon name="fileText" size={18} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} {profile.name}. Designed &amp; built with React.js.
        </p>
        <a href="#hero" className="footer-top-link">
          Back to top
          <Icon name="arrowUp" size={15} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
