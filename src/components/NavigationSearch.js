import React from "react";
import { DebounceInput } from "react-debounce-input";

const NavigationSearch = (props) => {
  const { valueSearch, setValueSearch } = props;
  return (
    <div>
      <form>
        <div class="search-box">
          <DebounceInput
            minLength={2}
            debounceTimeout={600}
            type="text"
            placeholder="Saisissez un nom de hero"
            value={valueSearch}
            onChange={(e) => {
              setValueSearch(e.target.value);
              console.log("COUCOU");
            }}
          />
          {/* <input
            type="text"
            class="txt"
            placeholder="Saisissez un nom de hero"
            value={valueSearch}
            onChange={(e) => {
              setValueSearch(e.target.value);
            }}
          ></input> */}
        </div>
      </form>
    </div>
  );
};

export default NavigationSearch;
