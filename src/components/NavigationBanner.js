import React from "react";

import { Link } from "react-router-dom";
const NavigationBanner = () => {
  return (
    <div className="navigationBanner">
      <div className="navigationBanner--center">
        <div className="navigationArea">
          <Link to="/Home">
            <div className="navigationBanner--zoneclick">Personnages</div>
          </Link>
          <Link to="/Comics">
            <div className="navigationBanner--zoneclick">Comics</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NavigationBanner;
