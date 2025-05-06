import { ParliamentMemberList } from '../../../data/parliamentMemberList'
import {
  Box,
  GridContainer, 
  Breadcrumbs
} from '@island.is/island-ui/core'
import { useContext } from 'react';
import { I18nContext } from '../../../i18n/I18n';

export default function MembersOfParliament() {
  const i18n = useContext(I18nContext)

  return (
    <Box paddingBottom={12}>
      <Breadcrumbs items={[
        { title: i18n?.t.home.title ?? '', href: "/" },
        { title: i18n?.t.menu.peopleAndCommittees ?? '', href: i18n?.t.routes.peopleAndCommittees },
        { title: i18n?.t.menu.membersOfParliament ?? '', href: i18n?.t.routes.membersOfParliament }
      ]} />
      <GridContainer>
        Members of Parliament
        <ParliamentMemberList />
      </GridContainer>
    </Box>
  )
}
