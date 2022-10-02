import { FC, PropsWithChildren } from 'react';

import { LinkStyled } from './styled';

export const Link: FC<PropsWithChildren> = ({ children }) => {
  return <LinkStyled>{children}</LinkStyled>;
};
