import { FC } from 'react';

import { ButtonStyled } from './styled';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({ onClick, children, type }) => {
  return (
    <>
      {/* @ts-ignore */}
      <ButtonStyled onClick={onClick} type={type}>
        {children}
      </ButtonStyled>
    </>
  );
};
