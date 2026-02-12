import React from "react";
import react_certi from "../assets/react_certi.png";
import css_certi from "../assets/css_certi.png";
import "../CSS/Portfoliosections.css";

const Certifications = ({ isVisible }) => {
  const certifications = [
    {
      title: "React Basic Certification",
      issuer: "HackerRank",
      date: "July 2024",
      image: react_certi,
      link: "https://drive.google.com/file/d/1zmEynmgCnPEy1pkDffXK0dFNjU_C6LV5/view?pli=1",
      description:
        "Demonstrated proficiency in React fundamentals, component architecture, and state management",
    },
    {
      title: "CSS Basic Certification",
      issuer: "HackerRank",
      date: "July 2024",
      image: css_certi,
      link: "https://drive.google.com/file/d/1ElPNH-iPJ0PDJ3USPSSN_shT5kyYNDUA/view",
      description:
        "Validated expertise in CSS styling, layouts, responsive design, and modern CSS techniques",
    },
  ];

  return (
    <div className={`section-content ${isVisible ? "animate-fadeInUp" : ""}`}>
      <div className="section-intro">
        <h3 className="section-title">Certifications</h3>
        <p className="section-subtitle">
          Continuous learning and skill validation through professional
          certifications
        </p>
      </div>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card card">
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certification-image-link"
            >
              <div className="certification-image-wrapper">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="certification-image"
                />
                <div className="image-overlay">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 3H21V9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 14L21 3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>View Certificate</span>
                </div>
              </div>
            </a>

            <div className="certification-content">
              <div className="certification-header">
                <svg
                  className="cert-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="cert-date">{cert.date}</span>
              </div>

              <h4 className="certification-title">{cert.title}</h4>
              <p className="certification-issuer">
                Issued by <strong>{cert.issuer}</strong>
              </p>
              <p className="certification-description">{cert.description}</p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certification-link"
              >
                View Credential
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="certifications-note">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p>
          Committed to continuous learning and staying updated with the latest
          industry standards
        </p>
      </div>
    </div>
  );
};

export default Certifications;
