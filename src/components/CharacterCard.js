import React from "react";

const CharacterCard = (props) => {
  const { character } = props;
  const urlImg = character.thumbnail.path + "." + character.thumbnail.extension;
  return (
    <div>
      {" "}
      <img className="characterThumbnail" src={urlImg}></img>
    </div>
  );
};

export default CharacterCard;
