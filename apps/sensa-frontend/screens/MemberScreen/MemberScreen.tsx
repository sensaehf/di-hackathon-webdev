import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { I18nContext } from '../../i18n/I18n'
import {
  Accordion,
  AccordionItem,
  Box,
  Breadcrumbs,
  Button,
  Text,
} from '@island.is/island-ui/core'
import { getCommitteeById, getParliamentMemberById } from '../../data/endpoints'
import { ParliamentMember } from '../../data/types'
import { Webreader } from '../../components/Webreader'
import BioFrame from './BioFrame/BioFrame'
import * as styles from './MemberScreen.css'
import RelatedCard from './RelatedCard/RelatedCard'
import VoiceSample from './VoiceSample/VoiceSample'
import { useI18n } from 'apps/sensa-frontend/i18n'

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
          { title: member?.name.fullName, href: router.asPath },
        ]}
      />
      <Text marginTop={2} as="h1" variant="h1">
        {member?.name.fullName}
      </Text>
      <Webreader />
      <BioFrame member={member} />
      {/* Related Card */}
      <RelatedCard>
        <Text variant="eyebrow">{i18n?.t.member.seats.title}</Text>

        {i18n?.t.member.seats.items.map((seat: string, index: number) => (
          <Button key={index} variant="text">
            {seat}
          </Button>
        ))}
      </RelatedCard>
      <RelatedCard>
        <RelatedCardFrame member={member} />
      </RelatedCard>
      <Box className={styles.accordionBox}>
        <Accordion>
          <AccordionItem
            id="item-1"
            label={i18n?.t.member?.accordionLabels?.parliamentarian}
            startExpanded={false}
          >
            <Text>{member.name.fullName}</Text>
          </AccordionItem>
        </Accordion>
      </Box>

      <Box className={styles.accordionBox}>
        <Accordion>
          <AccordionItem id="item-1" label={i18n?.t.member?.accordionLabels?.biography} startExpanded={false}>
            <Text>{member.bio}</Text>
          </AccordionItem>
        </Accordion>
      </Box>

      <Box className={styles.accordionBox}>
        <Accordion>
          <AccordionItem id="item-1" label={i18n?.t.member?.accordionLabels?.voiceSample} startExpanded={false}>
            <VoiceSample />
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  )
}

const RelatedCardFrame = ({ member }: { member?: ParliamentMember }) => {
  const i18n = useI18n()
  let committee
  if (member?.committees.current.committeeId) {
    committee = getCommitteeById(member?.committees.current.committeeId)
  }
  console.log(member?.committees.current.committeeId)

  return (
    <>
    <Text variant="eyebrow">
      {i18n?.t.member.parliamentaryWork.title}
    </Text>
    <Box className={styles.relatedCardInnerFrame}>
      <Box className={styles.relatedCardContent}>
        <Button variant="text">{committee?.name}</Button>
        {i18n?.t.member.parliamentaryWork.items.slice(0, 3).map((item, index) => (
          <Button key={index} variant="text">
            {item}
          </Button>
        ))}
      </Box>
      <Box className={styles.relatedCardContent}>
        {i18n?.t.member.parliamentaryWork.items.slice(3).map((item, index) => (
          <Button key={index} variant="text">
            {item}
          </Button>
        ))}
      </Box>
    </Box>
  </>
  )
}

export default MemberScreen
