import {
  Box,
  Button,
  GridColumn,
  GridContainer,
  GridRow,
  Inline,
  Tabs,
  Text,
} from '@island.is/island-ui/core'
import * as styles from './News.css'
import LivePlayer from '../LivePlayer/LivePlayer'
import NewsCard from '../NewsCard/NewsCard'

const News = () => {
  return (
    <>
      <Text variant="h2" as="h2">
        News and announcements
      </Text>

      <GridContainer>
        <GridRow rowGap={2} align={'center'}>
          <GridColumn span={'1/2'}>
          <Box height='full'>
              <NewsCard
                date={new Date().toISOString()}
                title={'The Icelandic Human Rights Institute is launched'}
                titleAs="h3"
                titleVariant="h3"
                introduction={
                  "The Icelandic Human Rights Institute began operations on May 1st and operates under the auspices of the Althingi in accordance with Act No. 88/2024 . The office's website is www.mannrettindi.is , but it is still under construction."
                }
                href="#"
                readMoreText=""
              />
            </Box>
          </GridColumn>
          <GridColumn span={'1/2'}>
          <Box height='full'>
              <NewsCard
                date={new Date().toISOString()}
                title={'Impromptu questions on Thursday, May 8th'}
                titleAs="h3"
                titleVariant="h3"
                introduction={
                  'Impromptu questions to the minister will be held on Thursday, May 8 at around 10:30 AM.'
                }
                href="#"
                readMoreText=""
              />
            </Box>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn span={'1/2'}>
            <Box height='full'>
              <NewsCard
                date={new Date().toISOString()}
                title={'Committee day May 9th'}
                titleAs="h3"
                titleVariant="h3"
                introduction={
                  "According to the Althingi's work schedule, the committee day will be Friday, May 9th."
                }
                href="#"
                readMoreText="asdffasd"
                image="https://picsum.photos/200"
              />
            </Box>
          </GridColumn>
          <GridColumn span={'1/2'}>
          <Box height='full'>
              <NewsCard
                date={new Date().toISOString()}
                title={'The Icelandic Human Rights Institute is launched'}
                titleAs="h3"
                titleVariant="h3"
                introduction={
                  "The Icelandic Human Rights Institute began operations on May 1st and operates under the auspices of the Althingi in accordance with Act No. 88/2024 . The office's website is www.mannrettindi.is , but it is still under construction."
                }
                href="#"
                readMoreText=""
              />
            </Box>
          </GridColumn>
        </GridRow>
      </GridContainer>
    </>
  )
}

export default News
