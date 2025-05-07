import {
  Accordion,
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
import { CategoryCard } from 'apps/sensa-frontend/components/CategoryCard/CategoryCard'
import RelatedCard from '../MemberScreen/RelatedCard/RelatedCard'
import StatusBar from './StatusBar/StatusBar'
// Inside box layout
const BillScreen = () => {
  return (
    <>
      <Box>
        <Text variant="eyebrow">
          Case 97, Bill 156th Legislative Session 2025.
        </Text>

        <Text variant="h2" as="h2">
          Grunnskólar
        </Text>
      </Box>
      <Webreader />

      <StatusBar />

      <Text>
        Anyone is free to send a written comment to the standing committee on a
        parliamentary matter. Comments should be sent through the Althingi's
        comment portal . If the formal comment process for a parliamentary
        matter has not begun or the comment deadline has passed, it is possible
        to send a comment to the email address comments@althingi.is
      </Text>
      {/* TODO: Email Icon in heading */}
      <CategoryCard heading="Farðu í athugasemdir alþingis" text="" />

      {['1st discussion', '2nd discussion', 'Frumvarp eftir 2. umræðu'].map(
        (x) => (
          <Box className={styles.accordionBox}>
            <Accordion>
              <Box className={styles.accordionChild}>
                <Text>{x}</Text>
                <Button colorScheme="light" circle={true}>
                  +
                </Button>
              </Box>
            </Accordion>
          </Box>
        ),
      )}

      <RelatedCard>
        <Text variant="eyebrow">Related documentaion</Text>
        <Button variant="text">Related documentaion</Button>
        <Button variant="text">Related documentaion</Button>
        <Button variant="text">Related documentaion</Button>
      </RelatedCard>
    </>
  )
}

export default BillScreen
