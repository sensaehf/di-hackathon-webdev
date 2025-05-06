// AppLayout.css.ts
import { style } from '@vanilla-extract/css'

export const root = style({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  boxSizing: 'border-box',
  gap: '16px', // optional: spacing between boxes

})


export const box = style({
  paddingTop: '24px',
  paddingRight: '32px',
  paddingBottom: '24px',
  paddingLeft: '32px',
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  borderRadius: '8px',
  border: '1px solid #CCDFFF'
})

export const box1 = style({
  paddingTop: '24px',
  paddingRight: '32px',
  paddingBottom: '24px',
  paddingLeft: '32px',
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  borderRadius: '8px',
})

export const player = style({
  marginBottom: '10px'
})