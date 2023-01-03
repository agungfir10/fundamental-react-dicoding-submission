import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import UnAuthenticated from "../components/UnAuthenticated";
import { LocaleConsumer } from "../contexts/LocaleContext";
import { register } from "../utils/network-data";

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);

    if (!error) {
      navigate("/");
    }
  }

  return (
    <UnAuthenticated>
      <LocaleConsumer>
        {({ lang }) => (
          <section className="regsiter-page">
            <h2>
              {lang === "en"
                ? "Fill the form to register account."
                : "Isi form untuk mendaftar akun."}
            </h2>
            <div className="input-register">
              <RegisterInput registerHandler={onRegisterHandler} />
            </div>
            <p>
              {lang === "en" ? "Already have an account?" : "Sudah punya akun?"}{" "}
              <Link to="/">
                {lang === "en" ? "Login here" : "Login disini"}
              </Link>
            </p>
          </section>
        )}
      </LocaleConsumer>
    </UnAuthenticated>
  );
}

export default RegisterPage;
