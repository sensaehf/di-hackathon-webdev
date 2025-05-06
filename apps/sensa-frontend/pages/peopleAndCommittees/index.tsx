import { useContext } from 'react';
import { I18nContext } from '../../i18n/I18n';
import { Box, Breadcrumbs, GridContainer } from '@island.is/island-ui/core'

export default function MembersOfParliament() {
  const i18n = useContext(I18nContext)

  return (
    <Box paddingBottom={12}>
      <Breadcrumbs items={[
        { title: i18n?.t.home.title ?? '', href: "/" },
        { title: i18n?.t.menu.peopleAndCommittees ?? '', href: i18n?.t.routes.peopleAndCommittees }
      ]} />
      <GridContainer>
        Peoples and Committees
      </GridContainer>
    </Box>
  )
}
