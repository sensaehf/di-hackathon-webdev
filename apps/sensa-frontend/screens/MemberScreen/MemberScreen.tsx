import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { I18nContext } from '../../i18n/I18n'
import { Box, Breadcrumbs, Text } from '@island.is/island-ui/core'
import { getParliamentMemberById } from 'apps/sensa-frontend/data/endpoints'
import { ParliamentMember } from 'apps/sensa-frontend/data/types'
import { Webreader } from 'apps/sensa-frontend/components/Webreader'
import BioFrame from './BioFrame/BioFrame'

const MemberScreen = ({ memberId }: { memberId: string }) => {
  const [error, setError] = useState<boolean>(false)


  const i18n = useContext(I18nContext)
  const router = useRouter()

  const numericMid = typeof memberId === 'string' ? Number(memberId) : 0
  const member = getParliamentMemberById(numericMid) as ParliamentMember

  if (numericMid !== undefined && isNaN(numericMid)) {
    setError(true)
  }

  return (
    <>
      <Breadcrumbs
        items={[
          { title: i18n?.t.home.title ?? '', href: '/' },
          {
            title: i18n?.t.menu.workOfParliament ?? '',
            href: i18n?.t.routes.workOfParliament,
          },
          {
            title: i18n?.t.menu.peopleAndCommittees ?? '',
            href: i18n?.t.routes.peopleAndCommittees,
          },
          {
            title: i18n?.t.menu.membersOfParliament ?? '',
            href: i18n?.t.routes.membersOfParliament,
          },
          { title: member?.name.abbreviation, href: router.asPath },
        ]}
      />
      <Text marginTop={2} as="h1" variant="h1">
        {member?.name.fullName}
      </Text>
      <Webreader />
      <BioFrame member={member} />
    </>
  )
}

export default MemberScreen
