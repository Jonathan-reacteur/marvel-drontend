import React from "react";

const ComicCard = (props) => {
  const { comic } = props;
  return <div className="comicCard">{comic.title}</div>;
};

export default ComicCard;
