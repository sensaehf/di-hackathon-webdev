import React, { FC, ReactNode, useState } from 'react'
import { GridContainer, Page, Header, Footer } from '@island.is/island-ui/core'
import Head from 'next/head'

interface LayoutProps {
    children: ReactNode
  }
  
  export const AppLayout: FC<React.PropsWithChildren<LayoutProps>> = ({
    children,
  }) => {
    return (
      <Page>
        <Head>
          <title>Ísland.is</title>
        </Head>
        <GridContainer>
            <Header /> 
        </GridContainer>
        {children}
        <Footer />
      </Page>
    )
  }