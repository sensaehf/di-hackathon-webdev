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
import { useState } from 'react'
import Image from 'next/image'
import { Character, Characters, Scalars } from '../../graphql/schema'
import { useCharacterPagination } from './useCharacterPagination'
import NewsCard from '../../components/NewsCard/NewsCard'
import { ParliamentMemberList } from '../../Data/parliamentMemberList'


const MainScreen = () => {

  return (
    <Box paddingX={12}>
      <GridContainer>
        <ParliamentMemberList />
      </GridContainer>
    </Box>
  )
}

export default MainScreen
