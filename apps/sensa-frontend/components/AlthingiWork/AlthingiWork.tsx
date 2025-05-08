import {
  Box,
  CategoryCard,
  Text,
} from '@island.is/island-ui/core'

import * as styles from './AlthingiWork.css'
import { useI18n } from '../../i18n'

const AlthingiWork = () => {
  const i18n = useI18n()
  return (
    <>
      <Box className={styles.root}>
        <Text as="h2" variant="h2">
          {i18n.t.home.workHeader}
        </Text>
        <Box className={styles.cardContainer}>
          <CategoryCard href='/work/peopleAndCommittees' heading={i18n.t.home?.workHeaderContent?.people.title} text={i18n.t.home?.workHeaderContent?.people.content} />
          <CategoryCard href='sessions/recordedSessions' heading={i18n.t.home?.workHeaderContent?.sessions.title} text={i18n.t.home?.workHeaderContent?.sessions.content} />
          <CategoryCard href='/work/sessionsAndBills' heading={i18n.t.home?.workHeaderContent?.laws.title} text={i18n.t.home?.workHeaderContent?.laws.content} />
        </Box>
      </Box>
    </>
  )
}

export default AlthingiWork
