import {
  Box,
  Breadcrumbs
} from '@island.is/island-ui/core'
import { useContext } from 'react';
import { SubLayout } from '../../../components/Layouts/SubLayout'
import * as styles from './index.css'
import { I18nContext } from '../../../i18n/I18n';
import PeopleAndCommitteesScreen from '../../../screens/PeopleAndCommitteesScreen/PeopleAndCommitteesScreen';
export default function MembersOfParliament() {
  const i18n = useContext(I18nContext)

  return (
    <SubLayout>
      <Box className={styles.root}>
        <Breadcrumbs items={[
          { title: i18n?.t.home.title ?? '', href: "/" },
          { title: i18n?.t.menu.workOfParliament ?? '', href: i18n?.t.routes.workOfParliament },
          { title: i18n?.t.menu.peopleAndCommittees ?? '', href: i18n?.t.routes.peopleAndCommittees },
          { title: i18n?.t.menu.membersOfParliament ?? '', href: i18n?.t.routes.membersOfParliament }
        ]} />
        <PeopleAndCommitteesScreen />
      </Box>
    </SubLayout>
  )
}
