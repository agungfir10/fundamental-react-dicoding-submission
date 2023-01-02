import PropTypes from "prop-types";
import React from "react";

function SearchBar({ onSearch }) {
  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder="Cari berdasarkan judul ..."
        onChange={onSearch}
      />
    </section>
  );
}

SearchBar.protoTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
