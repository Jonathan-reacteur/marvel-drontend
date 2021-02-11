const axios = require("axios");
require("dotenv").config();

//************************************************************/
//                                                           */
//           RECUPERATION AXIOS DEPUIS UNE URL DONNEE        */
//                                                           */
//************************************************************/

const retrieveFromURL = async (fullURL) => {
  const response = await axios.get(fullURL).catch((error) => {
    //       // Affichera d'éventuelles erreurs, notamment en cas de problème de connexion Internet.

    console.error(error);
  });
  return response;
};
export default retrieveFromURL;
