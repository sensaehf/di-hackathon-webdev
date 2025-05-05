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
import { useI18n } from '../../i18n'
type GetCharactersData = {
  characters?: Characters | null
}

type GetCharactersVars = {
  page?: Scalars['Int']
}

const MainScreen = () => {
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
      <Header />
      <h1>{t.info}</h1>
      <GridContainer>
        {loading && <Box className="">Loading</Box>}

        {characters && (
          <>
            <GridRow rowGap={5}>
              {characters
                ?.filter((c): c is Character => c !== null)
                .map((character) => (
                  <>
                    <GridColumn span={'1/4'} key={character.id}>
                      <Box className={styles.hoverable} onClick={() => clickCharacter(character)}>
                        <ProfileCard
                          link={{
                            text: character.location?.name ?? '',
                            url: '#',
                          }}
                          size="small"
                          title={character?.name ?? ''}
                          image={character.image ?? ''}
                          key={character.id ?? character.name ?? Math.random()}
                        />
                      </Box>
                    </GridColumn>
                    {activeCharacter?.id == character.id && (
                      <>
                        <GridColumn span={'4/4'}>
                          <NewsCard
                            title={character?.name ?? ''}
                            introduction={JSON.stringify(character)}
                            image={character?.image ?? ''}
                            href="#"
                            readMoreText=''
                          />
                        </GridColumn>
                      </>
                    )}
                  </>
                ))}
            </GridRow>
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

export default MainScreen
