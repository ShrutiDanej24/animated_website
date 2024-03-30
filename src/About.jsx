import React from "react";
// import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={
          "https://nonprofitssource.com/wp-content/uploads/2018/11/Vector-Smart-Object.png"
        }
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
