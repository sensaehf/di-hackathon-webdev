import React from 'react'
import { Button } from '@island.is/island-ui/core'

export interface LanguageSwitcherProps
{
  isSwitching: boolean
  onClick: () => void
  label: string
}

const LanguageSwitcher = ({onClick, label, isSwitching} : LanguageSwitcherProps) => {


  return (
    <Button onClick={onClick} variant='utility' disabled={isSwitching}>
      {label}
    </Button>
  )
}

export default LanguageSwitcher
