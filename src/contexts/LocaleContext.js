import PropTypes from "prop-types";
import React from "react";

const LocaleContext = React.createContext();
export const LocaleProvider = LocaleContext.Provider;
export const LocaleConsumer = LocaleContext.Consumer;

LocaleProvider.propTypes = {
  value: PropTypes.shape({
    lang: PropTypes.string.isRequired,
    toggleLang: PropTypes.func.isRequired,
  }),
};

export default LocaleContext;
