import { MantineProvider } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Head from "././components/Head";
import { AuthProvider } from "./contexts/AuthContext";
import { LocaleProvider } from "./contexts/LocaleContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import useLocalStorage from "./hooks/useLocalStorage";
import NotFound from "./pages/404";
import ArchivesPage from "./pages/ArchivesPage";
import Dashboard from "./pages/Dashboard";
import DetailNote from "./pages/DetailNotePage";
import ListNote from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import NewNote from "./pages/NewNotePage";
import RegisterPage from "./pages/RegisterPage";
import "./styles/style.css";
import { getUserLogged, putAccessToken } from "./utils/network-data";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const [lang, setLang] = useLocalStorage("lang", "en");
  const [authUser, setAuthUser] = useState(null);
  const [initializing, setInitilizing] = useState(false);

  useEffect(() => {
    // const loadUser = async () => {
    //   const { data } = await getUserLogged();
    //   setAuthUser(data);
    //   setInitilizing(false);
    // };
    // loadUser();
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleLang = () => {
    setLang(lang === "en" ? "id" : "en");
  };

  const onLoginSuccess = async ({ accessToken }) => {
    // putAccessToken(accessToken);
    // const { data } = await getUserLogged();
    // setAuthUser(data);
  };

  const onLogout = () => {
    setAuthUser(null);
    putAccessToken("");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.title = lang === "en" ? "Notes App" : "Aplikasi Catatan";
  }, [lang]);

  if (initializing) {
    return null;
  }

  return (
    <MantineProvider
      theme={{ colorScheme: "light" }}
      withNormalizeCSS
      withGlobalStyles
    >
      <AuthProvider value={{ authUser }}>
        <ThemeProvider value={{ theme, toggleTheme }}>
          <LocaleProvider value={{ lang, toggleLang }}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Dashboard />}>
                  <Route path="landing" element={<LandingPage />} />
                  <Route path="" element={<ListNote />} />
                  <Route path="notes/new" element={<NewNote />} />
                  <Route path="notes/:id" element={<DetailNote />} />
                  <Route path="archives" element={<ArchivesPage />} />
                </Route>
                <Route
                  path="/login"
                  element={<LoginPage onLoginSuccess={onLoginSuccess} />}
                />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </LocaleProvider>
        </ThemeProvider>
      </AuthProvider>
    </MantineProvider>
  );
}

export default App;
