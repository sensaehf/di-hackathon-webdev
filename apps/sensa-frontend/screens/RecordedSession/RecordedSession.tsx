import { useContext } from 'react'
import { I18nContext } from '../../i18n/I18n'
import { Box, Button, Divider, Text } from '@island.is/island-ui/core'
import { Webreader } from '../../components/Webreader'
import * as styles from './RecordedSession.css'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'

const RecordedSessionScreen = () => {
  const i18n = useContext(I18nContext)
  const session = i18n?.t.recordedSessions

  return (
    <>
      <Text variant="h2" as="h2">
        {session.title}
      </Text>
      <Webreader />

      <VideoPlayer
        videoSource={session.videoSource}
        captionSource={session.captionSource}
      />

      <Box className={styles.content}>
        <Text>{session.description}</Text>

        <Button variant="utility">{session.downloadButton}</Button>

        <Text>{session.transcript}</Text>
      </Box>
    </>
  )
}

export default RecordedSessionScreen
