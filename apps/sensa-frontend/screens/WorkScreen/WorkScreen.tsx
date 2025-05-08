import { Box, Divider, Text } from '@island.is/island-ui/core'
import Card from './components/Card/Card'
import { Webreader } from '../../components/Webreader'
import * as styles from './WorkScreen.css'
import { useI18n } from '../../i18n'

const WorkScreen = () => {
  const i18n = useI18n()
  const { sections, title } = i18n.t.workOfParliament

  return (
    <>
      <Text variant="h2" as="h2">
        {title}
      </Text>
      <Webreader />

      <Box className={styles.cardContainer}>
        <Card
          className={styles.card}
          title={sections.peopleAndCommittees.title}
          description={sections.peopleAndCommittees.description}
          shortcuts={sections.peopleAndCommittees.shortcuts}
          href="/work/peopleAndCommittees"
        />
        <Divider />
        <Card
          className={styles.card}
          title={sections.lawsResolutionsAndBills.title}
          description={sections.lawsResolutionsAndBills.description}
          shortcuts={sections.lawsResolutionsAndBills.shortcuts}
          href="/work/sessionsAndBills"
        />
        <Divider />
        <Card
          className={styles.card}
          title={sections.sessionsAndSpeeches.title}
          description={sections.sessionsAndSpeeches.description}
          shortcuts={sections.sessionsAndSpeeches.shortcuts}
          href="/sessions/recordedSessions"
        />
      </Box>
    </>
  )
}

export default WorkScreen
