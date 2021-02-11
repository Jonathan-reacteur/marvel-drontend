import Banner from "../components/Banner";
import retrieveCharactersData from "../services/retrieveData/retrieveCharactersData.js";
import React, { useState, useEffect } from "react";
import NavigationBanner from "../components/NavigationBanner.js";
import NavigationSearch from "../components/NavigationSearch.js";
import NavigationThroughPages from "../components/NavigationThroughPages.js";
import CharactersList from "../components/CharatersList.js";
const Home = () => {
  const [dataCharacters, setDataCharacters] = useState([0]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [nameCharacter, setNameCharacter] = useState("");
  const [count, setCount] = useState(0);
  //
  useEffect(() => {
    const param = {
      name: nameCharacter,
      skip: (pageNumber - 1) * 100,
    };
    retrieveCharactersData(setDataCharacters, setIsLoaded, setCount, param);
  }, [pageNumber, nameCharacter]);

  return (
    <div className="home">
      <Banner />
      <NavigationBanner />
      <NavigationSearch
        valueSearch={nameCharacter}
        setValueSearch={setNameCharacter}
        typeSearch="character"
      />
      <NavigationThroughPages
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        countPage={count}
      />

      {isLoaded ? (
        <CharactersList items={dataCharacters} pageNumber={pageNumber} />
      ) : (
        <div className="loadingData">
          Chargement en cours, veuillez patienter . . . .
        </div>
      )}
    </div>
  );
};

export default Home;
