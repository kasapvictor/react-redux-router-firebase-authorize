import { Link } from 'react-router-dom';

import { Link as LinkComponent } from '@app/components';

import { RegistrationForm } from './components';

export const Registration = () => {
  return (
    <>
      <h1>Registration Page</h1>

      <RegistrationForm />

      <LinkComponent>
        <Link className="link" to="/login">
          Login page
        </Link>
      </LinkComponent>
    </>
  );
};
