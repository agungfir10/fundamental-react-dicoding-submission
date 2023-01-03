import React, { useState } from "react";
import { MdCheck } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Authenticated from "../components/Authenticated";
import { addNote } from "../utils/network-data";

function NewNote() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (title === "" && body === "") {
      alert("Jangan kosongkan title dan body");
    } else {
      const { error } = await addNote({ title, body });

      if (!error) {
        navigate("/");
      }
    }
  };

  return (
    <Authenticated>
      <section className="add-new-page">
        <div className="add-new-page__input">
          <input
            className="add-new-page__input__title"
            placeholder="Catatan rahasia"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <div
            className="add-new-page__input__body"
            contentEditable="true"
            data-placeholder="Sebenarnya saya adalah ...."
            onInput={(e) => setBody(e.target.innerHTML)}
          ></div>
        </div>
        <div className="add-new-page__action">
          <button
            className="action"
            type="button"
            title="Simpan"
            onClick={handleSubmit}
          >
            <MdCheck />
          </button>
        </div>
      </section>
    </Authenticated>
  );
}

export default NewNote;
