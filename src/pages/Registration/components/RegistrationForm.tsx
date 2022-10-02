import { useState } from 'react';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { Form } from '@app/components';
import { setUser } from '@app/features';
import { useAppDispatch } from '@app/store';

interface formDataProps {
  email: string;
  password: string;
}

export const RegistrationForm = () => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string | null>(null);
  const [isAuth, setIsAuth] = useState(false);

  const handleSubmit = (formData: formDataProps) => {
    setError(null);
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const { email, uid: id, refreshToken: token } = userCredential.user;

        dispatch(setUser({ email, token, id }));
        setIsAuth(true);

        toast.success('Hello', { theme: 'dark' });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setError(`${errorCode}${errorMessage}`);
        toast.success(errorMessage, { theme: 'dark', type: 'error' });
      });
  };

  return (
    <>
      <Form onClick={handleSubmit} />
      {!error && isAuth && <Navigate replace to="/" />}
    </>
  );
};
