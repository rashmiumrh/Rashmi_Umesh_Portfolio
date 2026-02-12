import React from "react";
import "../CSS/Portfoliosections.css";

const WorkExperience = ({ isVisible }) => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Novagito AI Pvt Ltd",
      location: "Bangalore, India",
      period: "October 2024 - Present",
      responsibilities: [
        "Developed responsive front-end for NG360 using React.js and Tailwind CSS, improving user engagement for N-Cogito, N-Desk, N-IQ, and N-Secure",
        "Successfully delivered 6+ projects across various domains including AI-driven platforms, customer engagement solutions, and business analytics tools",
        "Integrated RESTful APIs for real-time data in AI-driven customer solutions, reducing data retrieval time",
        "Led collaborative team efforts in Agile sprints, coordinating with cross-functional teams including designers, backend developers, and product managers to optimize workflows",
        // "Mentored junior developers and conducted code reviews to maintain code quality and foster team growth"
      ],
      current: true,
    },
    {
      title: "Junior Software Engineer",
      company: "ezAtlas Pvt Ltd",
      location: "Bangalore, India",
      period: "June 2023 - June 2024",
      responsibilities: [
        "Developed scalable front-end applications using React.js, adhering to modern coding standards and best practices",
        "Maintained code quality through regular code reviews and collaborative design practices",
        "Resolved issues rapidly to enhance the performance and maintainability of applications",
        "Produced clean, efficient code to ensure optimal user experiences",
      ],
      current: false,
    },
  ];

  return (
    <div className={`section-content ${isVisible ? "animate-fadeInUp" : ""}`}>
      <div className="section-intro">
        <h3 className="section-title">Professional Experience</h3>
        <p className="section-subtitle">
          Nearly 2.5 years of building impactful software solutions
        </p>
      </div>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker">
              {exp.current && <div className="timeline-pulse"></div>}
            </div>

            <div className="timeline-content card">
              <div className="card-header">
                {exp.current && (
                  <span className="card-badge badge-current">Current</span>
                )}
                <span className="card-period">{exp.period}</span>
              </div>

              <h4 className="card-title">{exp.title}</h4>
              <p className="card-company">
                <svg
                  className="company-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {exp.company}, {exp.location}
              </p>

              <ul className="responsibilities-list">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
