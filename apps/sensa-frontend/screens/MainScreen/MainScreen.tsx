import * as styles from './MainScreen.css'

import {
  Box,
  Inline,
  ContentBlock,
  Button,
  Header,
  Stack,
  Pagination,
  ProfileCard,
  GridContainer,
  Text,
  GridColumn,
  GridRow,
} from '@island.is/island-ui/core'

import { ParliamentMemberList } from '../../data/parliamentMemberList'
import { useI18n } from '../../i18n'
import { useEffect } from 'react'
import LivePlayer from '../../components/LivePlayer/LivePlayer'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'


const MainScreen = () => {

  const {
    t: { accessControl: t, routes },
    activeLocale,
  } = useI18n()

  useEffect(() => console.log(activeLocale), [activeLocale])


  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <Box paddingX={12}>
      <Text as="h1" variant='h2'>{t.info}</Text>

      <GridContainer>
        <LivePlayer />
        <VideoPlayer
        videoSource="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"  // Example prerecorded video URL
        audioDescriptionSource='audioDescription.vtt'
        captionSource='captions.vtt'
      />
        <ParliamentMemberList />
      </GridContainer>
    </Box>
  )
}

export default MainScreen
