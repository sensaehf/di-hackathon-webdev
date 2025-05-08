import {
  Box,
  Button,
  GridColumn,
  GridContainer,
  GridRow,
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

        <GridContainer>
          <GridRow>
            {newsItems.map((item, index) => (
              <GridColumn key={index} span={['12/12','12/12', '12/12', '6/12']}>
                <Box marginBottom={1} >
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
              </GridColumn>
            ))}
          </GridRow>
        </GridContainer>
    </Box>
  )
}

const InnerNewsCard = ({ text }: { text: string }) => {
  return (
    <Box className={styles.innerNewsCard}>
      <Text>{text}</Text>
      <Tag>{'Skoða nánar'}</Tag>
    </Box>
  )
}

export default News
