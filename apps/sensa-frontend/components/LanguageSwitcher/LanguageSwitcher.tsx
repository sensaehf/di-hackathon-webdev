import React, { useContext, useState } from 'react'
import { I18nContext } from '../../i18n/I18n'
import { Locale } from '@island.is/shared/types'
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
