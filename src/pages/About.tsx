import React from "react";
import strings from "../strings.json";

const AboutUs: React.FC = () => {
  const { hero, story, missionVision, cta } = strings.aboutUs;

  return (
    <>
      {/* Hero Section */}
      <section
        className="text-center text-white d-flex align-items-center"
        style={{
          minHeight: "60vh",
          background: `url('${hero.background}') center/cover no-repeat`,
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">{hero.title}</h1>
          <p className="lead">{hero.subtitle}</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="mb-4">{story.title}</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "800px" }}>
            {story.text}
          </p>
          <img
            src={story.image}
            alt={story.title}
            className="img-fluid rounded shadow-sm mt-4"
          />
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <img
                src={missionVision.image}
                alt="Mission and Vision"
                className="img-fluid rounded shadow-sm"
              />
            </div>
            <div className="col-md-6">
              <h3>{missionVision.missionTitle}</h3>
              <p className="text-muted">{missionVision.missionText}</p>
              <h3 className="mt-4">{missionVision.visionTitle}</h3>
              <p className="text-muted">{missionVision.visionText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-5 text-center text-white"
        style={{
          background: `url('${cta.background}') center/cover no-repeat`,
        }}
      >
        <div className="container">
          <h2 className="mb-3 fw-bold">{cta.title}</h2>
          <p className="mb-4">{cta.subtitle}</p>
          <a href={`tel:${cta.phone}`} className="btn btn-warning btn-lg fw-bold">
            {cta.buttonText}
          </a>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
