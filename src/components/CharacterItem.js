import React from "react";
import CharacterCard from "../components/CharacterCard.js";

const CharacterItem = (props) => {
  const { character } = props;

  return (
    <div className="characterItem">
      <CharacterCard character={character} />
    </div>
  );
};

export default CharacterItem;
