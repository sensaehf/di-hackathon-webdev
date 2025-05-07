import { style } from '@vanilla-extract/css'

export const tabs = style({
  display: 'flex',
  paddingBottom: '16px',
  alignItems: 'center',
  alignSelf: 'stretch',
})

export const search = style({
  display: 'flex',
  gap: '16px',
  width: '100%',
  justifyContent: 'space-between'
})

export const accordionChild = style({
  display: 'flex',
  padding: '24px 0px',
  alignItems: 'center',
  gap: '32px',
  alignSelf: 'stretch',
  justifyContent: 'space-between',
})

export const accordionBox = style({
  width: '100%',
})