import { Box, CategoryCard, Divider, Text } from '@island.is/island-ui/core'
import Card from './components/Card/Card'
import { Webreader } from '../../components/Webreader'
import * as styles from './WorkScreen.css'
import { useI18n } from '../../i18n'

const WorkScreen = () => {
  const i18n = useI18n()
  const { sections, title } = i18n.t.workOfParliament

  return (
    <Box marginY={2} >
      <Text variant="h1" as="h1">
        {title}
      </Text>
      <Webreader />

      <Box className={styles.cardContainer}>
        <CategoryCard 
          heading={sections.peopleAndCommittees.title}
          text={sections.peopleAndCommittees.description}
          href="/work/peopleAndCommittees"
        />
        <Card
          shortcuts={sections.peopleAndCommittees.shortcuts}
          href="/work/peopleAndCommittees"
        />
        <Divider />
        <CategoryCard 
          heading={sections.lawsResolutionsAndBills.title}
          text={sections.lawsResolutionsAndBills.description}
          href="/work/peopleAndCommittees"
        />
        <Card
          shortcuts={sections.lawsResolutionsAndBills.shortcuts}
          href="/work/sessionsAndBills"
        />
        <Divider />
        <CategoryCard 
          heading={sections.sessionsAndSpeeches.title}
          text={sections.sessionsAndSpeeches.description}
          href="/work/peopleAndCommittees"
        />
        <Card
          shortcuts={sections.sessionsAndSpeeches.shortcuts}
          href="/sessions/recordedSessions"
        />
      </Box>
    </Box>
  )
}

export default WorkScreen
