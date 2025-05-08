import { Box, Button, GridColumn, GridContainer, GridRow, Inline, Tabs, Text } from '@island.is/island-ui/core'
import * as styles from './WhatsHappening.css'
import LivePlayer from '../LivePlayer/LivePlayer'
import Events from './Events/Events'
import Link from 'next/link'
import { useI18n } from '../../i18n'
const WhatsHappening = () => {

  const i18n = useI18n()
  return (
    <>
      <Box className={styles.rootroot}>
        <Text variant="h2" as="h2">
        {i18n.t.home.whatsHappening?.title}
        </Text>

        <GridContainer>
          <GridRow>
            <GridColumn span={['2/2','2/2', '2/2', '1/2']}>
            <Tabs
              label="Main Tabs"
              selected="tab1"
              size="md"
              contentBackground="white"
              tabs={[
                {
                  id: 'tab1',
                  label: i18n.t.home.whatsHappening?.upcomingEvents,
                  content: <Events />,
                },
                {
                  id: 'tab2',
                  label: i18n.t.home.whatsHappening?.agenda,
                  content: <div>Content for Tab Two</div>,
                },
              ]}
              onChange={(id) => console.log(`Selected tab: ${id}`)}
              onlyRenderSelectedTab={true}
              variant="alternative"
            />
            </GridColumn>
            <GridColumn span={['2/2','2/2', '2/2', '1/2']}>
              <Box>
                {/*  LiveStream */}
                <Text>Næsti þingfundur 8. maí kl. 10:30</Text>
                <Text variant="h4" as="h3">
                {i18n.t.home?.livestream?.upcoming}
                </Text>
                <Box className={styles.player}>
                  <LivePlayer />
                </Box>
                <Inline space={2}>
                  <Button
                    colorScheme="default"
                    icon={'arrowForward'}
                    iconType={'filled'}
                    size="small"
                    variant="text"
                    as="span"
                  >
                    {i18n.t.home?.livestream?.other}
                  </Button>
                  <Button
                    colorScheme="default"
                    icon={'arrowForward'}
                    iconType={'filled'}
                    size="small"
                    variant="text"
                    as="span"
                  >
                    <Link href='/sessions/recordedSessions'>
                    {i18n.t.home?.livestream?.previous}
                    </Link>
                  </Button>
                </Inline>
              </Box>
            </GridColumn>
          </GridRow>
        </GridContainer>
      </Box>
    </>
  )
}

export default WhatsHappening
