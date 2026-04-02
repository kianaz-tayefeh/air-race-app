import { isInString } from '@/core/helpers/string.helpers'
import type { RaceFiltersType, RaceType } from '@/race/types/race.types'
import {
  ACTIVE_MARKER_SIZE,
  DEFAULT_MARKER_SIZE,
  INFO_WINDOW_OFFSET_Y,
  MAP_MARKER_ICON_URL,
} from '../constants/race.constants'

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

export const getGoogleMaps = () => {
  if (typeof window === 'undefined' || !window.google?.maps) {
    return null
  }

  return window.google.maps
}

export const getMarkerAnimation = (isBouncing: boolean) => {
  const googleMaps = getGoogleMaps()

  if (!isBouncing || !googleMaps) {
    return undefined
  }

  return googleMaps.Animation.BOUNCE
}

export const getMarkerIcon = (isActive: boolean) => {
  const googleMaps = getGoogleMaps()

  if (!googleMaps) {
    return undefined
  }

  const size = isActive ? ACTIVE_MARKER_SIZE : DEFAULT_MARKER_SIZE

  return {
    url: MAP_MARKER_ICON_URL,
    scaledSize: new googleMaps.Size(size, size),
  }
}

export const getInfoWindowOptions = () => {
  const googleMaps = getGoogleMaps()

  if (!googleMaps) {
    return {}
  }

  return {
    pixelOffset: new googleMaps.Size(0, INFO_WINDOW_OFFSET_Y),
  }
}
