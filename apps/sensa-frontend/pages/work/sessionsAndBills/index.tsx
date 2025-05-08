import { Box, Breadcrumbs } from '@island.is/island-ui/core'
import { SubLayout } from '../../../components/Layouts/SubLayout'
import { useContext } from 'react'
import { I18nContext } from '../../../i18n/I18n'
import LawsScreen from '../lawsResolutionsAndBills'
import * as styles from './index.css'
export default function SessionsAndBills() {
  const i18n = useContext(I18nContext)

  return (
    <SubLayout>
      <Box marginLeft={8}>
        <Breadcrumbs
          items={[
            { title: i18n?.t.home.title ?? '', href: '/' },
            {
              title: i18n?.t.menu.workOfParliament ?? '',
              href: i18n?.t.routes.workOfParliament,
            },
            {
              title: i18n?.t.menu.sessionsAndBills ?? '',
              href: i18n?.t.routes.sessionsAndBills,
            },
          ]}
        />
        <Box>
          <LawsScreen />
        </Box>
      </Box>
    </SubLayout>
  )
}
