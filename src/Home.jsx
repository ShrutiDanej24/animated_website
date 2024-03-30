import React from "react";
// import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={
          "https://technicmentors.com/assets/img/web-development-services.gif"
        }
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
