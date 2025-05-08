import { SubLayout } from "../../components/Layouts/SubLayout";
import RecordedSessionScreen from "../../screens/RecordedSession/RecordedSession";
import { Box, Breadcrumbs } from "@island.is/island-ui/core";
import * as styles from './index.css'
import { useContext } from "react";
import { I18nContext } from "../../i18n/I18n";

const Page = () => {
  const i18n = useContext(I18nContext)

  return (<SubLayout>
    <Box marginLeft={8} >
      <Breadcrumbs items={[
        { title: i18n?.t.home.title ?? '', href: "/" },
        { title: i18n?.t.menu.workOfParliament ?? '', href: i18n?.t.routes.workOfParliament },
        { title: i18n?.t.menu.peopleAndCommittees ?? '', href: i18n?.t.routes.peopleAndCommittees },
        { title: i18n?.t.menu.membersOfParliament ?? '', href: i18n?.t.routes.membersOfParliament }
      ]} />
      <RecordedSessionScreen />
    </Box>
  </SubLayout>)
}
export default Page