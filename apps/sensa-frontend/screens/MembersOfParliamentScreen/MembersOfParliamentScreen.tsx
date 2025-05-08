import {
  Box,
  Button,
  Icon,
  Tag,
  Text,
} from '@island.is/island-ui/core'
import MockSearch from '../../components/MockSearch/MockSearch'
import Webreader from '../../components/Webreader/Webreader'
import * as styles from './MembersOfParliamentScreen.css'
import { getAllParliamentMembers } from '../../data/endpoints'
import MemberCard from './MemberCard/MemberCard'
import { useI18n } from '../../i18n'

const MembersOfParliamentScreen = () => {
  const i18n = useI18n()
  const {
    title,
    subtitle,
    sortBy,
    filters,
    filterButton,
    totalLabel,
  } = i18n.t.membersOfParliament

  const pms = getAllParliamentMembers()

  return (
    <Box>
      <Text as="h2" variant="h1">
        {title}
      </Text>

      <Webreader />

      <Text as="h3" variant="h2" marginBottom={2}>
        {subtitle}
      </Text>

      <Box marginBottom={2}>
        <MockSearch />
      </Box>

      <Text variant="eyebrow" marginBottom={1}>
        {sortBy}
      </Text>

      <Box className={styles.filterContainer} marginBottom={2}>
        <Box className={styles.tagContainer}>
          {filters.map((filter, idx) => (
            <Tag key={idx} variant="blue">{filter}</Tag>
          ))}
        </Box>
        <Box>
          <Button variant="utility">
            {filterButton}
            <Box marginLeft={1}>
              <Icon size="small" type="outline" icon="filter" color="blue400" />
            </Box>
          </Button>
        </Box>
      </Box>

      <Text variant='h3' marginBottom={2}>
        {totalLabel.replace('{count}', pms.length.toString())}
      </Text>

      {pms.map((x, index) => (
        <Box marginBottom={2} key={index}>
          <MemberCard member={x} />
        </Box>
      ))}
    </Box>
  )
}

export default MembersOfParliamentScreen
