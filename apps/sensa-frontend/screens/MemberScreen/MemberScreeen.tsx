import { useRouter } from "next/router";
import {
  Box
} from '@island.is/island-ui/core'

const MembersScreen = () => {
  const router = useRouter();
  const { mid } = router.query;


  return (
    <Box paddingBottom={12}>
      <h1>member with the id {mid}</h1>
    </Box>
  )
}

export default MembersScreen