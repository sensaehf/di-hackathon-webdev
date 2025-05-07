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

const MembersOfParliamentScreen = () => {
  return (
    <Box>
      <Text as="h2" variant="h1">
        Members of Parliament
      </Text>
      <Webreader />
      <Text as="h3" variant="h2">
        All members
      </Text>
      <MockSearch />
      <Text variant="eyebrow">Sort by</Text>
      <Box className={styles.filterContainer}>
        {/* Container */}
        <Box className={styles.tagContainer}>
          {/* Tags */}
          <Tag variant="blue">asdf</Tag>
          <Tag variant="blue">asdf</Tag>
          <Tag variant="blue">asdf</Tag>
          <Tag variant="blue">asdf</Tag>
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
    </Box>
  )
}

export default MembersOfParliamentScreen
