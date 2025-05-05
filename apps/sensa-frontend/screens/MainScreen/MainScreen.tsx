import * as styles from './MainScreen.css'

import {
  Box,
  Inline,
  ContentBlock,
  Button,
  Header,
  Stack,
  Pagination,
  ProfileCard,
  GridContainer,
  GridColumn,
  GridRow,
} from '@island.is/island-ui/core'

import { ParliamentMemberList } from '../../data/parliamentMemberList'
import { useI18n } from '../../i18n'


const MainScreen = () => {

  const {
    t: { accessControl: t, routes },
    activeLocale,
  } = useI18n()


  console.log(activeLocale)

  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <Box paddingX={12}>

      <GridContainer>
        <ParliamentMemberList />
      </GridContainer>
    </Box>
  )
}

export default MainScreen
