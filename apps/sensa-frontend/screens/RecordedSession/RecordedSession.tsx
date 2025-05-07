import { Box, Button, Divider, Text } from '@island.is/island-ui/core'
import { Webreader } from '../../components/Webreader'
import * as styles from './RecordedSession.css'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
const RecordedSessionScreen = () => {
  // TODO i18n
  return (
    <>
      <Text variant="h2" as="h2">
        36th session of the 156th legislative session
      </Text>
      <Webreader />

      <VideoPlayer  videoSource='/video.mp4'/>

      <Box className={styles.content}>
        <Text>You can watch individual discussions or speeches by going to the meeting minutes.</Text>

        <Button variant='utility'>Download the video file</Button>

        <Text>Meeting started at 10:57 AMMiscellaneousElection of a temporary member of the jury on the qualifications of candidates for the office of judge, to make a proposal for the appointment of a substitute judge to the Supreme Court to consider a request for leave to appeal the judgment of the Supreme Court in case no. 273/2023Postponement of meetings of the AlthingIcelandic Human Rights Institute (postponement of entry into force)Social security (lump sum payment to old-age pensioners)Purchase of residential property in Grindavík (legal domicile)
At 11:03 a.m. meeting break
At 11:14 the parliamentary session continues.
11:15 a.m. break
At 11:26 the parliamentary session continues.
Meeting adjourned at 11:28</Text>
      </Box>
    </>
  )
}

export default RecordedSessionScreen
