import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import UnAuthenticated from "../components/UnAuthenticated";
import { LocaleConsumer } from "../contexts/LocaleContext";
import { login } from "../utils/network-data";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Flex,
} from "@mantine/core";

// function LoginPage({ onLoginSuccess }) {
//   const onLoginHandler = async (user) => {
//     const { error, data } = await login(user);

//     if (!error) {
//       onLoginSuccess(data);
//     }
//   };
//   return (
//     <UnAuthenticated>
//       <LocaleConsumer>
//         {({ lang }) => (
//           <section className="login-page">
//             <h2>
//               {lang === "en"
//                 ? "Please, login to use the app."
//                 : "Yuk, login untuk menggunakan aplikasi."}
//             </h2>
//             <div className="input-login">
//               <LoginInput loginHandler={onLoginHandler} />
//             </div>
//             <p>
//               {lang === "en" ? "Don't have an account?" : "Belum punya akun?"}{" "}
//               <Link to="/register">
//                 {lang === "en" ? "Register here" : "Daftar di sini"}
//               </Link>
//             </p>
//           </section>
//         )}
//       </LocaleConsumer>
//     </UnAuthenticated>
//   );
// }

// LoginPage.propTypes = {
//   onLoginSuccess: PropTypes.func.isRequired,
// };

function LoginPage(props) {
  const onLoginHandler = async (user) => {
    const { error, data } = await login(user);

    if (!error) {
      props.onLoginSuccess(data);
    }
  };

  const [type, toggle] = useToggle(["login", "register"]);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  return (
    <Flex display="flex" justify="center" align="center" mih="100vh">
      <Paper radius="md" p="xl" withBorder {...props} miw="420px">
        <Text size="lg" weight={500}>
          Welcome to Mantine, {type} with
        </Text>

        <form onSubmit={form.onSubmit(() => {})}>
          <Stack>
            {type === "register" && (
              <TextInput
                label="Name"
                placeholder="Your name"
                value={form.values.name}
                onChange={(event) =>
                  form.setFieldValue("name", event.currentTarget.value)
                }
              />
            )}

            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email && "Invalid email"}
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={
                form.errors.password &&
                "Password should include at least 6 characters"
              }
            />

            {type === "register" && (
              <Checkbox
                label="I accept terms and conditions"
                checked={form.values.terms}
                onChange={(event) =>
                  form.setFieldValue("terms", event.currentTarget.checked)
                }
              />
            )}
          </Stack>

          <Group position="apart" mt="xl">
            <Anchor
              component="button"
              type="button"
              color="dimmed"
              onClick={() => toggle()}
              size="xs"
            >
              {type === "register"
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </Anchor>
            <Button type="submit">{upperFirst(type)}</Button>
          </Group>
        </form>
      </Paper>
    </Flex>
  );
}

export default LoginPage;
