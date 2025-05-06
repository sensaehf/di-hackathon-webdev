import { useEffect } from 'react'
import { useI18n } from '../../i18n'
import {
  Box,
  GridContainer,
} from '@island.is/island-ui/core'

const HomeScreen = () => {

    const {
        t: { home: t, routes },
        activeLocale,
      } = useI18n()
    
      useEffect(() => console.log(activeLocale), [activeLocale])


    return (
    <Box paddingX={12}>
      <GridContainer>
        <h1>{t.title}</h1>
      </GridContainer>
    </Box>
    )
  };
  
  export default HomeScreen;