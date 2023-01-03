import React from "react";
import LocaleContext from "../contexts/LocaleContext";

function NoteListEmpty() {
  const { lang } = React.useContext(LocaleContext);

  const messageLocale = lang === "en" ? "No Notes" : "Tidak ada catatan";
  return (
    <section className="notes-list-empty">
      <p className="notes-list__empty">{messageLocale}</p>
    </section>
  );
}

export default NoteListEmpty;
