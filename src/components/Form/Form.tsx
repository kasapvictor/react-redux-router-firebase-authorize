import { FC, ChangeEvent } from 'react';
import { useImmer } from 'use-immer';
import { toast } from 'react-toastify';

import { InitialStateProps, FormProps } from './types';

const initialState = (): InitialStateProps => ({
  email: '',
  password: '',
});

export const Form: FC<FormProps> = ({ onClick }) => {
  const [data, setData] = useImmer(initialState);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((draft) => {
      // @ts-ignore
      draft[name] = value.trim();
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onClick(data);
    toast.success('Hello', { theme: 'dark' });
  };

  return (
    <form>
      <label htmlFor="email">
        <p>Email:</p>
        <span className="material-icons">account_circle</span>
        <input
          type="email"
          name="email"
          placeholder="test@test.io"
          autoComplete="username"
          value={data.email}
          onChange={handleChangeInput}
        />
      </label>

      <label htmlFor="password">
        <p>Password:</p>
        <input
          type="password"
          name="password"
          placeholder="Minimum 6 characters"
          autoComplete="current-password"
          value={data.password ?? ''}
          onChange={handleChangeInput}
        />
      </label>

      <label>
        <button className="button" onClick={handleSubmit} type="submit">
          Send
        </button>
      </label>
    </form>
  );
};
