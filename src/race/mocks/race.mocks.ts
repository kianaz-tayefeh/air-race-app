import type { RaceType } from '@/race/types/race.types'

export const MOCKED_RACES: RaceType[] = [
  {
    id: 1,
    title: 'Race 1',
    description: 'Description 1',
    country: 'Germany',
    address: 'Marienplatz, Munich',
    coordinates: {
      lat: 48.137154,
      lng: 11.576124,
    },
    category: 'A',
  },
  {
    id: 2,
    title: 'Race 2',
    description: 'Description 2',
    country: 'Germany',
    address: 'Leopoldstraße, Munich',
    coordinates: {
      lat: 48.147154,
      lng: 11.586124,
    },
    category: 'B',
  },
  {
    id: 3,
    title: 'Race 3',
    description: 'Description 3',
    country: 'Germany',
    address: 'Gärtnerplatz, Munich',
    coordinates: {
      lat: 48.117154,
      lng: 11.556124,
    },
    category: 'A',
  },
  {
    id: 4,
    title: 'Race 4',
    description: 'Description 4',
    country: 'Germany',
    address: 'Theresienstraße, Munich',
    coordinates: {
      lat: 48.127154,
      lng: 11.546124,
    },
    category: 'B',
  },
]
