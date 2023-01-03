import PropTypes from "prop-types";
import React from "react";
import useInput from "../hooks/useInput";

function RegisterInput({ registerHandler }) {
  const [name, handleNameChange] = useInput("");
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const [confirmPassword, handlePasswordConfirmChange] = useInput("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    password !== confirmPassword
      ? alert("Confirm password not match!")
      : registerHandler({ name, email, password });
  };

  return (
    <form onSubmit={onSubmitHandler} className="register-input">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={handleNameChange}
        name="name"
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        name="email"
        onChange={handleEmailChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={confirmPassword}
        onChange={handlePasswordConfirmChange}
      />
      <button type="submit">Register</button>
    </form>
  );
}

RegisterInput.propTypes = {
  registerHandler: PropTypes.func.isRequired,
};

export default RegisterInput;
