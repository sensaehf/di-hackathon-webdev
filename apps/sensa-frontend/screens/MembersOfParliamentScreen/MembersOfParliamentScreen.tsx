import {
  AsyncSearch,
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

const MembersOfParliamentScreen = () => {
  const pms = getAllParliamentMembers()
  return (
    <Box>
      <Text as="h2" variant="h1">
        Members of Parliament
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
      <Text marginBottom={2}>62 members in total</Text>

      {pms.map((x, index) => (
        <Box marginBottom={2}>
        <MemberCard key={index} member={x} />
        </Box>
      ))}


    </Box>
  )
}

export default MembersOfParliamentScreen
