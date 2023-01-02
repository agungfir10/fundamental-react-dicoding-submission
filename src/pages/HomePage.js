import React from "react";
import { MdAdd } from "react-icons/md";
import { Link, useSearchParams } from "react-router-dom";
import NoteItem from "../components/NoteItem";
import NoteListEmpty from "../components/NoteListEmpty";
import SearchBar from "../components/SearchBar";
import { getActiveNotes } from "../utils/local-data";

function HomePage() {
  const [query, setQuery] = useSearchParams();
  const handleOnSearch = (event) => {
    const value = event.target.value;
    setQuery({ keyword: value });
  };

  return (
    <section className="homepage">
      <h2>Catatan Aktif</h2>
      <SearchBar onSearch={handleOnSearch} />
      <section className="notes-list">
        {getActiveNotes().length === 0 ? (
          <NoteListEmpty />
        ) : (
          getActiveNotes() &&
          getActiveNotes()
            .filter((note) =>
              note.title
                .toLowerCase()
                .includes(
                  query.get("keyword") === null ? "" : query.get("keyword")
                )
            )
            .map((note, index) => <NoteItem note={note} key={index} />)
        )}
      </section>
      <div className="homepage__action">
        <Link to="/notes/new" preventScrollReset={true}>
          <button className="action" type="button" title="Tambah">
            <MdAdd />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default HomePage;
