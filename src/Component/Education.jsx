import React from "react";
import "../CSS/Portfoliosections.css";

const Education = ({ isVisible }) => {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "MVJ College of Engineering, Bangalore",
      period: "2018 - 2022",
      score: "7.18 CGPA",
      description: "Comprehensive computer science education focusing on software development, algorithms, and web technologies."
    },
    {
      degree: "Pre-University Course (PCMB)",
      institution: "Shree Vasavi PU College, Challakere",
      period: "2016 - 2018",
      score: "72%",
      description: "Strong foundation in Physics, Chemistry, Mathematics, and Biology."
    }
  ];

  return (
    <div className={`section-content ${isVisible ? "animate-fadeInUp" : ""}`}>
      <div className="section-intro">
        <h3 className="section-title">Academic Background</h3>
        <p className="section-subtitle">
          Building a strong foundation in computer science and engineering
        </p>
      </div>

      <div className="section-grid section-grid-2">
        {education.map((edu, index) => (
          <div key={index} className="education-card card">
            <div className="card-header">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 14L21 9L12 4L3 9L12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 14L12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M6.5 11.5V16.5C6.5 16.5 8 19 12 19C16 19 17.5 16.5 17.5 16.5V11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="card-badge">{edu.period}</span>
            </div>
            
            <h4 className="card-title">{edu.degree}</h4>
            <p className="card-institution">{edu.institution}</p>
            
            <div className="card-score">
              <span className="score-label">Academic Performance:</span>
              <span className="score-value gradient-text">{edu.score}</span>
            </div>
            
            <p className="card-description">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;