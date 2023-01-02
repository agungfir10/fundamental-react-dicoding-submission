import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./pages/404";
import Archives from "./pages/Archives";
import DetailNote from "./pages/DetailNote";
import ListNote from "./pages/HomePage";
import NewNote from "./pages/NewNote";
import "./styles/style.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<ListNote />} />
            <Route path="/notes/new" element={<NewNote />} />
            <Route path="/notes/:id" element={<DetailNote />} />
            <Route path="/archives" element={<Archives />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
