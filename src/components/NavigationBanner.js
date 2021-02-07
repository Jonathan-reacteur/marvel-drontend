import React from "react";

import { Link } from "react-router-dom";
const NavigationBanner = () => {
  return (
    <div className="navigationBanner">
      <div className="navigationBannerCenter">
        <div className="navigationArea">
          <Link to="/Home">CECI EST UN LIEN VERS L'ACCUEIL</Link>
          <Link to="/Comics">CECI EST UN LIEN VERS LeeS COMICS</Link>
        </div>
      </div>
    </div>
  );
};
export default NavigationBanner;
