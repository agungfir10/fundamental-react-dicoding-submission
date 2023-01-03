import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import UnAuthenticated from "../components/UnAuthenticated";
import { LocaleConsumer } from "../contexts/LocaleContext";
import { login } from "../utils/network-data";

function LoginPage({ onLoginSuccess }) {
  const onLoginHandler = async (user) => {
    const { error, data } = await login(user);

    if (!error) {
      onLoginSuccess(data);
    }
  };
  return (
    <UnAuthenticated>
      <LocaleConsumer>
        {({ lang }) => (
          <section className="login-page">
            <h2>
              {lang === "en"
                ? "Please, login to use the app."
                : "Yuk, login untuk menggunakan aplikasi."}
            </h2>
            <div className="input-login">
              <LoginInput loginHandler={onLoginHandler} />
            </div>
            <p>
              {lang === "en" ? "Don't have an account?" : "Belum punya akun?"}{" "}
              <Link to="/register">
                {lang === "en" ? "Register here" : "Daftar di sini"}
              </Link>
            </p>
          </section>
        )}
      </LocaleConsumer>
    </UnAuthenticated>
  );
}

LoginPage.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
