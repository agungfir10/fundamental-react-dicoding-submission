import PropTypes from "prop-types";
import React from "react";
import { Navigate } from "react-router-dom";
import { AuthConsumer } from "../contexts/AuthContext";

function Authenticated({ children }) {
  return (
    <AuthConsumer>
      {({ authUser }) =>
        authUser !== null ? children : <Navigate to="/login" />
      }
    </AuthConsumer>
  );
}

Authenticated.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Authenticated;
