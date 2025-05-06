import PeopleAndCommitteesScreen from "../../screens/PeopleAndCommitteesScreen/PeopleAndCommitteesScreen";
import SideBar from "../../components/SideBar/SideBar";
import {
  Box,
  GridContainer,
  GridRow,
  GridColumn
} from '@island.is/island-ui/core'


const MembersOfParliamentScreen = () => {

  return (
    <Box paddingX={12}>
        <GridContainer>
        <GridRow>
            <GridColumn span="4/12">
            <SideBar />
            </GridColumn>
            <GridColumn span="8/12">
            <PeopleAndCommitteesScreen />
            </GridColumn>
        </GridRow>
        </GridContainer>
    </Box>
  )
}

export default MembersOfParliamentScreen