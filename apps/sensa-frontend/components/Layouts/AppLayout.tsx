import React, { FC, ReactNode, useContext, useState } from 'react'
import {
  GridContainer,
  Page,
  Header,
  Footer,
  FooterLinkProps,
  Button,
  Text,
  Box,
  UserMenu,
  Icon,
} from '@island.is/island-ui/core'
import { I18nContext } from '../../i18n/I18n' // Adjust import to your path
import { Locale } from '@island.is/shared/types'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import * as styles from './AppLayout.css'
import Link from 'next/link'
import AlthingiHeader from '../Header/AlthingiHeader'

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
    i18n.activeLocale = nextLocale

    // Delay to make sure context settles
    setTimeout(() => {
      setIsSwitching(false)
    }, 100)
  }

  const label = currentLocale === 'is' ? 'EN' : 'IS'

  return (
    <>
      <Box className={styles.layoutWrapper}>
        <header>
          <Box className={styles.islandBox}>
            <Header
              logoRender={(defaultLogo) => <Link href="/">{defaultLogo}</Link>}
            />
          </Box>
          <Box className={styles.althingiHeader}>
            <AlthingiHeader
              headerItems={
                <>
                  <LanguageSwitcher
                    label={label}
                    onClick={toggleLocale}
                    isSwitching={isSwitching}
                  />
                  <Button variant="utility">
                    Menu{' '}
                    <Box marginLeft={1}>
                      <Icon size='small' type="outline" icon="menu" color="blue400" />
                    </Box>
                  </Button>
                </>
              }
            />
          </Box>
        </header>

        {children}

        <Footer
          topLinks={i18n.t.footer.topLinksInfo}
          topLinksContact={i18n.t.footer.topLinksContact}
          privacyPolicyLink={i18n.t.footer.privacyPolicyLink} //TODO
          termsLink={i18n.t.footer.termsLink} // TODO
          languageSwitchOnClick={toggleLocale}
          languageSwitchLink={i18n.t.footer.languageSwitchLink} //TODO
          bottomLinks={i18n.t.footer.bottomLinks}
          bottomLinksTitle={i18n.t.footer.bottomLinksTitle}
          showMiddleLinks={true}
          middleLinksTitle={i18n.t.footer.middleLinksTitle}
          middleLinks={i18n.t.footer.middleLinks}
        />
      </Box>
    </>

  )
}
