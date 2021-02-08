import React from "react";
import CharacterItem from "./CharacterItem.js";

const CharactersList = (props) => {
  const listItems = props.items;
  return (
    <div className="charactersList">
      <div className="charactersList--center">
        {listItems.map((element, index) => {
          return <CharacterItem character={element} />;
        })}
      </div>
    </div>
  );
};

export default CharactersList;
