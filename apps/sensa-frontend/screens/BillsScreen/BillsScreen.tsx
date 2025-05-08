import { Box, Button, Divider, Icon, Tabs, Tag, Text } from '@island.is/island-ui/core'
import { Webreader } from '../../components/Webreader'
import { Table as T } from '@island.is/island-ui/core'
import * as styles from './BillsScreen.css'
import MockSearch from '../../components/MockSearch/MockSearch'
import Link from 'next/link'
import { useI18n } from '../../i18n'

const BillsScreen = () => {
  const i18n = useI18n()
  const { title, tabs, sessionHeading, filterButton, table } = i18n.t.bills

  return (
    <>
      <Text variant="h2" as="h2">
        {title}
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
              label: tabs.active,
              content: <div></div>,
            },
            {
              id: 'tab2',
              label: tabs.archive,
              content: <div></div>,
            },
            {
              id: 'tab3',
              label: tabs.reports,
              content: <div></div>,
            },
          ]}
          onChange={(id) => console.log(`Selected tab: ${id}`)}
          onlyRenderSelectedTab={true}
          variant="alternative"
        />
      </Box>

      <Text variant="h3" as="h2">
        {sessionHeading}
      </Text>

      <Box className={styles.search}>
        <MockSearch />
        <Button variant="utility">
          {filterButton}
          <Box marginLeft={1}>
            <Icon size="small" type="outline" icon="filter" color="blue400" />
          </Box>
        </Button>
      </Box>

      <BillsTable headers={table.headers} />

      <Box width="full">
        <Divider />
      </Box>
    </>
  )
}

const BillsTable = ({ headers }: { headers: any }) => {
  return (
    <T.Table>
      <T.Head>
        <T.Row>
          <T.HeadData>{headers.caseNumber}</T.HeadData>
          <T.HeadData>{headers.date}</T.HeadData>
          <T.HeadData>{headers.title}</T.HeadData>
          <T.HeadData>{headers.submitter}</T.HeadData>
          <T.HeadData>{headers.status}</T.HeadData>
        </T.Row>
      </T.Head>
      <T.Body>
        {[1, 2, 3].map((x) => (
          <T.Row key={x}>
            <T.Data>123</T.Data>
            <T.Data>1. jan 2024</T.Data>
            <T.Data>
              <Link href="/work/lawsResolutionsAndBills/bills/2">Leikskólamál</Link>
            </T.Data>
            <T.Data>
              <Link href="#">Atvinnuvegaráð</Link>
            </T.Data>
            <T.Data>
              <Tag>1st discussion</Tag>
            </T.Data>
          </T.Row>
        ))}
      </T.Body>
    </T.Table>
  )
}

export default BillsScreen
