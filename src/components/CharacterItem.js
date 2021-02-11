import React from "react";
import CharacterCard from "../components/CharacterCard.js";
import AOS from "aos";

const CharacterItem = (props) => {
  const { character } = props;
  AOS.init({
    duration: 1200,
  });
  return (
    <div className="characterItem" data-aos="fade-up">
      <CharacterCard character={character} />
    </div>
  );
};

export default CharacterItem;
