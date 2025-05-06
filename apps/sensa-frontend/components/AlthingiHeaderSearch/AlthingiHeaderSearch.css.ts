import { blue400, white } from '@island.is/island-ui/theme'
import { style } from '@vanilla-extract/css'

export const root = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: "#184c97",  // Althingi blue
  paddingTop: '50px',
  paddingLeft: '50px',
  paddingRight: '50px',
  height: '320px'
})


export const leftBox = style({
  display: 'flex',
  flexDirection: 'column',
  color: white,
  justifyContent: 'space-around',
  width: '30%'

})

export const rightBox = style({
  overflow: 'hidden',

})

export const image = style({
})