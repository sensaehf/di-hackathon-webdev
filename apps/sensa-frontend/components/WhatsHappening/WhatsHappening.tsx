import { Box, Button, Inline, Tabs, Text } from '@island.is/island-ui/core'
import * as styles from './WhatsHappening.css'
import LivePlayer from '../LivePlayer/LivePlayer'
import Events from './Events/Events'
const WhatsHappening = () => {
  return (
    <>
      <Box className={styles.rootroot}>
        <Text variant="h2" as="h2">
          What is happening
        </Text>

        <Box className={styles.root}>
          <Box className={styles.box1}>
            <Tabs
              label="Main Tabs"
              selected="tab1"
              size="md"
              contentBackground="white"
              tabs={[
                {
                  id: 'tab1',
                  label: 'Upcoming events',
                  content: <Events />,
                },
                {
                  id: 'tab2',
                  label: 'Agenda for next session',
                  content: <div>Content for Tab Two</div>,
                },
              ]}
              onChange={(id) => console.log(`Selected tab: ${id}`)}
              onlyRenderSelectedTab={true}
              variant="alternative"
            />
          </Box>
          {/*  Tabs */}
          <Box className={styles.box}>
            {/*  LiveStream */}
            <Text>1. janúar 2020 At 1:30 PM</Text>
            <Text variant="h4" as="h3">
              Upcoming livestream
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
                Other Broadcasting options
              </Button>
              <Button
                colorScheme="default"
                icon={'arrowForward'}
                iconType={'filled'}
                size="small"
                variant="text"
                as="span"
              >
                Previous recordings
              </Button>
            </Inline>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default WhatsHappening
