import {
  Box,
  GridContainer, 
  Breadcrumbs
} from '@island.is/island-ui/core'
import { useContext } from 'react';
import { I18nContext } from '../../../../i18n/I18n';
import { SubLayout } from '../../../../components/Layouts/SubLayout'

export default function Parties() {
    const i18n = useContext(I18nContext)
  
    return (
      <SubLayout>
        <Box marginLeft={8} paddingBottom={12}>
          <Breadcrumbs items={[
            { title: i18n?.t.home.title ?? '', href: "/" },
            { title: i18n?.t.menu.workOfParliament ?? '', href: i18n?.t.routes.workOfParliament },
            { title: i18n?.t.menu.peopleAndCommittees ?? '', href: i18n?.t.routes.peopleAndCommittees },
            { title: i18n?.t.menu.parties ?? '', href: i18n?.t.routes.parties }
          ]} />
          <GridContainer>
            Parties
          </GridContainer>
        </Box>
      </SubLayout>
    )
}
