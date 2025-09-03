import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import strings from "../strings.json";

const Home: React.FC = () => {
  const { hero, whyChooseUs, services, cta } = strings.home;
  const { callButtonText, enquireButtonText } = strings.globals;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    if (/android|iphone|ipad|ipod|windows phone/i.test(userAgent)) {
      setIsMobile(true);
    }
  }, []);

  const handleCallClick = (phone: string, e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isMobile) {
      e.preventDefault();
      e.stopPropagation();
      alert("Call button works only on mobile devices");
      return;
    }
    window.location.href = `tel:${phone}`;
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="d-flex align-items-center text-center text-white"
        style={{
          minHeight: "90vh",
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${hero.background}') center/cover no-repeat`,
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">{hero.title}</h1>
          <p className="lead mb-4">{hero.subtitle}</p>
          <div className="d-grid d-sm-flex justify-content-center gap-3">
            <button
              className={`btn btn-warning btn-lg fw-bold px-4 py-2 ${!isMobile ? "disabled" : ""}`}
              onClick={(e) => handleCallClick(hero.phone, e)}
              style={{ pointerEvents: isMobile ? "auto" : "none" }}
            >
              {callButtonText}
            </button>
            <Link to="/contact" className="btn btn-outline-light btn-lg px-4 py-2">
              {enquireButtonText}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="mb-5 fw-bold">{whyChooseUs.title}</h2>
          <div className="row g-4">
            {whyChooseUs.items.map((item, index) => (
              <div className="col-12 col-md-4" key={index}>
                <div className="card h-100 border-0 shadow-sm p-4 rounded-4 hover-shadow">
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p className="text-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-5 fw-bold">{services.title}</h2>
          <div className="row g-4">
            {services.items.map((service, index) => (
              <div className="col-12 col-md-3" key={index}>
                <div className="card h-100 border-0 shadow-sm p-4 rounded-4 hover-shadow">
                  <h5 className="fw-bold mb-3">{service.title}</h5>
                  <p className="text-muted">{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-5 text-center text-white"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${cta.background}') center/cover no-repeat`,
        }}
      >
        <div className="container">
          <h2 className="mb-3 fw-bold">{cta.title}</h2>
          <p className="mb-4">{cta.subtitle}</p>
          <button
            className={`btn btn-warning btn-lg fw-bold px-4 py-2 ${!isMobile ? "disabled" : ""}`}
            onClick={(e) => handleCallClick(cta.phone, e)}
            style={{ pointerEvents: isMobile ? "auto" : "none" }}
          >
            {callButtonText}
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
