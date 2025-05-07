import { style } from '@vanilla-extract/css'

export const root = style({
  display: 'flex',
  padding: '0px 48px 48px 116px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '16px',
  flex: '1 0 0',
})

export const accordionChild = style({
  display: 'flex',
  padding: '24px 0px',
  alignItems: 'center',
  gap: '32px',
  alignSelf: 'stretch',
  justifyContent: 'space-between'
})

export const accordionBox = style({
  width: '100%'
})