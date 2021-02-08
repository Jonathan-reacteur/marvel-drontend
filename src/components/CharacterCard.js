import React from "react";

const CharacterCard = (props) => {
  const { character } = props;
  const urlImg = character.thumbnail.path + "." + character.thumbnail.extension;
  return (
    <div>
      {" "}
      <img className="characterThumbnail" alt="missing ele" src={urlImg}></img>
    </div>
  );
};

export default CharacterCard;
