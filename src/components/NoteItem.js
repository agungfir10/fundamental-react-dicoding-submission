import parser from "html-react-parser";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

function NoteItem({ note: { id, title, createdAt, body } }) {
  const date = new Date(createdAt).toDateString();

  return (
    <article className="note-item">
      <h3 className="note-item__title">
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
      <p className="note-item__createdAt">{date}</p>
      <p className="note-item__body">{parser(body)}</p>
    </article>
  );
}

NoteItem.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};

export default NoteItem;
