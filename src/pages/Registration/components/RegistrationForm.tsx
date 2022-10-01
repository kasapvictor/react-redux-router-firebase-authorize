import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Form } from "@app/components";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useAppDispatch } from "@app/store";
import { setUser } from "@app/features";

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
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setError(`${errorCode}${errorMessage}`);
      });
  };

  return (
    <>
      <Form onClick={handleSubmit} />
      {!!error && <p className="error-text">{error}</p>}
      {!!!error && isAuth && <Navigate replace to="/" />}
    </>
  );
};
