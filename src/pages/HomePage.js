import React, { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import { Link, useSearchParams } from "react-router-dom";
import Authenticated from "../components/Authenticated";
import NoteItem from "../components/NoteItem";
import NoteListEmpty from "../components/NoteListEmpty";
import SearchBar from "../components/SearchBar";
import { LocaleConsumer } from "../contexts/LocaleContext";
import { getActiveNotes } from "../utils/network-data";

function HomePage() {
  const [query, setQuery] = useSearchParams();
  const [state, setState] = useState({
    loading: true,
    notes: [],
  });

  const handleOnSearch = (event) => {
    const value = event.target.value;
    setQuery({ keyword: value });
  };

  useEffect(() => {
    // async function loadActivesNotes() {
    //   const { data } = await getActiveNotes();
    //   setState({ notes: data, loading: false });
    // }
    // loadActivesNotes();
  }, []);

  return (
    <Authenticated>
      <LocaleConsumer>
        {({ lang }) => (
          <section className="homepage">
            <h2>{lang === "en" ? "Active Note" : "Catatan Aktif"}</h2>
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
            <div className="homepage__action">
              <Link to="/notes/new" preventScrollReset={true}>
                <button
                  className="action"
                  type="button"
                  title={lang === "en" ? "Add" : "Tambah"}
                >
                  <MdAdd />
                </button>
              </Link>
            </div>
          </section>
        )}
      </LocaleConsumer>
    </Authenticated>
  );
}

export default HomePage;
