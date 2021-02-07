import React from "react";
import ComicItem from "./ComicItem.js";
const ComicsList = (props) => {
  const { comicsList } = props;
  return (
    <div className="comicsList">
      {comicsList.map((element) => {
        return <ComicItem comic={element} />;
      })}
    </div>
  );
};

export default ComicsList;
