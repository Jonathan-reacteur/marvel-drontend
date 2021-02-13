import React, { useState, useEffect } from "react";

// IMPORT COMPONENTS
import Banner from "../components/Banner.js";
import NavigationBanner from "../components/NavigationBanner.js";
import NavigationSearch from "../components/NavigationSearch.js";
import NavigationThroughPages from "../components/NavigationThroughPages.js";
import ComicsList from "../components/ComicsList.js";

// IMPORT UTILS
import retrieveComicsData from "../services/retrieveData/retrieveComicsData";

const Comics = () => {
  const [dataComics, setDataComics] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [title, setTitle] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  //

  useEffect(() => {
    const param = {
      title: title,
      skip: (pageNumber - 1) * 100,
    };
    retrieveComicsData.retrieveComicsDataAll(setDataComics, setIsLoaded, param);
  }, [pageNumber, title]);

  return (
    <div className="comics">
      <Banner />
      <NavigationBanner />
      <NavigationSearch
        valueSearch={title}
        setValueSearch={setTitle}
        typeSearch="comic"
      />
      <NavigationThroughPages
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
      {isLoaded ? (
        <div className="comicZone">
          <div className="comics--center">
            <ComicsList comicsList={dataComics} />
          </div>
        </div>
      ) : (
        <div className="loadingData">Chargement en cours ...</div>
      )}
    </div>
  );
};

export default Comics;
