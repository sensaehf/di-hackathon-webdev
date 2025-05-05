import * as styles from './MainScreen.css'

import { useQuery } from '@apollo/client'
import {
  Box,
  Inline,
  ContentBlock,
  Button,
  Header,
  Stack,
  Pagination,
  ProfileCard,
  GridContainer,
  GridColumn,
  GridRow,
} from '@island.is/island-ui/core'
import { gql } from '@apollo/client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Character, Characters, Scalars } from '../../graphql/schema'
import { useCharacterPagination } from './useCharacterPagination'
import NewsCard from '../../components/NewsCard/NewsCard'

import { ParliamentMemberList } from '../../Data/parliamentMemberList'
import { useI18n } from '../../i18n'
type GetCharactersData = {
  characters?: Characters | null
}

const MainScreen = () => {

  const [activeCharacter, setActiveCharacter] = useState<Character | null>(null)

  const {
    t: { accessControl: t, routes },
    activeLocale,
  } = useI18n()


  const clickCharacter = (c: Character) => {
    if (c.id === activeCharacter?.id) {
      setActiveCharacter(null)
    } else {
      setActiveCharacter(c)
    }
  }
  console.log(activeLocale)

  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <Box paddingX={12}>

      <GridContainer>
        <ParliamentMemberList />
      </GridContainer>
    </Box>
  )
}

export default MainScreen
