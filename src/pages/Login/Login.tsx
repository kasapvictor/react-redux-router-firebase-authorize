import { Link } from 'react-router-dom';

import { Link as LinkComponent } from '@app/components';

import { LoginForm } from './components';

export const Login = () => {
  return (
    <>
      <h1>Login Page</h1>
      <LoginForm />
      <LinkComponent>
        <Link className="link" to="/registration">
          Registration page
        </Link>
      </LinkComponent>
    </>
  );
};
