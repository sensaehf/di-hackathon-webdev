import { Box, Button, Text } from '@island.is/island-ui/core'
import * as styles from './Events.css'
import { useI18n } from '../../../i18n'
const Events = () => {

  const i18n = useI18n()
  return (
    <Box className={styles.root} >
      <Box className={styles.innerBox} marginBottom={6}>
        <Box className={styles.day}>
          <Text variant="eyebrow">Monday may 5</Text>
          <Box className={styles.line}>
            <Box className={styles.timeBox}>
              <Text>3.00</Text>
            </Box>
            <Button variant="text">{i18n.t.home.whatsHappening?.session}</Button>
          </Box>
        </Box>

        <Box className={styles.day}>
          <Text variant="eyebrow">Monday may 5</Text>
          <Box className={styles.line}>
            <Box className={styles.timeBox}>
              <Text>4.00</Text>
            </Box>
            <Button variant="text">{i18n.t.home.whatsHappening?.session}</Button>
          </Box>
          <Box className={styles.line}>
            <Box className={styles.timeBox}>
              <Text>5.00</Text>
            </Box>
            <Button variant="text">{i18n.t.home.whatsHappening?.session}</Button>
          </Box>
          <Box className={styles.line}>
            <Box className={styles.timeBox}>
              <Text>6.00</Text>
            </Box>
            <Button variant="text">{i18n.t.home.whatsHappening?.session}</Button>
          </Box>

          <Box className={styles.line}>
            <Box className={styles.timeBox}>
              <Text>7.00</Text>
            </Box>
            <Button variant="text">{i18n.t.home.whatsHappening?.session}</Button>
          </Box>
        </Box>
      </Box>

      <Button variant="text" size="small">
      {i18n.t.home.whatsHappening?.allPlannedEvents}
      </Button>
    </Box>
  )
}

export default Events
