import { Box, Text } from '@island.is/island-ui/core'
import * as styles from './Events.css'
const Events = () => {
  return (
    <Box className={styles.root}>
      <Box>
        {/* Inner box */}
        <Box>{/* Monday */}
          <Text>Monday</Text>
        </Box>
        <Box></Box> {/* Inner box */}
      </Box>
    </Box>
  )
}

export default Events
