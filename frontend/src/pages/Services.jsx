import React from "react";

const Services = () => {
  return (
    <section className="bg-light py-5">
      <div className="container text-center">
        <h2 className="mb-4">Services</h2>
        <div className="row">
          <div className="col-md-4 p-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Advanced Water Purification</h5>
                <p className="card-text">
                  Bio Aqua offers cutting-edge water purification solutions
                  using RO, UV, UF, and TDS controllers. These technologies work
                  in harmony to eliminate harmful impurities while preserving
                  essential minerals, ensuring safe and healthy drinking water.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">
                  Eco-Friendly and Sustainable Options
                </h5>
                <p className="card-text">
                  Dedicated to sustainability, Bio Aqua delivers eco-friendly
                  water purifier designs that reduce waste and energy
                  consumption. This commitment allows households and businesses
                  to make environmentally responsible choices.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">
                  Versatile Solutions for Home and Office
                </h5>
                <p className="card-text">
                  Versatile Solutions for Home and Office Whether for
                  residential or commercial spaces, Bio Aqua provides tailored
                  water purification systems that meet diverse needs. These
                  purifiers are designed for convenience, reliability, and peace
                  of mind for every user.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
