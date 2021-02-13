import React from "react";
import ComicCard from "../components/ComicCard.js";
import AOS from "aos";
//
const ComicItem = (props) => {
  const { comic } = props;
  AOS.init({
    duration: 2400,
  });
  return (
    <div className="comicItem" data-aos="fade-up">
      <ComicCard comic={comic} />
    </div>
  );
};

export default ComicItem;
