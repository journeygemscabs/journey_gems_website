import React from "react";
import placesData from "../strings.json";
import { importImage } from "../utils/loadImg";



export default function Places() {
  return (
    <div className="container py-5 mt-5">
      <h2 className="text-center mb-4 text-warning">Nearby Places to Visit</h2>
      <div className="row g-4">
        {placesData.places.map((place) => (
          <div key={place.name} className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <img
                src={importImage(place.img)}
                alt={place.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-dark">{place.name}</h5>
                <p className="card-text text-muted">{place.desc}</p>
                <a
                  href={place.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-warning mt-auto"
                >
                  View on Map
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
