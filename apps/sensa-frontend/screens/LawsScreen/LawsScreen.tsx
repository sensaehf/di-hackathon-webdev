import { Box, Divider, Text } from '@island.is/island-ui/core'
import Card from './components/Card/Card'
import { Webreader } from '../../components/Webreader'
import * as styles from './LawsScreen.css'
const LawsScreen = () => {
  // TODO i18n
  return (
    <>
      <Text variant="h2" as="h2">
        Laws, Resolutions and Bills
      </Text>
      <Webreader />
      <Box className={styles.cardContainer}>
        <Card className={styles.card} title="Laws" shortcuts={[]} />
        <Divider />
        <Card className={styles.card} title="Resolutions" shortcuts={[]} />
        <Divider />
        <Card className={styles.card} title="Bills" shortcuts={[]} href={'/work/lawsResolutionsAndBills/bills'} />
      </Box>
    </>
  )
}

export default LawsScreen
