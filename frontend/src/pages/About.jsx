import React from "react";

const AboutUs = () => {
  return (
    <section className="py-5">
      <div className="container my-5">
        <div className="card mx-auto" style={{ maxWidth: "800px" }}>
          <div className="card-body text-center">
            <h2 className="card-title mb-4">About Us</h2>
            <p className="card-text">
              At Bio Aqua, we are committed to delivering pure, safe, and
              healthy drinking water to every household. With cutting-edge
              technology and innovative designs, our water purifiers ensure the
              highest standards of water purification. Our mission is to provide
              sustainable and eco-friendly solutions that cater to the diverse
              needs of our customers.
            </p>
            <p className="card-text">
              We take pride in our advanced filtration systems, which combine
              RO, UV, UF, and TDS controllers to remove impurities while
              retaining essential minerals. Whether it's for your home or
              office, Bio Aqua water purifiers are designed to offer
              convenience, reliability, and peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
