// AppLayout.css.ts
import { style } from '@vanilla-extract/css'

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '16px',
  alignSelf: 'stretch',
})

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '8px',
  alignSelf: 'stretch',
})


export const content = style({
  display: "flex",
alignContent: "flex-start",
gap: "24px",
alignSelf: "stretch",
flexWrap: "wrap",
alignItems: "stretch",

})

export const box = style({
  justifyContent: 'space-between',
  flex: '1 1 0',
  minWidth: '600px',
  padding: '40px',
})


export const innerNewsCard = style({
  display: "flex",
flexDirection: "column",
alignItems: "flex-start",
gap: "16px",
flex: "1 0 0",
alignSelf: "stretch",
})