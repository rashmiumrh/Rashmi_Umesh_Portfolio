// import React from "react";
// import "../CSS/Portfoliosections.css";

// const Projects = ({ isVisible }) => {
//   const projectGroups = [
//     {
//       company: "Novagito AI Pvt Ltd",
//       projects: [
//         {
//           name: "NG360 CXaaS Platform",
//           description:
//             "Comprehensive customer experience platform with multiple AI-driven modules",
//           highlights: [
//             "Developed responsive interfaces for N-Cogito and N-Desk, supporting AI-driven customer solutions",
//             "Built analytics dashboards with React.js for real-time insights in N-IQ, improving decision-making",
//             "Streamlined workflows with support ticket views and automation dashboards",
//           ],
//           tags: ["React.js", "Tailwind CSS", "RESTful APIs", "Analytics"],
//         },
//         {
//           name: "Chatbot Product Development",
//           description:
//             "AI-powered chatbot interface for enhanced customer support",
//           highlights: [
//             "Designed AI-driven chatbot interfaces with React.js, boosting customer support efficiency",
//             "Integrated front-end with backend APIs for seamless functionality and streamlined deployment",
//             "Collaborated with teams to gather requirements, enhancing user interaction quality",
//           ],
//           tags: ["React.js", "AI Integration", "API Integration", "UX Design"],
//         },
//         {
//           name: "E-Commerce Management System - Sangeetha Studio",
//           description:
//             "Modern e-commerce platform with optimized user experience",
//           highlights: [
//             "Built responsive front-end with React.js and Tailwind CSS for product listings and checkout flows",
//             "Optimized performance for seamless cross-device experiences, reducing bounce rates",
//           ],
//           tags: [
//             "React.js",
//             "Tailwind CSS",
//             "E-Commerce",
//             "Performance Optimization",
//           ],
//         },
//       ],
//     },
//     {
//       company: "ezAtlas Pvt Ltd",
//       projects: [
//         {
//           name: "Asset Management System - Pioneer Toyota",
//           description: "Comprehensive asset tracking and management solution",
//           highlights: [
//             "Developed React.js-based front-end for tracking company assets like vehicles, tools, and machinery",
//             "Implemented asset lifecycle management, real-time tracking, and maintenance scheduling",
//             "Designed responsive interface accessible across desktops and mobile devices",
//           ],
//           tags: [
//             "React.js",
//             "Asset Tracking",
//             "Real-time Data",
//             "Mobile Responsive",
//           ],
//         },
//         {
//           name: "Distributor Management System - Melt and Mellow",
//           description:
//             "Distribution and inventory management for ice cream products",
//           highlights: [
//             "Built responsive front-end for managing inventory and distribution channels",
//             "Streamlined operations with modules for inventory control, order tracking, and performance reporting",
//             "Integrated alert notifications and real-time updates for enhanced communication",
//           ],
//           tags: [
//             "React.js",
//             "Inventory Management",
//             "Real-time Updates",
//             "Reporting",
//           ],
//         },
//       ],
//     },
//   ];

//   return (
//     <div className={`section-content ${isVisible ? "animate-fadeInUp" : ""}`}>
//       <div className="section-intro">
//         <h3 className="section-title">Featured Projects</h3>
//         <p className="section-subtitle">
//           Impactful solutions delivered across different domains
//         </p>
//       </div>

//       <div className="projects-container">
//         {projectGroups.map((group, groupIndex) => (
//           <div key={groupIndex} className="project-group">
//             <h4 className="project-group-title">
//               <svg
//                 className="company-icon"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//               >
//                 <path
//                   d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//               {group.company}
//             </h4>

//             <div className="projects-grid">
//               {group.projects.map((project, projIndex) => (
//                 <div key={projIndex} className="project-card card">
//                   <h5 className="project-name">{project.name}</h5>
//                   <p className="project-description">{project.description}</p>

//                   <div className="project-highlights">
//                     <h6 className="highlights-title">Key Achievements:</h6>
//                     <ul className="highlights-list">
//                       {project.highlights.map((highlight, hlIndex) => (
//                         <li key={hlIndex}>{highlight}</li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div className="project-tags">
//                     {project.tags.map((tag, tagIndex) => (
//                       <span key={tagIndex} className="project-tag">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;
import React from "react";
import "../CSS/Portfoliosections.css";

const Projects = ({ isVisible }) => {
  const projectGroups = [
    {
      company: "Novagito AI Pvt Ltd",
      projects: [
        {
          name: "NG360 CXaaS Platform",
          description:
            "Comprehensive customer experience platform with multiple AI-driven modules",
          highlights: [
            "Developed responsive interfaces for N-Cogito and N-Desk, supporting AI-driven customer solutions",
            "Built analytics dashboards with React.js for real-time insights in N-IQ, improving decision-making",
            "Streamlined workflows with support ticket views and automation dashboards",
          ],
          tags: ["React.js", "Tailwind CSS", "RESTful APIs", "Analytics"],
        },
        {
          name: "Chatbot Product Development",
          description:
            "AI-powered chatbot interface for enhanced customer support",
          highlights: [
            "Designed AI-driven chatbot interfaces with React.js, boosting customer support efficiency",
            "Integrated front-end with backend APIs for seamless functionality and streamlined deployment",
            "Collaborated with teams to gather requirements, enhancing user interaction quality",
          ],
          tags: ["React.js", "AI Integration", "API Integration"],
        },
        {
          name: "Andaman Isle - Ferry Booking Platform",
          description:
            "Complete travel booking platform for Andaman & Nicobar Islands",
          highlights: [
            "Built comprehensive ferry ticket booking system with React.js and Context API for state management",
            "Developed tourist information portal showcasing nearby attractions and adventure activities",
            "Created admin panel for managing bookings, ferry schedules, and tourist destinations",
            "Integrated RESTful APIs for real-time availability and booking confirmations",
          ],
          tags: [
            "React.js",
            "Context API",
            "RESTful APIs",
            "Admin Panel",
            "Booking System",
          ],
        },
        {
          name: "Tekka Centre - Cultural Marketplace Platform",
          description:
            "Digital platform for Singapore's iconic Little India marketplace",
          highlights: [
            "Developed responsive website showcasing Tekka Centre's diverse ethnic marketplace and cultural heritage",
            "Implemented features for hawker centre food stalls, wet market vendors, and specialty shops",
            "Built admin panel for managing vendor listings, product categories, and marketplace information",
            "Integrated location services highlighting MRT connectivity and nearby amenities",
          ],
          tags: [
            "React.js",
            "RESTful APIs",
            "Admin Panel",
            "Cultural Heritage",
          ],
        },
        {
          name: "Srihari Medicals - Online Pharmacy",
          description:
            "E-commerce platform for pharmaceutical products and healthcare",
          highlights: [
            "Built responsive front-end with React.js for browsing and purchasing medicines",
            "Developed comprehensive admin panel for inventory management, order processing, and customer management",
            "Implemented secure checkout flows and prescription upload functionality",
            "Integrated RESTful APIs for real-time stock updates and order tracking",
          ],
          tags: [
            "React.js",
            "E-Commerce",
            "Admin Panel",
            "Healthcare",
            "API Integration",
          ],
        },
        {
          name: "Satya Foods - Pickles & Products Store",
          description:
            "E-commerce platform for traditional pickles and food products",
          highlights: [
            "Developed responsive storefront with React.js for product browsing and online ordering",
            "Built admin panel for product management, inventory tracking, and order fulfillment",
            "Optimized performance for seamless cross-device shopping experiences",
          ],
          tags: [
            "React.js",
            "E-Commerce",
            "Admin Panel",
            "Product Management",
          ],
        },
      ],
    },
    {
      company: "ezAtlas Pvt Ltd",
      projects: [
        {
          name: "Asset Management System - Pioneer Toyota",
          description: "Comprehensive asset tracking and management solution",
          highlights: [
            "Developed React.js-based front-end for tracking company assets like vehicles, tools, and machinery",
            "Implemented asset lifecycle management, real-time tracking, and maintenance scheduling",
            "Designed responsive interface accessible across desktops and mobile devices",
          ],
          tags: [
            "React.js",
            "Asset Tracking",
            "Real-time Data",
            "Mobile Responsive",
          ],
        },
        {
          name: "Distributor Management System - Melt and Mellow",
          description:
            "Distribution and inventory management for ice cream products",
          highlights: [
            "Built responsive front-end for managing inventory and distribution channels",
            "Streamlined operations with modules for inventory control, order tracking, and performance reporting",
            "Integrated alert notifications and real-time updates for enhanced communication",
          ],
          tags: [
            "React.js",
            "Inventory Management",
            "Real-time Updates",
            "Reporting",
          ],
        },
      ],
    },
  ];

  return (
    <div className={`section-content ${isVisible ? "animate-fadeInUp" : ""}`}>
      <div className="section-intro">
        <h3 className="section-title">Featured Projects</h3>
        <p className="section-subtitle">
          Impactful solutions delivered across different domains
        </p>
      </div>

      <div className="projects-container">
        {projectGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="project-group">
            <h4 className="project-group-title">
              <svg
                className="company-icon"
                width="20"
                height="20"
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
              {group.company}
            </h4>

            <div className="projects-grid">
              {group.projects.map((project, projIndex) => (
                <div key={projIndex} className="project-card card">
                  <h5 className="project-name">{project.name}</h5>
                  <p className="project-description">{project.description}</p>

                  <div className="project-highlights">
                    <h6 className="highlights-title">Key Achievements:</h6>
                    <ul className="highlights-list">
                      {project.highlights.map((highlight, hlIndex) => (
                        <li key={hlIndex}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;