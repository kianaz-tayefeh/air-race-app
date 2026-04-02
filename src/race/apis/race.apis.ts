import { getFilteredRaces } from '@/race/helpers/race.helpers'
import { MOCKED_RACES } from '@/race/mocks/race.mocks'
import type { RaceFiltersType, RaceType } from '@/race/types/race.types'

export const fetchRacesApi = (filters: RaceFiltersType): Promise<RaceType[]> => {
  return new Promise((resolve, reject) => {
    // We want to simulate a real world scenario, so we need to filter in server side
    const filteredRaces = getFilteredRaces(MOCKED_RACES, filters)

    // We dont want to spend more time cause this is a mock api,
    // but we can also check if the filters are valid and other edge cases here
    // So here only for having better testing UX I will render error randomely

    setTimeout(() => {
      const shouldFail = Math.random() < 0.1 // 10% chance

      if (shouldFail) {
        reject(new Error('MOCK ERROR: Failed to fetch races, randomly 10% of times'))
      } else {
        resolve(filteredRaces)
      }
    }, 500)
  })
}
