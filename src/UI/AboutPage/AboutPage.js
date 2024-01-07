import React from "react";
import "./AboutPage.css"; // Assuming you have an external CSS file
import Navbar from "../../Components/Navbar/Navbar";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="about-us">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          euismod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Curabitur pretium
          tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et
          commodo pharetra, est eros bibendum elit, nec luctus magna felis
          sollicitudin mauris.
        </p>
        <p>
          Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus
          vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut
          ullamcorper, ligula eu tempor congue, eros est euismod turpis, id
          tincidunt sapien risus a quam.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
