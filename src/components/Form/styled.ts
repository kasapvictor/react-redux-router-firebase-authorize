import styled from '@emotion/styled';

import { COLOR_NAME, colors, spacing } from '@app/theme';

export const FormStyled = styled.form({
  marginBottom: spacing.medium,
});

export const LabelStyles = styled.label({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingBottom: spacing.medium,

  '&:focus': {
    color: colors[COLOR_NAME.DANGER],
  },
});

export const InputIconStyled = styled.div({
  marginLeft: spacing.small,
});

export const InputStyled = styled.input({
  padding: spacing.small,
  border: '1px solid',
  borderColor: colors[COLOR_NAME.ACCENT01],
  borderRadius: 4,
  outline: 'none',

  [`& + ${InputIconStyled}`]: {
    color: colors[COLOR_NAME.ACCENT01],
  },

  '&:focus': {
    borderColor: colors[COLOR_NAME.DANGER],

    [`& + ${InputIconStyled}`]: {
      color: colors[COLOR_NAME.DANGER],
    },
  },
});

const activeStyles = {
  color: colors[COLOR_NAME.DANGER],
  borderColor: colors[COLOR_NAME.ERROR],
};

export const NavItem = styled.li({
  a: {
    paddingBottom: spacing.xxsmall,
    textDecoration: 'none',
    color: colors[COLOR_NAME.ACCENT01],
    borderBottom: '5px solid',
    borderColor: 'transparent',
  },

  'a:hover': {
    ...activeStyles,
  },

  '.active': {
    ...activeStyles,
  },
});
