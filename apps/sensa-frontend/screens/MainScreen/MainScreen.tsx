import { Box, GridContainer } from '@island.is/island-ui/core'

import AlthingiHeaderSearch from '../../components/AlthingiHeaderSearch/AlthingiHeaderSearch'
import MainScreenContent from '../../components/MainScreenContent/MainScreenContent'
import AlthingiWork from '../../components/AlthingiWork/AlthingiWork'

const MainScreen = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <Box>
      <AlthingiHeaderSearch />

      <GridContainer>
        <AlthingiWork />

        <MainScreenContent />
      </GridContainer>
    </Box>
  )
}

export default MainScreen
