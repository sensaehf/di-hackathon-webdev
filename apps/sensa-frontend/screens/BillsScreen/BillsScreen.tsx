import { Box, Button, Divider, Icon, Tabs, Tag, Text } from '@island.is/island-ui/core'
import { Webreader } from 'apps/sensa-frontend/components/Webreader'
import { Table as T } from '@island.is/island-ui/core'

import * as styles from './BillsScreen.css'
import MockSearch from 'apps/sensa-frontend/components/MockSearch/MockSearch'
import Link from 'next/link'
// Inside box layout
const BillsScreen = () => {
  return (
    <>
      <Text variant="h2" as="h2">
        Bills
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

     <BillsTable />

     <Box width='full'>
        <Divider />
        </Box>
    </>
  )
}

const BillsTable = () => {
  return (
    <T.Table>
      <T.Head>
        <T.Row>
          <T.HeadData>Mál</T.HeadData>
          <T.HeadData>Dagsetning</T.HeadData>
          <T.HeadData>Heiti máls</T.HeadData>
          <T.HeadData>Flutningsmaður</T.HeadData>
          <T.HeadData>Staða</T.HeadData>
        </T.Row>
      </T.Head>
      <T.Body>
        {[1, 2, 3].map((x) => (
          <T.Row>
            <T.Data>123</T.Data>
            <T.Data>1. jan 2024</T.Data>
            <T.Data><Link href="/work/lawsResolutionsAndBills/bills/2">Leikskólamál</Link></T.Data>
            <T.Data><Link href="#">Atvinnuvegaráð</Link></T.Data>
            <T.Data><Tag>1st discussion</Tag></T.Data>
          </T.Row>
        ))}
      </T.Body>

    </T.Table>
  )
}

export default BillsScreen
