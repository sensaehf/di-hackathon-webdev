import { Box, Button, Text } from '@island.is/island-ui/core'
import * as styles from './VoiceSample.css'
import AudioPlayer from '../../../components/Audio/Audio'
import { useI18n } from '../../../i18n'
const VoiceSample = () => {
  const i18n = useI18n()
  return (
    <Box className={styles.box}>
      <Button variant="text">{i18n.t.member.caseTitle}</Button>

      <Box className={styles.audioBox}>
        {/* Audio box */}
        <Box className={styles.audioBoxInner}>
          <AudioPlayer />
        </Box>
        <Box className={styles.audioBoxInner}>
          <Text variant="small">
          {i18n.t.member.reference}
          </Text>
        </Box>
      </Box>
      <Text variant="eyebrow">{i18n.t.member.transcription}</Text>
      <Text variant='medium'>{i18n.t.member.transcriptionText}</Text>
    </Box>
  )
}

export default VoiceSample
