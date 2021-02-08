import React from "react";
import ComicCard from "../components/ComicCard.js";
//
const ComicItem = (props) => {
  const { comic } = props;
  return (
    <div className="ComicItem">
      <ComicCard comic={comic} />
    </div>
  );
};

export default ComicItem;
