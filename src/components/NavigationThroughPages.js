import React from "react";

const NavigationThroughPages = (props) => {
  const { setPageNumber, pageNumber } = props;

  const handlerPageChangePlus = () => {
    const nbpage = pageNumber + 1;
    setPageNumber(nbpage);
  };

  const handlerPageChangeMoins = () => {
    const nbpage = pageNumber - 1;
    setPageNumber(nbpage);
  };
  return (
    <>
      {pageNumber > 1 ? (
        <div onClick={() => handlerPageChangeMoins()}>Page précédente</div>
      ) : null}
      <div onClick={() => handlerPageChangePlus()}>Page suivante</div>
    </>
  );
};

export default NavigationThroughPages;
