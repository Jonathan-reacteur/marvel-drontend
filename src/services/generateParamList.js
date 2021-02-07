// Cette classe pourrait être factorisé, mais anticipant la possible nécessité de faire des transodformations sur les
// paramètres, je laisse cette partie ainsi.

const generateParamList = (param) => {
  if (!param) {
    return "?";
  }
  const listParam = [];
  const { skip, limit, title } = param;
  let paramURL = "";
  if (limit) {
    listParam.push(limit);
  }
  if (title) {
    listParam.push(title);
  }
  if (skip) {
    listParam.push(skip);
  }
  paramURL = listParam.join("&");
  return paramURL;
};

export default generateParamList;
