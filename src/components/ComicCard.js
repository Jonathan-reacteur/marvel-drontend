import React from "react";

const ComicCard = (props) => {
  const { comic } = props;
  const urlImgComic = comic.thumbnail.path + "." + comic.thumbnail.extension;
  return (
    <div className="comicCard">
      <div className="comicThumbnail">
        <img src={urlImgComic} className="comicThumbnailImg" />
      </div>
      <div className="comic-text">
        <div className="comicTitle">{comic.title}</div>
        <div className="comicDescription">{comic.description}</div>
      </div>
    </div>
  );
};

export default ComicCard;
