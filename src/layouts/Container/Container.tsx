import { FC, PropsWithChildren } from 'react';

import { ContainerStyled } from './styled';

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};
