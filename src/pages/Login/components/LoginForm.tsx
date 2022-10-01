import { useState } from "react";
import { Form } from "@app/components";
import { Navigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { setUser } from "@app/features";
import { useAppDispatch } from "@app/store";

interface formDataProps {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string | null>(null);
  const [isAuth, setIsAuth] = useState(false);

  const handleSubmit = (formData: formDataProps) => {
    setError(null);

    const auth = getAuth();

    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const { email, uid: id, refreshToken: token } = userCredential.user;
        dispatch(setUser({ email, token, id }));
        setIsAuth(true);
      })
      .catch((error) => {
        const errorCode: string | null = error.code;
        const errorMessage: string | null = error.message;

        setError(`${errorCode}: ${errorMessage}`);
      });
  };

  return (
    <>
      <Form onClick={handleSubmit} />
      {error && <p className="error-text">{error}</p>}
      {!error && isAuth && <Navigate replace to="/" />}
    </>
  );
};
