import { Link } from "react-router-dom";

import { LoginForm } from "./components";

export const Login = () => {
  return (
    <>
      <h1>Login Page</h1>
      <LoginForm />
      <br />
      <Link className="link" to="/registration">
        Registration page
      </Link>
    </>
  );
};
