import PropTypes from "prop-types";
import React from "react";
import { Navigate } from "react-router-dom";
import { AuthConsumer } from "../contexts/AuthContext";

function UnAuthenticated({ children }) {
  return (
    <AuthConsumer>
      {({ authUser }) => (authUser === null ? children : <Navigate to="/" />)}
    </AuthConsumer>
  );
}

UnAuthenticated.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UnAuthenticated;
