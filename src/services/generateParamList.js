// Cette classe pourrait être factorisé, mais anticipant la possible nécessité de faire des transodformations sur les
// paramètres, je laisse cette partie ainsi.

const generateParamList = (param) => {
  if (!param) {
    return "?";
  }
  const listParam = [];
  const { skip, limit, title, name } = param;
  let paramURL = "";
  if (limit) {
    listParam.push("limit=" + limit);
  }
  if (title) {
    listParam.push("title=" + title);
  }
  if (skip === 0 || skip) {
    listParam.push("skip=" + skip);
  }

  if (name === 0 || name) {
    listParam.push("name=" + name);
  }
  paramURL = listParam.join("&");
  return paramURL;
};

export default generateParamList;
