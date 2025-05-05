import React, { useContext, useState } from 'react'
import { I18nContext } from '../../i18n/I18n'
import { Locale } from '@island.is/shared/types'
import { Button } from '@island.is/island-ui/core'

const LanguageSwitcher: React.FC = () => {
  const i18n = useContext(I18nContext)
  const [currentLocale, setCurrentLocale] = useState<Locale>(i18n?.activeLocale ?? 'is')
  const [isSwitching, setIsSwitching] = useState(false)

  if (!i18n) return null

  const toggleLocale = async () => {
    const nextLocale: Locale = currentLocale === 'is' ? 'en' : 'is'
    setIsSwitching(true)
    setCurrentLocale(nextLocale) // IMMEDIATELY lock label

    const { default: newTranslations } = await import(`../../i18n/locales/${nextLocale}.json`)
    i18n.locale(nextLocale, newTranslations)

    // Delay to make sure context settles
    setTimeout(() => {
      setIsSwitching(false)
    }, 100)
  }

  const label = currentLocale === 'is' ? 'EN' : 'IS'

  return (
    <Button onClick={toggleLocale} variant='utility' disabled={isSwitching}>
      {label}
    </Button>
  )
}

export default LanguageSwitcher
