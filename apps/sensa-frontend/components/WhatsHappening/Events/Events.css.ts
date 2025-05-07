import { style } from '@vanilla-extract/css'

export const root = style({
  backgroundColor: '#F8F5FA',
  display: 'flex',
  padding: '24px',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flex: '1 0 0',
  alignSelf: 'stretch',
})

export const innerBox = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '16px',
  alignSelf: 'stretch',
})

export const day = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  alignSelf: 'stretch',
})

export const timeBox = style({
  width: "96px",
minWidth: "80px",
})

export const line = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '8px',
  alignSelf: 'stretch',
})
