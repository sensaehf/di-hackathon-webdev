import { style, globalStyle } from '@vanilla-extract/css'
import { themeUtils } from '@island.is/island-ui/theme'

export const imageContainerHidden = style({
  display: 'none',
  ...themeUtils.responsiveStyle({
    sm: {
      display: 'flex',
    },
  }),
})

export const image = style({
  width: 92,
  height: 126,
  flexShrink: 0,
  aspectRatio: '46/63'
})

export const icon = style({
  minWidth: 30,
  width: 40,
  height: 40,
  ...themeUtils.responsiveStyle({
    md: {
      minWidth: 40,
    },
  }),
})

globalStyle(`${icon} svg`, {
  height: '100%',
})
