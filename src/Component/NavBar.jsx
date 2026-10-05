import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { navItems, profile } from "../data/resume";
import "../CSS/NavBar.css";

const NavBar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false });

  const progressRef = useRef(null);
  const linksRef = useRef({});
  const listRef = useRef(null);
  const toggleRef = useRef(null);

  // Scroll state: background and reading progress - one rAF-throttled listener.
  useEffect(() => {
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;

      setIsScrolled(y > 24);
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Slide the active pill under the current section's link.
  useLayoutEffect(() => {
    const measure = () => {
      const link = linksRef.current[activeSection];
      if (!link || !listRef.current) {
        setIndicator((prev) => ({ ...prev, visible: false }));
        return;
      }
      setIndicator({ left: link.offsetLeft, width: link.offsetWidth, visible: true });
    };

    measure();
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeSection]);

  // Mobile menu: lock page scroll and close on Escape.
  useEffect(() => {
    document.body.classList.toggle("no-scroll", isMenuOpen);
    if (!isMenuOpen) return undefined;

    const onKey = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 900px)");
    const onChange = (event) => event.matches && setIsMenuOpen(false);
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const navClass = [
    "navbar",
    isScrolled && "navbar--scrolled",
    isMenuOpen && "navbar--open",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={navClass}>
      <div className="navbar-progress" ref={progressRef} aria-hidden="true"></div>

      <nav className="navbar-shell" aria-label="Primary">
        <a href="#hero" className="navbar-logo" onClick={closeMenu} aria-label={`${profile.name} - back to top`}>
          <span className="navbar-logo-mark" aria-hidden="true">
            RU
          </span>
          <span className="navbar-logo-text">
            {profile.shortName}
            <span className="navbar-logo-dot" aria-hidden="true"></span>
          </span>
        </a>

        <ul className="navbar-links" ref={listRef}>
          <li
            className="navbar-indicator"
            aria-hidden="true"
            style={{
              transform: `translateX(${indicator.left}px)`,
              width: `${indicator.width}px`,
              opacity: indicator.visible ? 1 : 0,
            }}
          ></li>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                ref={(node) => (linksRef.current[item.id] = node)}
                className={`navbar-link ${activeSection === item.id ? "is-active" : ""}`}
                aria-current={activeSection === item.id ? "true" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm navbar-resume"
          >
            Resume
            <Icon name="arrowUpRight" size={15} className="btn-icon-lift" />
          </a>

          <button
            ref={toggleRef}
            type="button"
            className="navbar-toggle"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="navbar-toggle-line"></span>
            <span className="navbar-toggle-line"></span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`mobile-menu ${isMenuOpen ? "is-open" : ""}`}
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
      >
        <ul className="mobile-menu-links">
          {navItems.map((item, index) => (
            <li key={item.id} style={{ "--i": index }}>
              <a
                href={`#${item.id}`}
                onClick={closeMenu}
                className={`mobile-menu-link ${activeSection === item.id ? "is-active" : ""}`}
              >
                <span className="mobile-menu-index">0{index + 1}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-menu-footer" style={{ "--i": navItems.length }}>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View Resume
            <Icon name="arrowUpRight" size={16} className="btn-icon-lift" />
          </a>
          <a href={`mailto:${profile.email}`} className="mobile-menu-email">
            {profile.email}
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
