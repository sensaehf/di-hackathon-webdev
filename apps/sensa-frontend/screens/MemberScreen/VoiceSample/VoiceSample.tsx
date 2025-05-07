import { Box, Button, Text } from '@island.is/island-ui/core'
import * as styles from './VoiceSample.css'
import AudioPlayer from '../../../components/Audio/Audio'
const VoiceSample = () => {
  return (
    <Box className={styles.box}>
      <Button variant="text">Case 93, efficiency of tenders</Button>

      <Box className={styles.audioBox}>
        {/* Audio box */}
        <Box className={styles.audioBoxInner}>
          <AudioPlayer />
        </Box>
        <Box className={styles.audioBoxInner}>
          <Text variant="small">
          11.11.1986 Joint Parliament: 15th session, 109th legislative session.See column 774 in Section B of the Althingi Gazette. (658)
          </Text>
        </Box>
      </Box>
      <Text variant="eyebrow">Transcription</Text>
      <Text variant='medium'>Mr. Speaker. I would like to thank you for this point. which has been raised here. As stated in the conclusion of the article. this point. has been raised especially due to pressure from SSA and that is from the transport committee of the Association of Local Authorities in the Eastern Constituency. I am a member of that committee and we have discussed this issue in some detail and it is really not an exaggeration, as the hon . member has said here, that this is a matter of concern for people. There are many who own their trucks who would have, for example, sold them if they had been able to, but that is not the case because this is the same problem all over the country and the prices of cars and equipment have fallen because of this.
      But I just want to add to what the hon. member said that there is more that comes up. When people have given up in this industry, and there are quite a few of them, then we also need to think about projects for these people and I think that could be included in the example when this assessment is carried out.</Text>
    </Box>
  )
}

export default VoiceSample
