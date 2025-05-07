import {
  Box,
  Button,
  Divider,
  Icon,
  Tabs,
  Tag,
  Text,
} from '@island.is/island-ui/core'
import { Webreader } from 'apps/sensa-frontend/components/Webreader'
import { Table as T } from '@island.is/island-ui/core'

import * as styles from './BillScreen.css'
import MockSearch from 'apps/sensa-frontend/components/MockSearch/MockSearch'
import Link from 'next/link'
// Inside box layout
const BillScreen = () => {
  return (
    <>
      <Text variant="h2" as="h2">
        Grunnskólar
      </Text>
      <Webreader />
      <Box className={styles.tabs}>
        <Tabs
          label="Main Tabs"
          selected="tab1"
          size="md"
          contentBackground="white"
          tabs={[
            {
              id: 'tab1',
              label: 'Active',
              content: <div></div>,
            },
            {
              id: 'tab2',
              label: 'Archive',
              content: <div></div>,
            },
            {
              id: 'tab3',
              label: 'Reports',
              content: <div></div>,
            },
          ]}
          onChange={(id) => console.log(`Selected tab: ${id}`)}
          onlyRenderSelectedTab={true}
          variant="alternative"
        />
      </Box>

      <Text variant="h3" as="h2">
        156th Legislative Session 2025
      </Text>

      <Box className={styles.search}>
        <MockSearch />
        <Button variant="utility">
          Filter
          <Box marginLeft={1}>
            <Icon size="small" type="outline" icon="filter" color="blue400" />
          </Box>
        </Button>
      </Box>

      <Box width="full">
        <Divider />
      </Box>
    </>
  )
}

export default BillScreen
