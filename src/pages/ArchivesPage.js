import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Authenticated from "../components/Authenticated";
import NoteItem from "../components/NoteItem";
import NoteListEmpty from "../components/NoteListEmpty";
import SearchBar from "../components/SearchBar";
import { LocaleConsumer } from "../contexts/LocaleContext";
import { getArchivedNotes } from "../utils/network-data";

function ArchivesPage() {
  const [query, setQuery] = useSearchParams();
  const [state, setState] = useState({ loading: true, notes: [] });

  const handleOnSearch = (event) => {
    const value = event.target.value;
    setQuery({ keyword: value });
  };

  useEffect(() => {
    const loadArchiveNotes = async () => {
      const { data } = await getArchivedNotes();
      setState({ loading: false, notes: data });
    };
    loadArchiveNotes();
  }, []);

  return (
    <Authenticated>
      <LocaleConsumer>
        {({ lang }) => (
          <section className="archives-page">
            <h2>{lang === "en" ? "Archive Notes" : "Catatan Arsip"}</h2>
            <SearchBar onSearch={handleOnSearch} />
            {state.loading && "Loading..."}
            {state.notes.length === 0 ? (
              <NoteListEmpty />
            ) : (
              <section className="notes-list">
                {state.notes &&
                  state.notes
                    .filter((note) =>
                      note.title
                        .toLowerCase()
                        .includes(
                          query.get("keyword") === null
                            ? ""
                            : query.get("keyword")
                        )
                    )
                    .map((note, index) => <NoteItem note={note} key={index} />)}
              </section>
            )}
          </section>
        )}
      </LocaleConsumer>
    </Authenticated>
  );
}

export default ArchivesPage;
