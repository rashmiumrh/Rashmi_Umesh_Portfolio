import React, { useEffect, useRef, useState } from "react";
import "../CSS/Contact.css";

const Contact = ({ setActiveNav }) => {
  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
const currentYear = new Date().getFullYear();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setActiveNav("Contact");
        }
      },
      { threshold: 0.3 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, [setActiveNav]);

  const contactInfo = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: "Email",
      value: "rashmiumesh.netexa@gmail.com",
      link: "mailto:rashmiumesh.netexa@gmail.com"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M22 16.92V19.92C22 20.49 21.54 20.97 20.97 21C20.72 21.01 20.47 21.01 20.22 21C10.44 21 2.56 13.36 2.03 3.77C2 3.51 2 3.25 2 3C2.03 2.43 2.51 1.97 3.08 2H6.08C6.6 2 7.03 2.39 7.08 2.9C7.18 3.88 7.37 4.84 7.64 5.76C7.77 6.18 7.65 6.64 7.33 6.94L5.92 8.35C7.57 11.94 10.94 15.31 14.53 16.96L15.94 15.55C16.24 15.24 16.7 15.11 17.12 15.24C18.04 15.51 19 15.7 19.98 15.8C20.5 15.85 20.89 16.29 20.89 16.81L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: "Phone",
      value: "+91 8747035258",
      link: "tel:+918747035258"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: "Location",
      value: "Bangalore, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      ),
      link: "https://www.linkedin.com/in/rashmi-u-6ab07a213/",
      color: "#0077B5"
    },
    {
      name: "Resume",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M18 20H6V4H13V9H18V20M12 19L8 15H10.5V12H13.5V15H16L12 19Z"/>
        </svg>
      ),
      link: "https://drive.google.com/file/d/1UYo0Fj8nCndPRvCyCM5aCCfPCa-ispii/view",
      color: "#d4af37"
    }
  ];

  return (
    <section id="contact" ref={contactRef} className="contact-section">
      <div className="contact-background">
        <div className="contact-gradient-orb contact-orb-1"></div>
        <div className="contact-gradient-orb contact-orb-2"></div>
      </div>

      <div className="container">
        <div className={`contact-header ${isVisible ? "animate-fadeInUp" : ""}`}>
          <div className="section-label">
            <span className="decorative-dot"></span>
            <span>Let's Connect</span>            <span className="decorative-dot"></span>

          </div>
          
          <h2 className="contact-title">
            Get In
            <span className="gradient-text"> Touch</span>
          </h2>
          
          <p className="contact-description">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            Feel free to reach out through any of the channels below!
          </p>
        </div>

        <div className="contact-content">
          <div className={`contact-info-grid  ${isVisible ? "animate-fadeInUp stagger-2" : ""}`}>
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card ">
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-details">
                  <span className="contact-label">{info.label}</span>
                  {info.link ? (
                    <a href={info.link} className="contact-value">{info.value}</a>
                  ) : (
                    <span className="contact-value">{info.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className={`social-links-section ${isVisible ? "animate-fadeInUp stagger-3" : ""}`}>
            <h3 className="social-title">Connect on Social Media</h3>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--social-color': social.color }}
                  title={social.name}
                >
                  {social.icon}
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className={`cta-section ${isVisible ? "animate-fadeInUp stagger-4" : ""}`}>
            <div className="cta-content">
              <h3 className="cta-title">Ready to start a conversation?</h3>
              <p className="cta-text">
                Whether it's a freelance project, full-time opportunity, or just a chat about technology, 
                I'd love to hear from you.
              </p>
              <div className="cta-buttons">
                <a href="mailto:rashmiumesh.netexa@gmail.com" className="btn btn-primary">
                  Send Email
                  {/* <svg className="btn-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg> */}
                </a>
                <a 
                  href="https://www.linkedin.com/in/rashmi-u-6ab07a213/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer className={`footer ${isVisible ? "animate-fadeInUp stagger-5" : ""}`}>
          <p className="footer-text">
            © {currentYear} Rashmi Umesh. Built with <span className="gradient-text">React.js</span> and <span className="gradient-text">passion</span>.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;