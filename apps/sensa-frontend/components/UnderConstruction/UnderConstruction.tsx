import * as styles from './UnderConstruction.css'
import { Box, Stack, Text } from '@island.is/island-ui/core'
import { useContext } from 'react'
import { I18nContext } from '../../i18n/I18n'

const UnderConstruction = () => {
  const i18n = useContext(I18nContext)

  return (
    <Box className={styles.construction}>
      <Stack space="containerGutter">
        <img src="/construction.svg" />
      </Stack>
      <Stack space="containerGutter">
        <Text>
          <Text variant='h2'>{i18n?.t.home.wipHeader}</Text>
        </Text>
      </Stack>
      <Stack space="containerGutter">
        <Text>{i18n?.t.home.wipText1}</Text>
        <Text>{i18n?.t.home.wipText2}</Text>
      </Stack>
    </Box>
  )
}

export default UnderConstruction
