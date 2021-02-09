import React from "react";

import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  const { character } = props;
  const urlImg = character.thumbnail.path + "." + character.thumbnail.extension;

  console.log("==" + Cookies.get("listId"));
  const urlLink = "/Comics/" + character._id;

  const cookieHandlerAdd = (idToAdd) => {
    const contenu = Cookies.get("listId");
    if (!contenu) {
      const tab = [];
      tab.push(idToAdd);
      Cookies.set("listId", JSON.stringify(tab));
    } else {
      const tab = JSON.parse(Cookies.get("listId"));
      if (tab.indexOf(idToAdd) === -1) {
        tab.push(idToAdd);
        Cookies.set("listId", JSON.stringify(tab));
      }
    }
  };
  const cookieHandlerRemove = (idToRemove) => {
    const contenu = Cookies.get("listId");
    if (!contenu) {
    } else {
      const tab = JSON.parse(Cookies.get("listId"));
      if (tab.indexOf(idToRemove) !== -1) {
        tab.splice(tab.indexOf(idToRemove, 1));
        Cookies.set("listId", JSON.stringify(tab));
      }
    }
  };
  return (
    <>
      <div>
        <Link to={urlLink}>
          <img
            className="characterThumbnail"
            alt="missing ele"
            src={urlImg}
          ></img>
        </Link>
        <div className="characterName">{character.name}</div>
        <div className="characterDesc">{character.description}</div>
        <div
          className="favoris"
          onClick={(e) => {
            cookieHandlerAdd(character._id);
            console.log(Cookies.get("listId"));
          }}
        >
          FAVORI
        </div>
        <div
          className="favoris"
          onClick={(e) => {
            cookieHandlerRemove(character._id);
            console.log(Cookies.get("listId"));
          }}
        >
          === REMOVE FAVORU
        </div>
      </div>
    </>
  );
};

export default CharacterCard;
