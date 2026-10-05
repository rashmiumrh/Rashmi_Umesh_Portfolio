import React, { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { profile } from "../data/resume";
import "../CSS/Contact.css";

const channels = [
  { icon: "mail", label: "Email", value: profile.email, href: `mailto:${profile.email}`, copy: true },
  { icon: "phone", label: "Phone", value: profile.phone, href: profile.phoneHref },
  { icon: "linkedin", label: "LinkedIn", value: "in/rashmi-u", href: profile.linkedin, external: true },
  { icon: "mapPin", label: "Location", value: profile.location },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="contact-panel">
          <div className="contact-glow" aria-hidden="true"></div>

          <div className="contact-intro">
            <p className="section-eyebrow">
              <span className="section-index">06</span>
              <span className="section-eyebrow-line" aria-hidden="true"></span>
              Contact
            </p>
            <h2 id="contact-title" className="contact-title">
              Let's build something <span className="gradient-text">great together.</span>
            </h2>
            <p className="contact-text">
              I'm always open to discussing new projects, front-end roles and opportunities to be part of your
              vision. The quickest way to reach me is by email - I'll get back to you soon.
            </p>

            <div className="contact-actions">
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                <Icon name="mail" size={17} />
                Send an Email
              </a>
              <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                View Resume
                <Icon name="arrowUpRight" size={16} className="btn-icon-lift" />
              </a>
            </div>
          </div>

          <ul className="contact-channels">
            {channels.map((channel) => {
              const content = (
                <>
                  <span className="contact-channel-icon" aria-hidden="true">
                    <Icon name={channel.icon} size={18} />
                  </span>
                  <span className="contact-channel-text">
                    <span className="contact-channel-label">{channel.label}</span>
                    <span className="contact-channel-value">{channel.value}</span>
                  </span>
                </>
              );

              return (
                <li key={channel.label} className="contact-channel">
                  {channel.href ? (
                    <a
                      href={channel.href}
                      className="contact-channel-link"
                      {...(channel.external && { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      {content}
                      {!channel.copy && <Icon name="arrowUpRight" size={16} className="contact-channel-arrow" />}
                    </a>
                  ) : (
                    <div className="contact-channel-link is-static">{content}</div>
                  )}

                  {channel.copy && (
                    <button
                      type="button"
                      className={`contact-copy ${copied ? "is-copied" : ""}`}
                      onClick={copyEmail}
                      aria-label={copied ? "Email copied" : "Copy email address"}
                    >
                      <Icon name={copied ? "check" : "copy"} size={15} />
                      <span>{copied ? "Copied" : "Copy"}</span>
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
          <span className="sr-only" aria-live="polite">
            {copied ? "Email address copied to clipboard" : ""}
          </span>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
