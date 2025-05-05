import React, { useContext } from 'react'
import { NextComponentType } from 'next'
import { BaseContext, NextPageContext } from 'next/dist/shared/lib/utils'

import { I18nContext } from './I18n'

const withLocale =
  <C extends BaseContext = NextPageContext, IP = {}, P = {}>(
    Component: NextComponentType<C, IP, P>,
  ): NextComponentType<C, IP> => {
    const NewComponent: React.FC<P> = (props: P) => {
      const i18n = useContext(I18nContext) // ✅ OK here

      if (!i18n) {
        // Optional: show fallback if context is missing
        return <div>Loading...</div>
      }

      // Example usage of i18n.locale
      console.log('Locale from context:', i18n.activeLocale)

      return <Component {...props} />
    }

    // Pass through original getInitialProps if needed
    NewComponent.getInitialProps = Component.getInitialProps

    return NewComponent
  }

export default withLocale
