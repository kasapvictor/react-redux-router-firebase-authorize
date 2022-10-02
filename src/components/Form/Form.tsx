import { FC, ChangeEvent } from 'react';
import { useImmer } from 'use-immer';

import { Button } from '@app/components';

import { InitialStateProps, FormProps } from './types';
import { LabelStyles, InputStyled, InputIconStyled, FormStyled } from './styled';

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

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onClick(data);
  };

  return (
    <FormStyled>
      <LabelStyles htmlFor="email">
        <InputStyled
          type="email"
          name="email"
          placeholder="test@test.io"
          autoComplete="username"
          value={data.email}
          onChange={handleChangeInput}
        />
        <InputIconStyled>
          <span className="material-icons">alternate_email</span>
        </InputIconStyled>
      </LabelStyles>

      <LabelStyles htmlFor="password">
        <InputStyled
          type="password"
          name="password"
          placeholder="Minimum 6 characters"
          autoComplete="current-password"
          value={data.password ?? ''}
          onChange={handleChangeInput}
        />

        <InputIconStyled>
          <span className="material-icons">key</span>
        </InputIconStyled>
      </LabelStyles>

      <label>
        <Button type="submit" onClick={handleSubmit}>
          Send
        </Button>
      </label>
    </FormStyled>
  );
};
