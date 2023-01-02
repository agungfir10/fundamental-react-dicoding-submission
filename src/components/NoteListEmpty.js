import PropTypes from "prop-types";
import React from "react";

function NoteListEmpty({ message }) {
  return (
    <section className="notes-list-empty">
      <p className="notes-list__empty">{message}</p>
    </section>
  );
}

NoteListEmpty.defaultProps = {
  message: "Tidak ada catatan",
};

NoteListEmpty.propTypes = {
  message: PropTypes.string,
};
export default NoteListEmpty;
