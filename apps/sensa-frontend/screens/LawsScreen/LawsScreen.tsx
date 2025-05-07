import { Box, Divider, Text } from '@island.is/island-ui/core'
import Card from './components/Card/Card'
import { Webreader } from 'apps/sensa-frontend/components/Webreader'
import * as styles from './LawsScreen.css'
const LawsScreen = () => {
  return (
    <>
      <Text variant="h2" as="h2">
        Laws, Resolutions and Bills
      </Text>
      <Webreader />
      <Box className={styles.cardContainer}>
        <Card className={styles.card} title="" shortcuts={[]} />
        <Divider />
        <Card className={styles.card} title="" shortcuts={[]} />
        <Divider />
        <Card className={styles.card} title="" shortcuts={[]} />
      </Box>
    </>
  )
}

export default LawsScreen
