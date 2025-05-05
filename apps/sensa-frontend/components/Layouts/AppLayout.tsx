import React, { FC, ReactNode, useContext } from 'react'
import { GridContainer, Page, Header, Footer } from '@island.is/island-ui/core'
import Head from 'next/head'
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

export const AppLayout: FC<React.PropsWithChildren<LayoutProps>> = ({
  children,
}) => {


  return (
    <Page>
      <GridContainer>
        <Header headerItems={<LanguageSwitcher />} />
      </GridContainer>
      <GridContainer>{children}</GridContainer>
      <Footer
        topLinks={topLinks}
        topLinksContact={topLinksContact}
        privacyPolicyLink={privacyPolicyLink}
        termsLink={termsLink}
      />
    </Page>
  )
}
