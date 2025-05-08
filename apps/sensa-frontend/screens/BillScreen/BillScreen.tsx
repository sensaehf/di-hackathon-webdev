import {
  Accordion,
  AccordionItem,
  Box,
  Button,
  Text,
} from '@island.is/island-ui/core'
import { Webreader } from '../../components/Webreader'
import * as styles from './BillScreen.css'
import { CategoryCard } from '../../components/CategoryCard/CategoryCard'
import RelatedCard from '../MemberScreen/RelatedCard/RelatedCard'
import StatusBar from './StatusBar/StatusBar'
import { useI18n } from '../../i18n'

const BillScreen = () => {
  const i18n = useI18n()
  const { meta, commentSection, discussions, related } = i18n.t.bill

  return (
    <Box>
      <Box>
        <Text variant="eyebrow">{meta.caseReference}</Text>
        <Text variant="h2" as="h2">{meta.title}</Text>
      </Box>

      <Webreader />

      <StatusBar />

      <Text>{commentSection.infoText}</Text>

      <CategoryCard heading={commentSection.button} text="" />

      {discussions.map((label, index) => (
        <Box key={index} className={styles.accordionBox}>
          <Accordion>
            <AccordionItem
              id={`item-${index}`}
              label={label}
              startExpanded={false}
            >
              {''}
            </AccordionItem>
          </Accordion>
        </Box>
      ))}

      <RelatedCard>
        <Text variant="eyebrow">{related.title}</Text>
        {related.links.map((linkLabel, index) => (
          <Button key={index} variant="text">{linkLabel}</Button>
        ))}
      </RelatedCard>
    </Box>
  )
}

export default BillScreen
