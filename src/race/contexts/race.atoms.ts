import { atom } from 'jotai'
import type { RaceFiltersType, RaceType } from '@/race/types/race.types'

export const RACE_DEFAULT_FILTERS: RaceFiltersType = {
  query: '',
  category: '',
}

export const racesFiltersAtom = atom<RaceFiltersType>(RACE_DEFAULT_FILTERS)

export const clickedRaceAtom = atom<RaceType | null>(null)
export const hoveredRaceAtom = atom<RaceType | null>(null)
