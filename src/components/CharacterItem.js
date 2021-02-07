import React from "react";
import { Link } from "react-router-dom";
import CharacterCard from "../components/CharacterCard.js";
const CharacterItem = (props) => {
  const { character } = props;
  console.log(props);

  const urlLink = "/Comics/" + character._id;
  return (
    <div className="CharacterItem">
      <Link to={urlLink}>
        <CharacterCard character={character} />
      </Link>
    </div>
  );
};

export default CharacterItem;
