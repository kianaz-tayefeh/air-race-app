export type RaceType = {
  id: number
  title: string
  description: string
  address: string
  country: string
  coordinates: {
    lat: number
    lng: number
  }
  category: string
}

export type RaceFiltersType = {
  query?: string
  category?: RaceCategoryFilterType
}

export type RaceCategoryFilterType = 'A' | 'B' | ''
