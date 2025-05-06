import { useRouter } from "next/router";
import SideBar from "../../components/SideBar/SideBar";
import {
  Box,
  GridContainer,
  GridRow,
  GridColumn
} from '@island.is/island-ui/core'



const MembersScreen = () => {
  const router = useRouter();
  const { mid } = router.query;


  return (
    <Box paddingBottom={12}>
        <GridContainer>
        <GridRow>
            <GridColumn span="4/12">
            <SideBar />
            </GridColumn>
            <GridColumn span="8/12">
              <h1>member with the id {mid}</h1>
            </GridColumn>
        </GridRow>
        </GridContainer>
    </Box>
  )
}

export default MembersScreen