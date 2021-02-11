import React from "react";

const NavigationThroughPages = (props) => {
  const { setPageNumber, pageNumber, countPage } = props;

  const handlerPageChangePlus = () => {
    const nbpage = pageNumber + 1;
    setPageNumber(nbpage);
  };

  const handlerPageChangeMoins = () => {
    const nbpage = pageNumber - 1;
    setPageNumber(nbpage);
  };
  const handlePageChange = (pageNumberToChange) => {
    console.log(`active page is ${pageNumberToChange}`);
    setPageNumber({ pageNumberToChange });
  };
  return (
    <>
      <div className="navigationThroughPages">
        <div className="navigationThroughPages--center">
          {pageNumber > 1 ? (
            <button
              className="boutonNav"
              onClick={() => handlerPageChangeMoins()}
            >
              Page précédente
            </button>
          ) : null}
          <button className="boutonNav" onClick={() => handlerPageChangePlus()}>
            Page suivante
          </button>
        </div>
      </div>
    </>
  );
};

export default NavigationThroughPages;
