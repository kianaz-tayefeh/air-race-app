import { useAtom } from 'jotai'
import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/core/constants/reactQuery.constants'
import { fetchRacesApi } from '@/race/apis/race.apis'
import { racesFiltersAtom } from '@/race/contexts/race.atoms'
import type { RaceType } from '@/race/types/race.types'

export const useFetchRaces = () => {
  const [racesFilters] = useAtom(racesFiltersAtom)

  return useQuery<RaceType[]>({
    queryKey: [QUERY_KEYS.races.list, racesFilters],
    queryFn: async () => {
      const response = await fetchRacesApi(racesFilters)

      return Array.isArray(response) ? response : []
    },
    placeholderData: [],
  })
}
