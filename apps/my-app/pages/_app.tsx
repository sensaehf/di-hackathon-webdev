import Head from 'next/head'
import React, { FC } from 'react'
import { ApolloProvider } from '@apollo/client/react'
import { getSession, Provider } from 'next-auth/client'

import { appWithLocale } from '@island.is/localization'
import './styles.css' // assuming this contains global styles like `.container`, `.rounded`, etc.



import initApollo from '../graphql/client'

const Layout: FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Ísland.is</title>
      </Head>
      {children}
    </div>
  )
}

const SupportApplication: any = ({ Component, pageProps }: any) => {
  return (
    <ApolloProvider client={initApollo(pageProps.apolloState)}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
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

export default SupportApplication
