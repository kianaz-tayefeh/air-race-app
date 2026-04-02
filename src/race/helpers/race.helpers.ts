import { isInString } from '@/core/helpers/string.helpers'
import {
  ACTIVE_MARKER_SIZE,
  DEFAULT_MARKER_SIZE,
  MAP_MARKER_ICON_URL,
} from '@/race/constants/race.constants'
import type { RaceFiltersType, RaceType } from '@/race/types/race.types'

export const getFilteredRaces = (races: RaceType[], filters: RaceFiltersType): RaceType[] => {
  if (!races || !races.length) return []

  if (!filters.query && !filters.category) return races

  const filteredRaces = races.filter(race => {
    const matchesQuery = filters.query
      ? isInString(race.title, filters.query) || isInString(race.description, filters.query)
      : true

    const matchesCategory = filters.category ? race.category === filters.category : true

    return matchesQuery && matchesCategory
  })

  return filteredRaces
}

export const getMapMarkerIcon = (isClicked: boolean): google.maps.Icon | undefined => {
  if (!window?.google) return undefined

  const size = isClicked ? ACTIVE_MARKER_SIZE : DEFAULT_MARKER_SIZE
  return {
    url: MAP_MARKER_ICON_URL,
    scaledSize: new window.google.maps.Size(size, size),
  }
}

export const getMapMarkerAnimation = (isClicked: boolean, isHovered: boolean) => {
  if (!window?.google || isClicked || !isHovered) return undefined

  return window.google.maps.Animation.BOUNCE
}
