import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <p className="mb-2">
          Email:{" "}
          <a
            href="mailto:viratmarketingsolutions@gmail.com"
            className="text-white"
          >
            viratmarketingsolutions@gmail.com
          </a>
        </p>
        <p className="mb-2">Phone: +91 98585 98587</p>
        <p className="mb-0">
          Address: 30-22-112, Opp ICON Public School, Eluru Road,
          Seetharamapuram, Vijayawada - 520002.
        </p>
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Bio Aqua. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
