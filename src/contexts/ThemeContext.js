import PropTypes from "prop-types";
import React from "react";

const ThemeContext = React.createContext();

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

ThemeProvider.propTypes = {
  value: PropTypes.shape({
    theme: PropTypes.string.isRequired,
    toggleTheme: PropTypes.func.isRequired,
  }),
};

export default ThemeContext;
