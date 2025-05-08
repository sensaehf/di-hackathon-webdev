import { Box, Button, Divider, Icon, Tabs, Tag, Text } from '@island.is/island-ui/core'
import { Webreader } from '../../components/Webreader'
import { Table as T } from '@island.is/island-ui/core'
import * as styles from './BillsScreen.css'
import BillSearch from '../../components/BillSearch/BillSearch'
import Link from 'next/link'
import { useI18n } from '../../i18n'

const BillsScreen = () => {
  const i18n = useI18n()
  const { title, tabs, sessionHeading, filterButton, table } = i18n.t.bills

  return (
    <Box>
      <Box marginTop={1}>
        <Text variant="h1" as="h2">
          {title}
        </Text>
      </Box>
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

      <Box marginTop={2}>
        <Text variant="h3" as="h2">
          {sessionHeading}
        </Text>
      </Box>

      <Box className={styles.search}>
        <BillSearch />
        <Button variant="utility">
          {filterButton}
          <Box marginLeft={1}>
            <Icon size="small" type="outline" icon="filter" color="blue400" />
          </Box>
        </Button>
      </Box>

      <BillsTable headers={table.headers} rows={table.rows} />

      <Box width="full">
        <Divider />
      </Box>
    </Box>
  )
}

const BillsTable = ({
  headers,
  rows,
}: {
  headers: {
    caseNumber: string
    date: string
    title: string
    submitter: string
    status: string
  }
  rows: Array<{
    caseNumber: string
    date: string
    title: string
    submitter: string
    status: string
  }>
}) => {
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
        {rows.map((row, index) => (
          <T.Row key={index}>
            <T.Data>{row.caseNumber}</T.Data>
            <T.Data>{row.date}</T.Data>
            <T.Data>
              <Link href="/work/lawsResolutionsAndBills/bills/2">{row.title}</Link>
            </T.Data>
            <T.Data>
              <Link href="#">{row.submitter}</Link>
            </T.Data>
            <T.Data>
              <Tag>{row.status}</Tag>
            </T.Data>
          </T.Row>
        ))}
      </T.Body>
    </T.Table>
  )
}

export default BillsScreen
