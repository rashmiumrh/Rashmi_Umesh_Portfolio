import React, { useEffect } from "react";
import NavBar from "./Component/NavBar";
import Hero from "./Component/Hero";
import TechStrip from "./Component/TechStrip";
import About from "./Component/About";
import Experience from "./Component/Experience";
import Projects from "./Component/Projects";
import Skills from "./Component/Skills";
import Education from "./Component/Education";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import useActiveSection from "./hooks/useActiveSection";
import { navItems } from "./data/resume";
import { scrollToSection } from "./utils/scroll";

const sectionIds = navItems.map((item) => item.id);

const App = () => {
  const activeSection = useActiveSection(sectionIds);

  // Every in-page link (header, menu, buttons, footer) lands with its content just below the fixed header.
  useEffect(() => {
    const onClick = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;

      const id = link.getAttribute("href").slice(1);
      if (!document.getElementById(id)) return;

      event.preventDefault();
      document.body.classList.remove("no-scroll"); // mobile menu may still be closing
      scrollToSection(id);
      window.history.replaceState(null, "", `#${id}`);
    };

    document.addEventListener("click", onClick);

    // Opening a shared link like /#projects should use the same offset.
    const initial = window.location.hash.slice(1);
    if (initial) {
      document.fonts.ready.then(() => requestAnimationFrame(() => scrollToSection(initial, { smooth: false })));
    }

    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="app">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <NavBar activeSection={activeSection} />
      <main id="main">
        <Hero />
        <TechStrip />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
