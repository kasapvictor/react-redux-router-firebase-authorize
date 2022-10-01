import { FC } from 'react';

import { TitleProps } from './types';
import { TitleH1, TitleH2, TitleH3, TitleH4 } from './styled';

export const Title: FC<TitleProps> = ({ variant, children }) => {
  const titleVariant = {
    h1: TitleH1,
    h2: TitleH2,
    h3: TitleH3,
    h4: TitleH4,
  };

  // @ts-ignore
  const TitleComponent = titleVariant[variant];

  return <TitleComponent>{children}</TitleComponent>;
};
