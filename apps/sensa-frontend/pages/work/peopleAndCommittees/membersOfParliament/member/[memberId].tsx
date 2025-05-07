import { Box } from '@island.is/island-ui/core'
import { useRouter } from 'next/router'
import { SubLayout } from '../../../../../components/Layouts/SubLayout'
import MemberScreen from '../../../../../screens/MemberScreen/MemberScreen'
export default function Member() {
  const router = useRouter()
  const { memberId } = router.query

  if (typeof memberId !== 'string') {
    return null // or a loading/error state
  }

  return (
    <SubLayout>
      <MemberScreen memberId={memberId} />
    </SubLayout>
  )
}
