import {
  Box,
  Button,
  GridColumn,
  GridContainer,
  GridRow,
  Inline,
  Tabs,
  Tag,
  Text,
} from '@island.is/island-ui/core'
import * as styles from './News.css'
import LivePlayer from '../LivePlayer/LivePlayer'
import NewsCard from '../NewsCard/NewsCard'

const News = () => {
  return (
    <Box marginTop={6} className={styles.root}>
      <Box className={styles.header}>
        <Text  variant="h2" as="h2">
          News and announcements
        </Text>
        <Button variant="text">View all news and announcements</Button>
      </Box>

      <Box className={styles.content}>
        <Box height='full' className={styles.box}>
          <NewsCard
            date={new Date().toISOString()}
            title={'The Icelandic Human Rights Institute is launched'}
            titleAs="h3"
            titleVariant="h3"
            introduction={
              <InnerNewsCard text="The Icelandic Human Rights Institute began operations on May 1st and operates under the auspices of the Althingi in accordance with Act No. 88/2024 . The office's website is www.mannrettindi.is , but it is still under construction." />

            }
            href="#"
            readMoreText=""
          />
        </Box>
        <Box height='full' className={styles.box}>
          <NewsCard
            date={new Date().toISOString()}
            title={'Impromptu questions on Thursday, May 8th'}
            titleAs="h3"
            titleVariant="h3"
            introduction={
              <InnerNewsCard text="The Icelandic Human Rights Institute began operations on May 1st and operates under the auspices of the Althingi in accordance with Act No. 88/2024 . The office's website is www.mannrettindi.is , but it is still under construction." />

            }
            href="#"
            readMoreText=""
          />
        </Box>
        <Box className={styles.box}>
          <NewsCard
            date={new Date().toISOString()}
            title={'Committee day May 9th'}
            titleAs="h3"
            titleVariant="h3"
            introduction={
              <InnerNewsCard text="The Icelandic Human Rights Institute began operations on May 1st and operates under the auspices of the Althingi in accordance with Act No. 88/2024 . The office's website is www.mannrettindi.is , but it is still under construction." />

            }
            href="#"
            readMoreText=""
            image="https://picsum.photos/200"
          />
        </Box>
        <Box className={styles.box}>
          <NewsCard
            date={new Date().toISOString()}
            title={'The Icelandic Human Rights Institute is launched'}
            titleAs="h3"
            titleVariant="h3"
            introduction={
              <InnerNewsCard text="The Icelandic Human Rights Institute began operations on May 1st and operates under the auspices of the Althingi in accordance with Act No. 88/2024 . The office's website is www.mannrettindi.is , but it is still under construction." />
            }

            href="#"
            readMoreText=""
          />
        </Box>
      </Box>
    </Box>
  )
}

const InnerNewsCard = ({text}: {text: string}) => {
  return (<Box className={styles.innerNewsCard}>
    <Text>{text}</Text>
    <Tag>Tag name</Tag>
  </Box>)
}

export default News
