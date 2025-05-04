import { gql, useQuery } from '@apollo/client'
import { useState, useMemo } from 'react'
import { Characters, Scalars, Character } from '../graphql/schema'

type UsePaginatedCharactersResult = {
  characters: Character[]
  loading: boolean
  error?: any
  nextPage: () => void
  prevPage: () => void
  setPage: React.Dispatch<React.SetStateAction<number>>
  page: number
  totalPages: number
}

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        image
        location {
          id
          name
          dimension
        }
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

export const useCharacterPagination = (): UsePaginatedCharactersResult => {
  const [clientPage, setClientPage] = useState(1) // 10-item pages
  const apiPage = Math.ceil(clientPage / 2)

  const { data, loading, error } = useQuery<
    { characters?: Characters | null },
    { page?: Scalars['Int'] }
  >(GET_CHARACTERS, { variables: { page: apiPage } })

  const characters = useMemo(() => {
    const results =
      data?.characters?.results?.filter((c): c is Character => !!c) ?? []
    const startIndex = (clientPage - 1) % 2 === 0 ? 0 : 10
    return results.slice(startIndex, startIndex + 10)
  }, [data, clientPage])

  const totalApiPages = data?.characters?.info?.pages ?? 0
  const totalClientPages = Math.ceil(
    (data?.characters?.info?.count ?? 0) / 10.0,
  ) // each API page = 2 client pages

  const nextPage = () => {
    setClientPage((p) => (p < totalClientPages ? p + 1 : p))
  }

  const prevPage = () => {
    setClientPage((p) => (p > 1 ? p - 1 : p))
  }

  return {
    characters,
    loading,
    error,
    nextPage,
    prevPage,
    page: clientPage,
    setPage: setClientPage,
    totalPages: totalClientPages,
  }
}
