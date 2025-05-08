// AppLayout.css.ts
import { blue100, blue200, blue400, blueberry100, red600 } from '@island.is/island-ui/theme'
import { style } from '@vanilla-extract/css'

export const layoutWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
})

export const content = style({
  flex: 1,
})


export const islandBox = style({
  backgroundColor: blue100,
  paddingLeft: 20,
  paddingRight: 20
})

export const althingiHeader = style({
  paddingLeft: 20,
  paddingRight: 20
})
