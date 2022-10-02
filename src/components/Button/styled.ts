import styled from '@emotion/styled';

import { COLOR_NAME, spacing, colors } from '@app/theme';

export const ButtonStyled = styled.button({
  padding: `${spacing.small} ${spacing.large}`,
  borderRadius: spacing.xxsmall,
  border: 'none',
  backgroundColor: colors[COLOR_NAME.ACCENT01],
  color: colors[COLOR_NAME.WHITE],
  cursor: 'pointer',

  '&: hover': {
    backgroundColor: colors[COLOR_NAME.ERROR],
    color: colors[COLOR_NAME.WHITE],
  },

  '&: active': {
    backgroundColor: colors[COLOR_NAME.BLACK],
    color: colors[COLOR_NAME.WHITE],
  },
});
