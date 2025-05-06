import React, { FC } from 'react'
import './styles.css' // assuming this contains global styles like `.container`, `.rounded`, etc.

import { AppLayout } from '../components/Layouts/AppLayout';
import { appWithTranslation, withLocale } from '../i18n'

const ParliamentApplication: any = ({ Component, pageProps }: any) => {
  return (
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
  )
}

ParliamentApplication.getInitialProps = async (appContext: any) => {
  const { Component, ctx } = appContext
  const customContext = {
    ...ctx,
    locale: ctx.locale || ctx?.req?.locale || 'is', // 👈 Fallback here
  }

  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(customContext)
  }

  return {
    pageProps: {
      ...pageProps
    }
  }
}

export default appWithTranslation(ParliamentApplication)