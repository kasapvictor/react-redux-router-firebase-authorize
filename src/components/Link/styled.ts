import styled from '@emotion/styled';

import { COLOR_NAME, colors } from '@app/theme';

export const LinkStyled = styled.div({
  display: 'inline-block',

  '& > a': {
    color: colors[COLOR_NAME.ACCENT01],
    textDecoration: 'none',

    '&:hover': {
      color: colors[COLOR_NAME.ERROR],
    },
  },
});
