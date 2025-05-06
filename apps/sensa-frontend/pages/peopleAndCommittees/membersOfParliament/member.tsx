import MembersScreen from 'apps/sensa-frontend/screens/MemberScreen/MemberScreeen'
import {
  Box,
  GridContainer, 
  Breadcrumbs
} from '@island.is/island-ui/core'
import { useRouter } from 'next/router'
import { useContext } from 'react';
import { I18nContext } from '../../../i18n/I18n';
import data from '../../../data/parliamentData.json';


export default function Member() {
  const i18n = useContext(I18nContext)
  const router = useRouter()

  const getMemberName = () => {
    return 'Per Parliament'
  }

  return (
    <Box paddingBottom={12}>
      <Breadcrumbs items={[
        { title: i18n?.t.home.title ?? '', href: "/" },
        { title: i18n?.t.menu.peopleAndCommittees ?? '', href: i18n?.t.routes.peopleAndCommittees },
        { title: i18n?.t.menu.membersOfParliament ?? '', href: i18n?.t.routes.membersOfParliament },
        { title: getMemberName(), href: router.asPath },
      ]} />
      <GridContainer>
        <MembersScreen />
      </GridContainer>
    </Box>
  )
}
