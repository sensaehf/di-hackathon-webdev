import { Box, Divider, Text } from '@island.is/island-ui/core'
import Card from './components/Card/Card'
import { Webreader } from '../../components/Webreader'
import * as styles from './LawsScreen.css'
import { useI18n } from '../../i18n'

const LawsScreen = () => {
  const i18n = useI18n()
  const { laws: lawsSection, resolutions, bills } = i18n.t.laws.sections

  return (
    <>
      <Text variant="h2" as="h2">
        {i18n.t.laws.title}
      </Text>
      <Webreader />

      <Box className={styles.cardContainer}>
        <Card
          className={styles.card}
          title={lawsSection.title}
          description={lawsSection.description}
          shortcuts={lawsSection.shortcuts}
        />
        <Divider />
        <Card
          className={styles.card}
          title={resolutions.title}
          description={resolutions.description}
          shortcuts={resolutions.shortcuts}
        />
        <Divider />
        <Card
          className={styles.card}
          title={bills.title}
          description={bills.description}
          shortcuts={bills.shortcuts}
          href="/work/lawsResolutionsAndBills/bills"
        />
      </Box>
    </>
  )
}

export default LawsScreen
