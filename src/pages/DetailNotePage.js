import parser from "html-react-parser";
import React, { useContext, useEffect, useState } from "react";
import { MdArchive, MdDelete, MdUnarchive } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import Authenticated from "../components/Authenticated";
import LocaleContext from "../contexts/LocaleContext";
import { showFormattedDate } from "../utils";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/network-data";
import NotFound from "./404";

function DetailNote() {
  const { lang } = useContext(LocaleContext);
  const { id } = useParams();
  const locale = lang === "en" ? "en-US" : "id-ID";
  const [note, setNote] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNote = async () => {
      const { data } = await getNote(id);
      setNote(data);
      setLoading(false);
    };
    loadNote();
  }, []);

  const navigate = useNavigate();

  if (loading) {
    return "Loading...";
  }

  return (
    <Authenticated>
      {note === null ? (
        <NotFound
          title="Note Not Found"
          message="Cannot found a note, please back to home!"
        />
      ) : (
        <section className="detail-page">
          <h3 className="detail-page__title">{note.title}</h3>
          <p className="detail-page__createdAt">
            {showFormattedDate(note.createdAt, locale)}
          </p>
          <div className="detail-page__body">{parser(note.body)}</div>
          <div className="detail-page__action">
            <button
              className="action"
              type="button"
              title="Arsipkan"
              onClick={async () => {
                const { error } = note.archived
                  ? await unarchiveNote(id)
                  : await archiveNote(id);
                if (!error) {
                  navigate("/");
                }
              }}
            >
              {note.archived ? <MdUnarchive /> : <MdArchive />}
            </button>
            <button
              className="action"
              type="button"
              title="Hapus"
              onClick={async () => {
                const { error } = await deleteNote(id);
                if (!error) {
                  navigate("/");
                }
              }}
            >
              <MdDelete />
            </button>
          </div>
        </section>
      )}
    </Authenticated>
  );
}

export default DetailNote;
