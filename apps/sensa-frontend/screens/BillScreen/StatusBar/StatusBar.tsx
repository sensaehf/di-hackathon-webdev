import { Box, Text } from '@island.is/island-ui/core'
import * as styles from './StatusBar.css'

const StatusBar = () => {
  return (
    <>
      <Text>Staða málsins</Text>
      <Box className={styles.imgBox} marginBottom={0}>
        <img width={'793px'} src="/billStatus.svg" alt="" />
      </Box>
      <Box className={styles.root}>
        <Box className={styles.statusBar}>
          {[
            'Stjórnarfrumvarp',
            '1. umræða',
            'Nefndaralit',
            '2. umræða',
            'Frumvarp eftir 2. umræði',
            '3. umræða',
            'Lög',
          ].map((text) => (
            <Box className={styles.statusSteps}>
              <Text variant="small">{text}</Text>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  )
}

export default StatusBar
