import { PropsWithChildren } from 'react';

export interface ButtonProps extends PropsWithChildren {
  // eslint-disable-next-line no-unused-vars
  onClick: (e: SubmitEvent) => void;
  type: 'button' | 'reset' | 'submit';
}
