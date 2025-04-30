import styles from './index.module.scss'
import { useQuery } from '@apollo/client'
import { Box, Inline, ContentBlock, Button, Stack } from '@island.is/island-ui/core'
import { gql } from '@apollo/client'
import { useState } from 'react'

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        image
      }
      info {
        count
        next
        pages
        prev
      }
    }
  }
`

const Index = () => {
  const [apiPage, setApiPage] = useState(1)

  const [page, setPage] = useState(1)

  const { data, loading, error } = useQuery(GET_CHARACTERS, {
    variables: { page: apiPage },
  })

  console.log(data)

  const nextPage = () =>
  {
    setApiPage(apiPage + 1)
  }

  const prevPage = () => setApiPage(apiPage -1)

  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <Box paddingY={2}>
      <ContentBlock width="medium">
        {loading && <Box className="">Loading</Box>}

        {data && (
          <>
          <Stack space={1}>
            <Inline space="containerGutter">
              {data.characters.results.map(
                (character: { id: string; name: string; image: string }) => (
                  <Box key={character.id}>
                    <img
                      src={character.image}
                      alt={character.name}
                      width={100}
                      height={100}
                    />
                    <div>{character.name}</div>
                  </Box>
                ),
              )}
            </Inline>
            <Inline>
            {data.characters.info.prev && <Button onClick={prevPage}>Prev</Button>}
            {data.characters.info.next && <Button onClick={nextPage}>Next</Button>}
            </Inline>
            </Stack>
          </>

        )}
      </ContentBlock>
    </Box>
  )
}

export default Index
