import { style } from '@vanilla-extract/css'

export const bioFrame = style({
  display: 'flex',
  padding: '24px 0px',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  alignSelf: 'stretch',
})

export const biography = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '24px',
})

export const bioLines = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  alignSelf: 'stretch',
})

export const bioLine = style({
  display: 'flex',
  alignItems: 'center',
  gap: '24px',
  alignSelf: 'stretch',
})

export const contactBox = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
})

export const img = style({
  width: '220px',
  height: '304px',
  aspectRatio: '55/76',
})

export const contactLine = style({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
})

export const socialMedia = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '8px',
})

export const socialMediaLine = style({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
})
