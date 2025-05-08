import React, { FC, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Box, ResponsiveProp, Space } from '@island.is/island-ui/core'
import { CUSTOMER_ID, SCRIPT_URL } from './config'
import { I18nContext } from '../../i18n/I18n'

declare global {
  interface Window {
    rsConf: any
  }
}

declare const ReadSpeaker: any
declare const rspkr: any

interface WebReaderProps {
  readId?: string
  readClass?: string
  marginTop?: ResponsiveProp<Space>
  marginBottom?: ResponsiveProp<Space>
}

const Webreader: FC<React.PropsWithChildren<WebReaderProps>> = ({
  readId = 'main-content',
  readClass,
  marginTop = 3,
  marginBottom = 3,
}) => {
  const [href, setHref] = useState('')
  const router = useRouter()
  const i18n = useContext(I18nContext)
  const activeLocale = i18n?.activeLocale ?? 'is'

  useEffect(() => {
    const routeChangestart = () => {
      if (typeof ReadSpeaker !== 'undefined' && ReadSpeaker.PlayerAPI?.stop) {
        ReadSpeaker.PlayerAPI.stop()
        if (ReadSpeaker.PlayerAPI.audio.state.current && rspkr.ui) {
          ReadSpeaker.q(() => {
            if (rspkr.ui.getActivePlayer()) {
              rspkr.ui.getActivePlayer().close()
            }
          })
        }
      }
    }

    router.events.on('routeChangeStart', routeChangestart)
    return () => router.events.off('routeChangeStart', routeChangestart)
  }, [])

  useEffect(() => {
    if (!window.rsConf) {
      const el = document.createElement('script')
      el.id = 'rs_req_Init'
      el.src = SCRIPT_URL
      el.type = 'text/javascript'
      document.body.appendChild(el)
      window.rsConf = { general: { usePost: true } }
    } else if (typeof rspkr !== 'undefined' && rspkr.ui) {
      window.onload = () => {
        rspkr.init()
        rspkr.ui.addClickEvents()
      }
    }
  }, [])

  useEffect(() => {
    const lang = activeLocale === 'is' ? 'is_is' : 'en_uk'
    let h =
      '//app-eu.readspeaker.com/cgi-bin/rsent' +
      '?customerid=' + CUSTOMER_ID +
      '&lang=' + lang +
      '&url=' + encodeURIComponent(window.location.href)

    if (readId) h += '&readid=' + readId
    if (readClass) h += '&readclass=' + readClass

    setHref(h)
  }, [readId, readClass, activeLocale])

  // Read localized label and title from i18n
  const buttonLabel = i18n?.t.webreader.label
  const buttonTitle = i18n?.t.webreader.title

  return (
    <Box marginTop={marginTop} marginBottom={marginBottom} printHidden={true}>
      <div id="readspeaker_button1" className="rs_skip rsbtn rs_preserve">
        <a
          rel="nofollow"
          className="rsbtn_play"
          accessKey="L"
          title={buttonTitle}
          href={href}
          onClick={(event) => event.preventDefault()}
        >
          <span className="rsbtn_left rsimg rspart">
            <span className="rsbtn_text">
              <span>{buttonLabel}</span>
            </span>
          </span>
          <span className="rsbtn_right rsimg rsplay rspart" />
        </a>
      </div>
    </Box>
  )
}

export default Webreader
