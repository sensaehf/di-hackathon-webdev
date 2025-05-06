import {
  Box,
  GridContainer, 
  Breadcrumbs
} from '@island.is/island-ui/core'
import { useContext } from 'react';
import { I18nContext } from '../../../i18n/I18n';

export default function Parties() {
    const i18n = useContext(I18nContext)
  
    return (
      <Box paddingBottom={12}>
        <Breadcrumbs items={[
          { title: i18n?.t.home.title ?? '', href: "/" },
          { title: i18n?.t.menu.peopleAndCommittees ?? '', href: i18n?.t.routes.peopleAndCommittees },
          { title: i18n?.t.menu.parties ?? '', href: i18n?.t.routes.parties }
        ]} />
        <GridContainer>
          Parties
        </GridContainer>
      </Box>
    )
}
