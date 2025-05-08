import {
  Box,
  Button,
  Icon,
  Tag,
  Text,
} from '@island.is/island-ui/core'
import MockSearch from 'apps/sensa-frontend/components/MockSearch/MockSearch'
import Webreader from 'apps/sensa-frontend/components/Webreader/Webreader'
import * as styles from './MembersOfParliamentScreen.css'
import { getAllParliamentMembers } from 'apps/sensa-frontend/data/endpoints'
import MemberCard from './MemberCard/MemberCard'
import { useI18n } from 'apps/sensa-frontend/i18n'

const MembersOfParliamentScreen = () => {
  const i18n = useI18n()
  
  const pms = getAllParliamentMembers()

  return (
    <Box>
      <Text as="h2" variant="h1">
        {i18n.t.menu.membersOfParliament}
      </Text>
      <Webreader />
      <Text as="h3" variant="h2" marginBottom={2}>
        All members
      </Text>
      <Box marginBottom={2}>
      <MockSearch />
      </Box>
      <Text variant="eyebrow" marginBottom={1}>Sort by</Text>
      <Box className={styles.filterContainer} marginBottom={2}>
        {/* Container */}
        <Box className={styles.tagContainer}>
          {/* Tags */}
          <Tag variant="blue">Nafni</Tag>
          <Tag variant="blue">Flokki</Tag>
          <Tag variant="blue">Kjördæmi</Tag>
          <Tag variant="blue">Nefnd</Tag>
        </Box>
        <Box>
          {/* Filter */}
          <Button variant="utility">
            Filter
            <Box marginLeft={1}>
              <Icon size="small" type="outline" icon="filter" color="blue400" />
            </Box>
          </Button>
        </Box>
      </Box>
      <Text marginBottom={2}>{pms.length} members in total</Text>

      {pms.map((x, index) => (
        <Box marginBottom={2} key={index} >
          <MemberCard member={x} />
        </Box>
      ))}


    </Box>
  )
}

export default MembersOfParliamentScreen
