import buildURL from "../buildURL";
import retrieveFromURL from "../retrieveData/restrieveFromURL";

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
  console.log("AZEAZE");
  setIsLoaded(false);
  const urlToGetAllComicsWithCharacter = buildURL.buildURLToGetAllComicsWithCharacters(
    id
  );
  const response = await retrieveFromURL(urlToGetAllComicsWithCharacter);
  setDataCharacter(response.data.comics);
  setIsLoaded(true);
};
///////////////////
const retrieveComicsDataAll = async (setDataCharacter, setIsLoaded, param) => {
  console.log("QDQSD");
  setIsLoaded(false);
  const urlToGetAllComics = buildURL.buildURLToGetAllComics(param);
  const response = await retrieveFromURL(urlToGetAllComics);
  setDataCharacter(response.data.results);
  setIsLoaded(true);
};
export default { retrieveComicsDataWithCharacters, retrieveComicsDataAll };
