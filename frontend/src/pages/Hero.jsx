import React from "react";
import "./style.css";

const Hero = () => {
  return (
    <section
      className="bg-primary text-white text-center py-5"
      style={{
        background: "linear-gradient(to bottom, #0061f2, #8a2be2)",
      }}
      id="hero"
    >
      <div className="container py-5">
        <div className="row align-items-center" style={{ margin: "40px 0px" }}>
          {/* Text Content Layer */}
          <div className="col-md-6 text-center text-md-start">
            <h1 className="display-4">Bio Aqua</h1>
            <p className="lead">
              Bio Aqua water purifiers are designed to provide clean and safe
              drinking water using advanced filtration technologies. They focus
              on delivering high-quality purification while retaining essential
              minerals for better health.
            </p>
          </div>

          <div className="col-md-6 text-center">
            <img
              src="https://sb-ui-kit-pro-angular.startbootstrap.com/assets/img/illustrations/windows.svg"
              alt="Bio Aqua Water Purifier"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
