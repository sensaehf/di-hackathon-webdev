
import {
  Box,
  GridContainer,
} from '@island.is/island-ui/core'

import { ParliamentMemberList } from '../../data/parliamentMemberList'
import AlthingiHeaderSearch from '../../components/AlthingiHeaderSearch/AlthingiHeaderSearch'
import MainScreenContent from '../../components/MainScreenContent/MainScreenContent'

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
        <MainScreenContent />
        <ParliamentMemberList />
      </GridContainer>
    </Box>
  )
}

export default MainScreen
