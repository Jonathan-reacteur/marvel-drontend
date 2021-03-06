import buildURL from "../buildURL";
import retrieveFromURL from "../retrieveData/restrieveFromURL";

//************************************************************/
//                                                           */
//           RECUPERATION LISTE DES PERSONNAGES              */
//                                                           */
//************************************************************/

const retrieveCharactersData = async (
  setDataCharacter,
  setIsLoaded,
  setCount,
  param
) => {
  setIsLoaded(false);
  const urlToGetAllCharacters = buildURL.buildURLToGetAllCharacters(param);

  console.log(urlToGetAllCharacters);
  const response = await retrieveFromURL(urlToGetAllCharacters);
  setDataCharacter(response.data.results);
  setCount(response.data.count);
  setIsLoaded(true);
};
export default retrieveCharactersData;
