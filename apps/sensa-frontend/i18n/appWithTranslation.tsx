import React from 'react'
import I18n from './I18n'
import { NextComponentType } from 'next'
import { Locale } from '@island.is/shared/types'
import { Translation } from './locales/translation'
import { defaultLanguage } from '@island.is/shared/constants'

const appWithTranslation = (
  WrappedComponent: NextComponentType & { getInitialProps?: any },
) => {
  const AppWithTranslation = (props: any) => {
    const { locale = defaultLanguage, translations = {}, ...appProps } = props

    return (
      <I18n locale={locale} translations={translations}>
        <WrappedComponent {...appProps} />
      </I18n>
    )
  }

  AppWithTranslation.getInitialProps = async (appCtx: any) => {
    let wrappedInitialProps = {}
    if (WrappedComponent.getInitialProps) {
      wrappedInitialProps = await WrappedComponent.getInitialProps(appCtx)
    }

    const locale: Locale =
      appCtx?.ctx?.locale || defaultLanguage

    const { default: translations = {} } = await import(
      `./locales/${locale}.json`
    )

    return {
      ...wrappedInitialProps,
      locale,
      translations: translations as Translation,
    }
  }

  return AppWithTranslation
}

export default appWithTranslation
