import { useEffect, useState } from "react";
import { NAVIGATE_EVENT, getHeaderOffset } from "../utils/scroll";

// Scroll spy: the active section is the last one whose top has passed the reading line.
const useActiveSection = (ids) => {
  const [activeId, setActiveId] = useState("");
  const key = ids.join(",");

  useEffect(() => {
    const sectionIds = key.split(",");
    let ticking = false;
    let locked = false;
    let unlockTimer;

    const compute = () => {
      ticking = false;
      const line = window.scrollY + Math.max(getHeaderOffset(), window.innerHeight * 0.4);
      let current = "";
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top + window.scrollY <= line) current = id;
      });
      setActiveId(current);
    };

    // While a header click is scrolling the page, keep the clicked item active.
    const holdLock = () => {
      clearTimeout(unlockTimer);
      unlockTimer = setTimeout(() => (locked = false), 180);
    };

    const onNavigate = (event) => {
      locked = true;
      setActiveId(event.detail);
      holdLock();
    };

    const onScroll = () => {
      if (locked) return holdLock();
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(compute);
      }
    };

    compute();
    window.addEventListener(NAVIGATE_EVENT, onNavigate);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      clearTimeout(unlockTimer);
      window.removeEventListener(NAVIGATE_EVENT, onNavigate);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [key]);

  return activeId;
};

export default useActiveSection;
