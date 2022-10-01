import styled from '@emotion/styled';

import { COLOR_NAME, colors, spacing } from '@app/theme';

export const Nav = styled.ul({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: spacing.medium,
  listStyle: 'none',
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
