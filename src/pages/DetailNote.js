import parser from "html-react-parser";
import React from "react";
import { MdArchive, MdDelete, MdUnarchive } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/local-data";
import NotFound from "./404";

function DetailNote() {
  const { id } = useParams();
  const note = getNote(id);

  const navigate = useNavigate();

  return note === undefined ? (
    <NotFound
      title="Note Not Found"
      message="Cannot found a note, please back to home!"
    />
  ) : (
    <section className="detail-page">
      <h3 className="detail-page__title">{note.title}</h3>
      <p className="detail-page__createdAt">
        {new Date(note.createdAt).toDateString()}
      </p>
      <div className="detail-page__body">{parser(note.body)}</div>
      <div className="detail-page__action">
        <button
          className="action"
          type="button"
          title="Arsipkan"
          onClick={() => {
            note.archived ? unarchiveNote(id) : archiveNote(id);
            navigate("/");
          }}
        >
          {note.archived ? <MdUnarchive /> : <MdArchive />}
        </button>
        <button
          className="action"
          type="button"
          title="Hapus"
          onClick={() => {
            deleteNote(id);
            navigate("/");
          }}
        >
          <MdDelete />
        </button>
      </div>
    </section>
  );
}

export default DetailNote;
