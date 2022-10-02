import { Navigate } from 'react-router-dom';

import { useAuth } from '@app/hooks';

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
            <strong>ID:</strong> <br />
            <code>{auth.id}</code>
          </p>
          <p>
            <strong>EMAIL:</strong> <br />
            <code>{auth.email}</code>
          </p>
          <p>
            <strong>TOKEN:</strong> <br />
            <code>{auth.token}</code>
          </p>
        </div>
      )}
    </>
  );
};
