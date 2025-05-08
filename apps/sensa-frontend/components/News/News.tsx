import {
  Box,
  Button,
  Tag,
  Text,
} from '@island.is/island-ui/core'
import * as styles from './News.css'
import NewsCard from '../NewsCard/NewsCard'
import { useI18n } from '../../i18n'

const News = () => {
  const i18n = useI18n()
  const newsItems = i18n.t.home?.news?.items || []

  return (
    <Box marginTop={6} className={styles.root}>
      <Box className={styles.header}>
        <Text variant="h2" as="h2">
          {i18n.t.home?.news?.title}
        </Text>
        <Button variant="text">{i18n.t.home?.news?.viewAll}</Button>
      </Box>

      <Box className={styles.content}>
        {newsItems.map((item, index) => (
          <Box key={index} height="full" className={styles.box}>
            <NewsCard
              date={item.date}
              title={item.title}
              titleAs="h3"
              titleVariant="h3"
              introduction={<InnerNewsCard text={item.introduction} />}
              href={item.href}
              readMoreText=""
              image={item.image}
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

const InnerNewsCard = ({ text }: { text: string }) => {
  return (
    <Box className={styles.innerNewsCard}>
      <Text>{text}</Text>
      <Tag>Tag</Tag>
    </Box>
  )
}

export default News
