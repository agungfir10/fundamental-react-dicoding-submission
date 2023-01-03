import PropTypes from "prop-types";
import React from "react";

function NotFound({ title, message }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

NotFound.defaultProps = {
  title: "404",
  message: "Page Not Found",
};

NotFound.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
};
export default NotFound;
