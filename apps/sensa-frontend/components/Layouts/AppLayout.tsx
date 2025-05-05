import React, { FC, ReactNode, useContext, useState } from 'react'
import { GridContainer, Page, Header, Footer } from '@island.is/island-ui/core'
import { I18nContext } from '../../i18n/I18n' // Adjust import to your path
import { Locale } from '@island.is/shared/types'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'

interface LayoutProps {
  children: ReactNode
}

const topLinks = [
  {
    title: 'About Digital Iceland',
    href: 'https://stafraent.island.is/',
  },
  {
    title: 'Public institutions',
    href: 'https://island.is/en/o',
  },
]

const topLinksContact = [
  {
    title: 'How can we help?',
    href: 'https://island.is/en/help',
  },
]

const privacyPolicyLink = {
  title: 'Privacy policy IS',
  href: '/personuverndarstefna-stafraent-islands',
}
const termsLink = {
  title: 'Terms and Conditions',
  href: '/skilmalar-island-is',
}

const languageSwitchLink = {
  title: 'Iceland',
  href: '',
}

const bottomLinks = [
  {
    title: 'Samráðsgátt - Public Consulation',
    href: 'https://minarsidur.island.is/',
  },

]
const bottomLinksTitle = "Other Government sites"

export const AppLayout: FC<React.PropsWithChildren<LayoutProps>> = ({
  children,
}) => {
  const i18n = useContext(I18nContext)
  const [currentLocale, setCurrentLocale] = useState<Locale>(
    i18n?.activeLocale ?? 'is',
  )
  const [isSwitching, setIsSwitching] = useState(false)

  if (!i18n) return null

  const toggleLocale = async () => {
    const nextLocale: Locale = currentLocale === 'is' ? 'en' : 'is'
    setIsSwitching(true)
    setCurrentLocale(nextLocale) // IMMEDIATELY lock label

    const { default: newTranslations } = await import(
      `../../i18n/locales/${nextLocale}.json`
    )
    i18n.locale(nextLocale, newTranslations)

    // Delay to make sure context settles
    setTimeout(() => {
      setIsSwitching(false)
    }, 100)
  }

  const label = currentLocale === 'is' ? 'EN' : 'IS'

  return (
    <Page>
      <GridContainer>
        <Header headerItems={<LanguageSwitcher label={label} onClick={toggleLocale} isSwitching={isSwitching}/>} />
      </GridContainer>
      <GridContainer>{children}</GridContainer>
      <Footer
        topLinks={topLinks}
        topLinksContact={topLinksContact}
        privacyPolicyLink={privacyPolicyLink}
        termsLink={termsLink}
        languageSwitchOnClick={toggleLocale}
        languageSwitchLink={languageSwitchLink}
        bottomLinks={bottomLinks}
        bottomLinksTitle={bottomLinksTitle}
      />
    </Page>
  )
}
