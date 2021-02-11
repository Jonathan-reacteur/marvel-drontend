import React, { useState } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import cookieManipulate from "../services/cookieManipulate.js";

import favoriteSelected from "../assets/img/favoriteSelected.png";
import favoriteUnselected from "../assets/img/favoriteUnselected.png";

const CharacterCard = (props) => {
  const { character } = props;

  const myCookies = JSON.parse(Cookies.get("listId") || "{}");
  const getIsIteminCookie = myCookies.indexOf(character._id) !== -1;
  const [isIteminCookie, setIsIteminCookie] = useState(getIsIteminCookie);

  const urlImg = character.thumbnail.path + "." + character.thumbnail.extension;

  const urlLink = "/ComicsByCharacter/" + character._id;

  return (
    <>
      <div className="characterCard">
        <div className="imageContainer">
          <img className="characterThumbnail" alt="missing ele" src={urlImg} />
          <Link to={urlLink}>
            <div className="characterName">
              <p>{character.name}</p>
            </div>
          </Link>

          {isIteminCookie ? (
            <img
              className="favoriteIcon selected"
              alt="missing ele"
              src={favoriteSelected}
              onClick={(e) => {
                setIsIteminCookie(false);
                cookieManipulate.cookieHandlerRemove(
                  character._id,
                  setIsIteminCookie
                );
              }}
            />
          ) : (
            <img
              className="favoriteIcon unSelected"
              alt="missing ele"
              src={favoriteUnselected}
              onClick={(e) => {
                setIsIteminCookie(true);
                cookieManipulate.cookieHandlerAdd(
                  character._id,
                  setIsIteminCookie
                );
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CharacterCard;
