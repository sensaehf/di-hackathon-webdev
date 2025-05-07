import { style } from '@vanilla-extract/css'

export const box = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '24px',
  alignSelf: 'stretch',
})

export const audioBox = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '24px',
  alignSelf: 'stretch',
})


export const audioBoxInner = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "8px",
  flex: "1 0 0",
})
