import buildURL from "../buildURL";
import retrieveFromURL from "../retrieveData/restrieveFromURL";
import buildURLToGetAllComicsWithCharacters from "../buildURL.js";

//************************************************************/
//                                                           */
//           RECUPERATION LISTE DES PERSONNAGES              */
//                                                           */
//************************************************************/

const retrieveComicsDataWithCharacters = async (
  setDataCharacter,
  setIsLoaded,
  id
) => {
  setIsLoaded(false);
  const urlToGetAllComicsWithCharacter = buildURL.buildURLToGetAllComicsWithCharacters(
    id
  );
  console.log(urlToGetAllComicsWithCharacter);
  const response = await retrieveFromURL(urlToGetAllComicsWithCharacter);
  console.log(response.data);
  setDataCharacter(response.data.comics);
  setIsLoaded(true);
};
///////////////////
const retrieveComicsDataAll = async (setDataCharacter, setIsLoaded, param) => {
  setIsLoaded(false);
  const urlToGetAllComics = buildURL.buildURLToGetAllComics(param);
  console.log(urlToGetAllComics);
  const response = await retrieveFromURL(urlToGetAllComics);
  console.log(response.data);
  setDataCharacter(response.data.results);
  setIsLoaded(true);
};
export default { retrieveComicsDataWithCharacters, retrieveComicsDataAll };
