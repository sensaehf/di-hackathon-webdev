// AppLayout.css.ts
import { style } from '@vanilla-extract/css'

export const layoutWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
})

export const content = style({
  flex: 1,
})
