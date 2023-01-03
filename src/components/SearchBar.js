import PropTypes from "prop-types";
import React from "react";
import { LocaleConsumer } from "../contexts/LocaleContext";

function SearchBar({ onSearch }) {
  return (
    <LocaleConsumer>
      {({ lang }) => (
        <section className="search-bar">
          <input
            type="text"
            placeholder={
              lang === "en"
                ? "Search by title ..."
                : "Cari berdasarkan judul ..."
            }
            onChange={onSearch}
          />
        </section>
      )}
    </LocaleConsumer>
  );
}

SearchBar.protoTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
