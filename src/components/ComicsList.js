import React from "react";
import ComicItem from "./ComicItem.js";
const ComicsList = (props) => {
  const { comicsList } = props;
  return (
    <div className="comicsList">
      {comicsList.map((element, index) => {
        return <ComicItem comic={element} key={index} />;
      })}
    </div>
  );
};

export default ComicsList;
