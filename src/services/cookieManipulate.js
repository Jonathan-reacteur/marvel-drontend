import Cookies from "js-cookie";

const cookieHandlerAdd = (idToAdd, setIsIteminCookie) => {
  const contenu = Cookies.get("listId");
  setIsIteminCookie(true);
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
const cookieHandlerRemove = (idToRemove, setIsIteminCookie) => {
  const contenu = Cookies.get("listId");
  setIsIteminCookie(false);
  if (!contenu) {
  } else {
    const tab = JSON.parse(Cookies.get("listId"));
    if (tab.indexOf(idToRemove) !== -1) {
      tab.splice(tab.indexOf(idToRemove, 1));
      Cookies.set("listId", JSON.stringify(tab));
    }
  }
};
const cookieManipulate = {
  cookieHandlerAdd,
  cookieHandlerRemove,
};

export default cookieManipulate;
