import { Box, Breadcrumbs } from '@island.is/island-ui/core'
import { SubLayout } from '../../../components/Layouts/SubLayout'
import { useContext } from 'react';
import { I18nContext } from '../../../i18n/I18n';

export default function SessionsAndBills() {
  const i18n = useContext(I18nContext)

  return (
    <SubLayout>
      <Breadcrumbs items={[
          { title: i18n?.t.home.title ?? '', href: "/" },
          { title: i18n?.t.menu.workOfParliament ?? '', href: i18n?.t.routes.workOfParliament },
          { title: i18n?.t.menu.sessionsAndBills ?? '', href: i18n?.t.routes.sessionsAndBills }
        ]} />
      <Box>
        Sessions and Bills
      </Box>
    </SubLayout>
  )
}
