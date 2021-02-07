import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner.js";
import NavigationBanner from "../components/NavigationBanner.js";
import ComicsList from "../components/ComicsList.js";

import retrieveComicsData from "../services/retrieveData/retrieveComicsData";
const Comics = () => {
  const [dataComics, setDataComics] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  let { id } = useParams();
  //
  console.log(id);
  useEffect(() => {
    if (id && Object.keys(id).length !== 0) {
      console.log("qsd");
      retrieveComicsData.retrieveComicsDataWithCharacters(
        setDataComics,
        setIsLoaded,
        id
      );
    } else {
      console.log("aze");
      retrieveComicsData.retrieveComicsDataAll(setDataComics, setIsLoaded);
    }
  }, []);

  console.log(dataComics);
  //
  return (
    <div className="comics">
      <Banner />
      <NavigationBanner />
      {isLoaded ? <ComicsList comicsList={dataComics} /> : <div>RIEN</div>}
    </div>
  );
};

export default Comics;
