import { Navigate } from "react-router-dom";
import { useAuth } from "@app/hooks";

export const Home = () => {
  const auth = useAuth();

  return (
    <>
      {!auth.isAuth ? (
        <Navigate replace to="/login" />
      ) : (
        <div>
          <h1>Home page</h1>
          <p>
            ID: <code>{auth.id}</code>
          </p>
          <p>
            EMAIL: <code>{auth.email}</code>
          </p>
          <p>
            TOKEN: <code>{auth.token}</code>
          </p>
        </div>
      )}
    </>
  );
};
