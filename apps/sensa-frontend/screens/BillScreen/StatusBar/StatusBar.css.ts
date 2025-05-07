import { style } from '@vanilla-extract/css'

export const root = style({
  display: 'flex',
  width: '793px',
  padding: '0px 16px 24px 16px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
})

export const imgBox = style({
  display: 'flex',
  width: '793px',
  padding: '0px 16px 24px 16px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
  marginBottom: '-32px'
})

export const statusBar = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})

export const statusSteps = style({
  display: 'flex',
  width: '100px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
})

