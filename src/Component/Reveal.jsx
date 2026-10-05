import React from "react";
import useReveal from "../hooks/useReveal";

const Reveal = ({ as = "div", delay = 0, className = "", style, children, ...rest }) => {
  const ref = useReveal();
  const Tag = as;

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
