import generateParamList from "../services/generateParamList";
require("dotenv").config();
const buildURLToGetAllCharacters = (param) => {
  let stringURL = "";
  let StringParameters = "";
  if (param) {
    StringParameters = "?" + generateParamList(param);
  }

  stringURL =
    process.env.REACT_APP_URL_MARVEL_HEROKU + "/characters" + StringParameters;
  return stringURL;
};

const buildURLToGetAllComicsWithCharacters = (param) => {
  let stringURL = "";
  let StringParameters = "";
  if (param) {
    StringParameters = "?id=" + param;
  }

  stringURL =
    process.env.REACT_APP_URL_MARVEL_HEROKU +
    "/comics/searchComicWithCharacterId" +
    StringParameters;
  return stringURL;
};
const buildURLToGetAllComics = (param) => {
  let stringURL = "";
  let StringParameters = "";
  if (param) {
    StringParameters = "?" + generateParamList(param);
  }

  stringURL =
    process.env.REACT_APP_URL_MARVEL_HEROKU + "/comics" + StringParameters;
  return stringURL;
};

const buildURL = {
  buildURLToGetAllCharacters,
  buildURLToGetAllComicsWithCharacters,
  buildURLToGetAllComics,
};
export default buildURL;
// export default{
//   buildURLToGetAllCharacters,
//   buildURLToGetAllComicsWithCharacters,
//   buildURLToGetAllComics,
// };
