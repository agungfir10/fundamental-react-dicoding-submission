import PropTypes from "prop-types";
import React from "react";
import {
  MdDarkMode,
  MdGTranslate,
  MdLightMode,
  MdLogout,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthConsumer } from "../contexts/AuthContext";
import { LocaleConsumer } from "../contexts/LocaleContext";
import { ThemeConsumer } from "../contexts/ThemeContext";

function Header({ logout }) {
  return (
    <AuthConsumer>
      {({ authUser }) => (
        <ThemeConsumer>
          {({ theme, toggleTheme }) => (
            <LocaleConsumer>
              {({ lang, toggleLang }) => (
                <header>
                  <h1>
                    <Link to="/">
                      {lang === "en" ? "Notes App" : "Aplikasi Catatan"}
                    </Link>
                  </h1>
                  <div className="navigation">
                    <ul>
                      {authUser !== null && (
                        <li>
                          <Link to="/archives">
                            {lang === "en" ? "Archived" : "Terarsip"}
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                  <button
                    className="toggle-locale"
                    type="button"
                    onClick={() => toggleLang()}
                  >
                    <MdGTranslate />
                  </button>
                  <button
                    className="toggle-theme"
                    type="button"
                    onClick={() => toggleTheme()}
                  >
                    {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
                  </button>
                  {authUser !== null && (
                    <button
                      className="button-logout"
                      type="button"
                      onClick={logout}
                    >
                      <MdLogout />
                      {authUser !== null && authUser.name}
                    </button>
                  )}
                </header>
              )}
            </LocaleConsumer>
          )}
        </ThemeConsumer>
      )}
    </AuthConsumer>
  );
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Header;
