import PropTypes from "prop-types";
import React from "react";
import useInput from "../hooks/useInput";

function LoginInput({ loginHandler }) {
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    loginHandler({ email, password });
  };

  return (
    <form onSubmit={onSubmitHandler} className="login-input">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
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
      <button type="submit">Login</button>
    </form>
  );
}

LoginInput.propTypes = {
  loginHandler: PropTypes.func.isRequired,
};

export default LoginInput;
