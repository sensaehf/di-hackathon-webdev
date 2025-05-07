import { Box, Text } from '@island.is/island-ui/core'
import { Webreader } from '../../components/Webreader'
import { CategoryCard } from '../../components/CategoryCard/CategoryCard'


const PeopleAndCommitteesScreen = () => {
  // TODO i18n

  return (
    <>
      <Text variant="h2" as="h2">
        Laws, Resolutions and Bills
      </Text>

      <Webreader />

      <CategoryCard h text='lorem' heading='Members of Parliament'/>
      <CategoryCard text='lorem' heading='Members of Parliament'/>
      <CategoryCard text='lorem' heading='Members of Parliament'/>
      <CategoryCard text='lorem' heading='Members of Parliament'/>
      <CategoryCard text='lorem' heading='Members of Parliament'/>
      <CategoryCard text='lorem' heading='Members of Parliament'/>
    </>
  )
}

export default PeopleAndCommitteesScreen
