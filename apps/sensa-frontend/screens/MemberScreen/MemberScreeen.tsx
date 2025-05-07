import { useRouter } from "next/router";
import { useContext, useState } from 'react';
import { I18nContext } from '../../i18n/I18n';
import {
  Box,
  Breadcrumbs
} from '@island.is/island-ui/core'
import { getParliamentMemberById } from "apps/sensa-frontend/data/endpoints";
import { ParliamentMember } from "apps/sensa-frontend/data/types";


const MembersScreen = () => {
  const [error, setError] = useState<boolean>(false);

  const i18n = useContext(I18nContext)
  const router = useRouter();
  const { mid } = router.query;

  const numericMid = typeof mid === 'string' ? Number(mid) : 0;
  const member = getParliamentMemberById(numericMid) as ParliamentMember

  if (numericMid !== undefined && isNaN(numericMid)) {
    setError(true);
  } 

  return (
    <Box paddingBottom={12}>
      {!error && 
        <>
          <Breadcrumbs items={[
            { title: i18n?.t.home.title ?? '', href: "/" },
            { title: i18n?.t.menu.workOfParliament ?? '', href: i18n?.t.routes.workOfParliament },
            { title: i18n?.t.menu.peopleAndCommittees ?? '', href: i18n?.t.routes.peopleAndCommittees },
            { title: i18n?.t.menu.membersOfParliament ?? '', href: i18n?.t.routes.membersOfParliament },
            { title: member?.name.abbreviation, href: router.asPath },
          ]} />
          <h1>{member?.name.fullName}</h1>
        </>
      }
    </Box>
  )
}

export default MembersScreen