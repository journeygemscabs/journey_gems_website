import React from "react";
import { Link } from "react-router-dom";
import strings from "../strings.json";

const Footer: React.FC = () => {
  const { tagline, quickLinks, contact, socialLinks } = strings.footer;
  const { brandName, developerText } = strings.globals;

  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row text-center text-md-start align-items-center">
          {/* Logo & Tagline */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h4 className="fw-bold text-warning">{brandName}</h4>
            <p className="small">{tagline}</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h6 className="fw-bold text-uppercase">Quick Links</h6>
            <ul className="list-unstyled">
              {quickLinks.map((link) => (
                <li key={link.path} className="mb-2">
                  <Link to={link.path} className="text-white text-decoration-none">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4">
            <h6 className="fw-bold text-uppercase">Get in Touch</h6>
            <p className="mb-1">📍 {contact.address}</p>
            <p className="mb-1">📞 {contact.phone}</p>
            <p className="mb-0">✉️ {contact.email}</p>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4 border-light" />

        {/* Bottom Row */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="text-center text-md-start mb-2 mb-md-0 small">
            &copy; {new Date().getFullYear()} {brandName}. All rights reserved. <br className="d-md-none" />
            
          </div>
<span className="text-center text-md-start mb-2 mb-md-0 small">{developerText}</span>
          <div className="mt-2 mt-md-0">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3"
              >
                <i className={`${social.iconClass} fs-5`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
