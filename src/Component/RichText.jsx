import React from "react";

// Renders **emphasis** markers from the resume data as highlighted text.
const RichText = ({ text }) =>
  text.split("**").map((part, index) =>
    index % 2 === 1 ? <strong key={index}>{part}</strong> : part,
  );

export default RichText;
