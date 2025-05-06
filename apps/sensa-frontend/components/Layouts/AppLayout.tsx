import React, { FC, ReactNode, useContext, useState } from 'react'
import { GridContainer, GridRow, GridColumn, Page, Header, Footer } from '@island.is/island-ui/core'
import { I18nContext } from '../../i18n/I18n' // Adjust import to your path
import { Locale } from '@island.is/shared/types'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import SideBar from '../SideBar/SideBar'

interface LayoutProps {
  children: ReactNode
}


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
      <GridContainer>
        <GridRow>
          <GridColumn span={"4/12"}>
            <SideBar />
          </GridColumn>
          <GridColumn span={"8/12"}>
          {children}
          </GridColumn>
        </GridRow>
      </GridContainer>
      <Footer
        topLinks={i18n.t.footer.topLinksInfo}
        topLinksContact={i18n.t.footer.topLinksContact}
        privacyPolicyLink={i18n.t.footer.privacyPolicyLink} //TODO
        termsLink={i18n.t.footer.termsLink} // TODO
        languageSwitchOnClick={toggleLocale}
        languageSwitchLink={i18n.t.footer.languageSwitchLink} //TODO
        bottomLinks={i18n.t.footer.bottomLinks}
        bottomLinksTitle={i18n.t.footer.bottomLinksTitle}
      />
    </Page>
  )
}
