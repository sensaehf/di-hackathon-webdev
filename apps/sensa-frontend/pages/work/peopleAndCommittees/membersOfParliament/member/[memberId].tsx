import { Box } from '@island.is/island-ui/core';
import { SubLayout } from 'apps/sensa-frontend/components/Layouts/SubLayout'
import MemberScreen from 'apps/sensa-frontend/screens/MemberScreen/MemberScreen'
import { useRouter } from 'next/router';
import * as styles from './memberId.css'
export default function Member() {
  const router = useRouter();
  const { memberId } = router.query;

  if (typeof memberId !== 'string') {
    return null; // or a loading/error state
  }


  return (
    <SubLayout>
      <Box className={styles.root}>
      <MemberScreen memberId={memberId}/>
      </Box>
    </SubLayout>
  )
}
