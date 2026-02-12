import React from "react";
import postman from "../assets/postman.png";
import swagger from "../assets/swagger.png";
import tailwind from "../assets/tailwind.png";
import "../CSS/Portfoliosections.css";

const Skills = ({ isVisible }) => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        {
          name: "React.js",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
        },
        {
          name: "Redux",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        },
        {
          name: "HTML5",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
        },
      ],
    },
    {
      category: "Styling Frameworks",
      skills: [
        { name: "Tailwind CSS", icon: tailwind, isLocal: true },
        {
          name: "Bootstrap",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
        },
      ],
    },
    {
      category: "API Testing & Integration",
      skills: [
        { name: "Postman", icon: postman, isLocal: true },
        { name: "Swagger", icon: swagger, isLocal: true },
      ],
    },
    {
      category: "Development Tools",
      skills: [
        {
          name: "Git",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
        },
        {
          name: "GitLab",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/gitlab/gitlab-original.svg",
        },
        {
          name: "Azure DevOps",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg",
        },
        {
          name: "VS Code",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
        },
      ],
    },
  ];

  const softSkills = [
    "Team Collaboration",
    "Agile Development",
    "Problem Solving",
    "Communication",
    "Code Review",
    "Critical Thinking",
    "Time Management",
    "Adaptability",
    "Attention to Detail",
  ];

  return (
    <div className={`section-content ${isVisible ? "animate-fadeInUp" : ""}`}>
      <div className="section-intro">
        <h3 className="section-title">Technical Expertise</h3>
        <p className="section-subtitle">
          Modern technologies and tools I work with daily
        </p>
      </div>

      <div className="skills-categories">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="skill-category">
            <h4 className="category-title">
              <span className="decorative-dot"></span>
              {category.category}
            </h4>

            <div className="skills-showcase">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item" title={skill.name}>
                  <div className="skill-icon-wrapper">
                    <img
                      src={skill.icon}
                      alt={`${skill.name} logo`}
                      className="skill-icon"
                    />
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="skill-category">
          <h4 className="category-title">
            <span className="decorative-dot"></span>
            Professional Skills
          </h4>

          <div className="soft-skills-grid">
            {softSkills.map((skill, index) => (
              <div key={index} className="soft-skill-item">
                <svg
                  className="check-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
