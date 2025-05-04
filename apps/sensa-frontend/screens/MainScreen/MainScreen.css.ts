import { style } from '@vanilla-extract/css'
import { theme, themeUtils } from '@island.is/island-ui/theme'

export const hoverable = style({
  transition: 'opacity 0.2s ease-in-out',
  selectors: {
    '&:hover': {
      cursor: 'pointer',
      opacity: 0.8,
    },
  },
})

