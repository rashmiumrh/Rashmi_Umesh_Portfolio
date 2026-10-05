const HEADER_GAP = 20; // breathing room between the header and a section's heading

export const NAVIGATE_EVENT = "section:navigate";

// Bottom edge of the fixed header, plus a small gap.
export const getHeaderOffset = () => {
  const shell = document.querySelector(".navbar-shell");
  return (shell ? shell.getBoundingClientRect().bottom : 76) + HEADER_GAP;
};

// Scroll position that puts the section's content (not its top padding) right below the header.
export const getSectionScrollTop = (element) => {
  if (element.id === "hero") return 0;
  const paddingTop = parseFloat(getComputedStyle(element).paddingTop) || 0;
  const top = element.getBoundingClientRect().top + window.scrollY + paddingTop - getHeaderOffset();
  return Math.max(0, Math.round(top));
};

export const scrollToSection = (id, { smooth = true } = {}) => {
  const element = document.getElementById(id);
  if (!element) return false;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.dispatchEvent(new CustomEvent(NAVIGATE_EVENT, { detail: id }));
  window.scrollTo({
    top: getSectionScrollTop(element),
    behavior: smooth && !reduceMotion ? "smooth" : "instant",
  });

  // Move focus for keyboard and screen-reader users without a second scroll jump.
  if (!element.hasAttribute("tabindex")) element.setAttribute("tabindex", "-1");
  element.focus({ preventScroll: true });
  return true;
};
