import { Link } from 'react-router-dom';

import { RegistrationForm } from './components';

export const Registration = () => {
  return (
    <>
      <h1>Registration Page</h1>

      <RegistrationForm />

      <Link className="link" to="/login">
        Login page
      </Link>
    </>
  );
};
