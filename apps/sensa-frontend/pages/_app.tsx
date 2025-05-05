import React, { FC } from 'react'
import { ApolloProvider } from '@apollo/client/react'
import { getSession, Provider } from 'next-auth/client'

import { appWithLocale } from '@island.is/localization'
import './styles.css' // assuming this contains global styles like `.container`, `.rounded`, etc.

import { AppLayout } from '../components/Layouts/AppLayout';

import initApollo from '../graphql/client'
import { appWithTranslation } from '../i18n'

const SupportApplication: any = ({ Component, pageProps }: any) => {
  return (
    <ApolloProvider client={initApollo(pageProps.apolloState)}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
    </ApolloProvider>
  )
}

SupportApplication.getInitialProps = async (appContext: any) => {
  const { Component, ctx } = appContext
  const apolloClient = initApollo({})
  const customContext = {
    ...ctx,
    apolloClient,
    locale: ctx.locale || ctx?.req?.locale || 'is', // 👈 Fallback here

  }

  const apolloState = apolloClient.cache.extract()

  return {
    pageProps: {
      apolloState,
    }
  }
}

export default appWithTranslation(SupportApplication)
