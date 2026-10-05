import React from "react";
import Reveal from "./Reveal";

const SectionHeader = ({ index, eyebrow, title, accent, description, align = "left", id }) => (
  <Reveal as="header" className={`section-header section-header--${align}`}>
    <p className="section-eyebrow">
      <span className="section-index">{index}</span>
      <span className="section-eyebrow-line" aria-hidden="true"></span>
      {eyebrow}
    </p>
    <h2 className="section-title" id={id}>
      {title} {accent && <span className="gradient-text">{accent}</span>}
    </h2>
    {description && <p className="section-description">{description}</p>}
  </Reveal>
);

export default SectionHeader;
