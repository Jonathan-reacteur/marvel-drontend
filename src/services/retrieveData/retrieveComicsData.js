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
  setIsLoaded(false);
  const urlToGetAllComics = buildURL.buildURLToGetAllComics(param);
  console.log(urlToGetAllComics);
  const response = await retrieveFromURL(urlToGetAllComics);
  setDataCharacter(response.data.results);
  setIsLoaded(true);
};
const retrieveComicsData = {
  retrieveComicsDataWithCharacters,
  retrieveComicsDataAll,
};
export default retrieveComicsData;
// export default { retrieveComicsDataWithCharacters, retrieveComicsDataAll };
