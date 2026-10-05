import { useEffect, useRef } from "react";

// One observer shared by every revealed element keeps scroll work minimal.
let sharedObserver = null;

const getObserver = () => {
  if (sharedObserver) return sharedObserver;

  sharedObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        sharedObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  );

  return sharedObserver;
};

const useReveal = () => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (!("IntersectionObserver" in window)) {
      node.classList.add("is-revealed");
      return undefined;
    }

    const observer = getObserver();
    observer.observe(node);
    return () => observer.unobserve(node);
  }, []);

  return ref;
};

export default useReveal;
