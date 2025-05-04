import styles from './index.module.scss'
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
import { Characters, Scalars, Character } from '../graphql/schema'
import Image from 'next/image'
import { useCharacterPagination } from './useCharacterPagination'
import NewsCard from '../components/NewsCard/NewsCard'
type GetCharactersData = {
  characters?: Characters | null
}

type GetCharactersVars = {
  page?: Scalars['Int']
}

const Index = () => {
  const {
    characters,
    loading,
    error,
    nextPage,
    prevPage,
    setPage,
    page,
    totalPages,
  } = useCharacterPagination()

  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <Box paddingX={12}>
      <Header />
      <GridContainer>
        {loading && <Box className="">Loading</Box>}

        {characters && (
          <>
            <GridRow rowGap={5}>
              {characters
                ?.filter((c): c is Character => c !== null)
                .map((character) => (
                  <GridColumn span="1/4" key={character.id}>
                    <ProfileCard
                      link={{ text: character.location?.name ?? '', url: '#' }}
                      size="small"
                      title={character?.name ?? ''}
                      image={character.image ?? ''}
                      key={character.id ?? character.name ?? Math.random()}
                    />
                  </GridColumn>
                ))}
            </GridRow>
            <NewsCard title='Title' introduction='introduction' href='href'/>
            <Pagination
              page={page}
              totalPages={totalPages}
              renderLink={(page, className, children) => (
                <Box
                  cursor="pointer"
                  className={className}
                  onClick={() => setPage(page)}
                >
                  {children}
                </Box>
              )}
            />
          </>
        )}
      </GridContainer>
    </Box>
  )
}

export default Index
