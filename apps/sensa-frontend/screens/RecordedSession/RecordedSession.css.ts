import { style } from "@vanilla-extract/css";

export const card = style({
  marginBottom: '20px'
})

export const cardContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px'
})

export const content = style({
  display: "flex",
flexDirection: "column",
alignItems: "flex-start",
gap: "24px",
alignSelf: "stretch",
})