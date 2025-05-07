import {
  Box,
  CategoryCard,
  Text,
} from '@island.is/island-ui/core'

import * as styles from './AlthingiWork.css'

const AlthingiWork = () => {
  return (
    <>
      <Box className={styles.root}>
        <Text as="h2" variant="h2">
          Work Of Alþingi
        </Text>
        <Box className={styles.cardContainer}>
          <CategoryCard href='/work/peopleAndCommittees' heading='People and Committees' text='Explore the structure of Parliament through profiles of Members of Parliament, political party affiliations, parliamentary committees, and the Speaker’s Committee.' />
          <CategoryCard href='sessions/recordedSessions' heading='Sessions' text='Access recordings, agendas, transcripts, and search tools related to parliamentary sessions and speeches, including speaking schedules, speech archives, and rules on speaking time.' />
          <CategoryCard href='/work/sessionsAndBills' heading='Laws, Resolutions and Bills' text='Browse Iceland’s legislative work, including collections of laws, resolutions, and bills, as well as inquiries, reports, opinions, and the current status of parliamentary matters.' />
        </Box>
      </Box>
    </>
  )
}

export default AlthingiWork
