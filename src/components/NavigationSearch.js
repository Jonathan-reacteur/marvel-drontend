import React from "react";
import { DebounceInput } from "react-debounce-input";

const NavigationSearch = (props) => {
  const { valueSearch, setValueSearch, typeSearch } = props;
  let placeHolderString = "";
  if (typeSearch === "character") {
    placeHolderString = "Saisissez un nom de hero";
  }
  if (typeSearch === "comic") {
    placeHolderString = "Saisissez un titre de comic";
  }
  return (
    <div className="navigationSearch">
      <div className="navigationSearch--center">
        <form className="formSearch">
          <div class="search-box">
            <DebounceInput
              minLength={2}
              debounceTimeout={600}
              type="text"
              placeholder={placeHolderString}
              value={valueSearch}
              onChange={(e) => {
                setValueSearch(e.target.value);
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NavigationSearch;
