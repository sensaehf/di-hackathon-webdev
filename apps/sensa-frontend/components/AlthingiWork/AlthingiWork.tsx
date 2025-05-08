import {
  Box,
  CategoryCard,
  GridColumn,
  GridContainer,
  GridRow,
  Text,
} from '@island.is/island-ui/core'

import * as styles from './AlthingiWork.css'
import { useI18n } from '../../i18n'

const AlthingiWork = () => {
  const i18n = useI18n()
  return (
    <>
      <Box className={styles.root}>
        <Text as="h2" variant="h2">
          {i18n.t.home.workHeader}
        </Text>

        <GridContainer>
          <GridRow>
            <GridColumn span={['12/12','12/12', '4/12']}>
              <Box marginBottom={2}>
                <CategoryCard href='/work/peopleAndCommittees' heading={i18n.t.home?.workHeaderContent?.people.title} text={i18n.t.home?.workHeaderContent?.people.content} />
              </Box>
            </GridColumn>
            <GridColumn span={['12/12','12/12', '4/12']}>
              <Box marginBottom={2}>
                <CategoryCard href='sessions/recordedSessions' heading={i18n.t.home?.workHeaderContent?.sessions.title} text={i18n.t.home?.workHeaderContent?.sessions.content} />
              </Box>
            </GridColumn>
            <GridColumn span={['12/12','12/12',  '4/12']}>
              <CategoryCard href='/work/sessionsAndBills' heading={i18n.t.home?.workHeaderContent?.laws.title} text={i18n.t.home?.workHeaderContent?.laws.content} />
            </GridColumn>
          </GridRow>
        </GridContainer>
      </Box>
    </>
  )
}

export default AlthingiWork
