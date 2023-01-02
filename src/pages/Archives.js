import React from "react";
import { useSearchParams } from "react-router-dom";
import NoteItem from "../components/NoteItem";
import NoteListEmpty from "../components/NoteListEmpty";
import SearchBar from "../components/SearchBar";
import { getArchivedNotes } from "../utils/local-data";

function Archives() {
  const [query, setQuery] = useSearchParams();
  const handleOnSearch = (event) => {
    const value = event.target.value;
    setQuery({ keyword: value });
  };

  return (
    <section className="archives-page">
      <h2>Catatan Arsip</h2>
      <SearchBar onSearch={handleOnSearch} />
      <section className="notes-list">
        {getArchivedNotes().length === 0 ? (
          <NoteListEmpty message={"Arsip kosong"} />
        ) : (
          getArchivedNotes() &&
          getArchivedNotes()
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
    </section>
  );
}

export default Archives;
