import { ParliamentMemberList } from '../../../data/parliamentMemberList'
import {
  Box,
  GridContainer
} from '@island.is/island-ui/core'

export default function MembersOfParliament() {
  return (
    <Box paddingBottom={12}>
      <GridContainer>
        Members of Parliament
        <ParliamentMemberList />
      </GridContainer>
    </Box>
  )
}
