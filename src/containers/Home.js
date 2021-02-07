import Banner from "../components/Banner";
import retrieveCharactersData from "../services/retrieveData/retrieveCharactersData.js";
import React, { useState, useEffect } from "react";
import NavigationBanner from "../components/NavigationBanner.js";
import CharactersList from "../components/CharatersList.js";
const Home = () => {
  const [dataCharacters, setDataCharacters] = useState([0]);
  const [isLoaded, setIsLoaded] = useState(false);
  //
  useEffect(() => {
    retrieveCharactersData(setDataCharacters, setIsLoaded);
  }, []);
  return (
    <div className="zer">
      <Banner />
      <NavigationBanner />
      {isLoaded ? <CharactersList items={dataCharacters} /> : <div>RIEN</div>}
    </div>
  );
};

export default Home;
