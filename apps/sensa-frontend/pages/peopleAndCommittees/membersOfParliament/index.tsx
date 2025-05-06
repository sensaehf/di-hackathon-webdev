import { ParliamentMemberList } from '../../../data/parliamentMemberList'
import SideBar from "../../../components/SideBar/SideBar";
import {
  Box,
  GridContainer,
  GridRow,
  GridColumn
} from '@island.is/island-ui/core'

export default function MembersOfParliament() {
  return (
    <Box paddingBottom={12}>
        <GridContainer>
        <GridRow>
            <GridColumn span="4/12">
            <SideBar />
            </GridColumn>
            <GridColumn span="8/12">
              Members of Parliament
              <ParliamentMemberList />
            </GridColumn>
        </GridRow>
        </GridContainer>
    </Box>
  );
}