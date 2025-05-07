import { style } from '@vanilla-extract/css'

export const root = style({
  display: 'flex',
  padding: '0px 48px 48px 116px', // TODO: Media query
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
  justifyContent: 'space-between',
})

export const accordionBox = style({
  width: '100%',
})

export const relatedCardInnerFrame = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '24px',
  alignSelf: 'stretch',
})

export const relatedCardContent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  flex: '1 0 0',
})

