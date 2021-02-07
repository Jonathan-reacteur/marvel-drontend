import React from "react";
import { Link } from "react-router-dom";
import ComicCard from "../components/ComicCard.js";
//
const ComicItem = (props) => {
  const { comic } = props;
  console.log(props);
  return (
    <div className="ComicItem">
      <ComicCard comic={comic} />
    </div>
  );
};

export default ComicItem;
