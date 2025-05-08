import { useEffect } from 'react'
import { useI18n } from '../../i18n'
import {
  Box,
  GridContainer,
} from '@island.is/island-ui/core'
import AlthingiHeaderSearch from '../../components/AlthingiHeaderSearch/AlthingiHeaderSearch';
import AlthingiWork from '../../components/AlthingiWork/AlthingiWork';
import MainScreenContent from '../../components/MainScreenContent/MainScreenContent';

const HomeScreen = () => {
    const {
        t: { home: t, routes },
        activeLocale,
      } = useI18n()

      useEffect(() => console.log(activeLocale), [activeLocale])
    return (
      <Box>
        <GridContainer>
          <AlthingiHeaderSearch />
          <AlthingiWork />
          <MainScreenContent />
        </GridContainer>
      </Box>
    )
  };

  export default HomeScreen;