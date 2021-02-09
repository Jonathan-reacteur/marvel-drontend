import React, { useState } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import cookieManipulate from "../services/cookieManipulate.js";
const CharacterCard = (props) => {
  const { character } = props;
  const myCookies = JSON.parse(Cookies.get("listId"));
  const getIsIteminCookie = myCookies.indexOf(character._id) !== -1;
  const [isIteminCookie, setIsIteminCookie] = useState(getIsIteminCookie);

  const urlImg = character.thumbnail.path + "." + character.thumbnail.extension;
  console.log(isIteminCookie);

  const urlLink = "/Comics/" + character._id;

  // const cookieHandlerAdd = (idToAdd) => {
  //   const contenu = Cookies.get("listId");
  //   if (!contenu) {
  //     const tab = [];
  //     tab.push(idToAdd);
  //     Cookies.set("listId", JSON.stringify(tab));
  //   } else {
  //     const tab = JSON.parse(Cookies.get("listId"));
  //     if (tab.indexOf(idToAdd) === -1) {
  //       tab.push(idToAdd);
  //       Cookies.set("listId", JSON.stringify(tab));
  //     }
  //   }
  // };
  // const cookieHandlerRemove = (idToRemove) => {
  //   const contenu = Cookies.get("listId");
  //   if (!contenu) {
  //   } else {
  //     const tab = JSON.parse(Cookies.get("listId"));
  //     if (tab.indexOf(idToRemove) !== -1) {
  //       tab.splice(tab.indexOf(idToRemove, 1));
  //       Cookies.set("listId", JSON.stringify(tab));
  //     }
  //   }
  // };
  return (
    <>
      <div className="characterCard">
        <Link to={urlLink}>
          <img
            className="characterThumbnail"
            alt="missing ele"
            src={urlImg}
          ></img>
        </Link>
        <div className="characterName">{character.name}</div>
        {/* <div className="characterDesc">{character.description}</div> */}
        {isIteminCookie ? (
          <div className="isFavori">Cet élément est favori</div>
        ) : (
          ""
        )}
        <div
          className="favoris"
          onClick={(e) => {
            setIsIteminCookie(true);
            cookieManipulate.cookieHandlerAdd(character._id, setIsIteminCookie);
          }}
        >
          FAVORI
        </div>
        <div
          className="favoris"
          onClick={(e) => {
            setIsIteminCookie(false);
            cookieManipulate.cookieHandlerRemove(
              character._id,
              setIsIteminCookie
            );
          }}
        >
          === REMOVE FAVORi
        </div>
      </div>
    </>
  );
};

export default CharacterCard;
