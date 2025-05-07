import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { I18nContext } from '../../i18n/I18n'
import {
  Accordion,
  Box,
  Breadcrumbs,
  Button,
  Text,
} from '@island.is/island-ui/core'
import { getParliamentMemberById } from 'apps/sensa-frontend/data/endpoints'
import { ParliamentMember } from 'apps/sensa-frontend/data/types'
import { Webreader } from 'apps/sensa-frontend/components/Webreader'
import BioFrame from './BioFrame/BioFrame'
import * as styles from './MemberScreen.css'

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
    <Box className={styles.root}>
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
      {/* Related Card */}
      {/* Related Card */}
      <Box className={styles.accordionBox}>
        <Accordion>
          <Box className={styles.accordionChild}>
            <Text>Parlimentarian</Text>
            <Button colorScheme='light' circle={true} >+</Button>
          </Box>
        </Accordion>
      </Box>

      <Box className={styles.accordionBox}>
        <Accordion>
          <Box className={styles.accordionChild}>
            <Text>Parlimentarian</Text>
            <Button colorScheme='light' circle={true} >+</Button>
          </Box>
        </Accordion>
      </Box>
      <Box className={styles.accordionBox}>
        <Accordion>
          <Box className={styles.accordionChild}>
            <Text>Parlimentarian</Text>
            <Button colorScheme='light' circle={true} >+</Button>
          </Box>
        </Accordion>
      </Box>



    </Box>
  )
}

export default MemberScreen
