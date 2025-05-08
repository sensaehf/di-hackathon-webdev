import {  Text } from '@island.is/island-ui/core'
import { Webreader } from '../../components/Webreader'
import { CategoryCard } from '../../components/CategoryCard/CategoryCard'
import { useI18n } from '../../i18n'


const PeopleAndCommitteesScreen = () => {
  const i18n = useI18n()

  return (
    <>
      <Text variant="h2" as="h2">
        {i18n.t.home.workHeaderContent.people.title}
      </Text>

      <Webreader />

      {i18n.t.peopleAndCommittees.items.map((item, index) => (
  <CategoryCard href={item?.href ?? ''} key={index} heading={item.heading} text={item.text} />
))}


    </>
  )
}

export default PeopleAndCommitteesScreen
