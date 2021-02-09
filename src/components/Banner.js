import React from "react";
import logo from "../assets/img/logoMarvel.jpeg";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-center">
        <img className="logo" src={logo} alt="logo"></img>
        <div className="banner--text">
          <p>Marvel Index</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
