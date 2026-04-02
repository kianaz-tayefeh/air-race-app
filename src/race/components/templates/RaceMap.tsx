import { useMemo } from 'react'
import { GoogleMap, InfoWindowF, LoadScript, MarkerF } from '@react-google-maps/api'
import { useAtom } from 'jotai'

import {
  GOOGLE_MAPS_API_KEY,
  MAP_CONTAINER_STYLE,
  MAP_DEFAULT_CENTER,
  MAP_DEFAULT_OPTIONS,
  MAP_ZOOM,
} from '@/race/constants/race.constants'
import { clickedRaceAtom, hoveredRaceAtom } from '@/race/contexts/race.atoms'
import { useFetchRaces } from '@/race/hooks/race.hooks'
import {
  getInfoWindowOptions,
  getMarkerAnimation,
  getMarkerIcon,
} from '@/race/helpers/race.helpers'

export const RaceMap = () => {
  const { data: races = [] } = useFetchRaces()

  const [clickedRace, setClickedRace] = useAtom(clickedRaceAtom)
  const [hoveredRace, setHoveredRace] = useAtom(hoveredRaceAtom)

  const center = useMemo(() => {
    if (!clickedRace) {
      return MAP_DEFAULT_CENTER
    }

    return {
      lat: clickedRace.coordinates.lat,
      lng: clickedRace.coordinates.lng,
    }
  }, [clickedRace])

  return (
    <div className='overflow-hidden rounded-3xl shadow-sm'>
      <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={MAP_CONTAINER_STYLE}
          center={center}
          zoom={MAP_ZOOM}
          options={MAP_DEFAULT_OPTIONS}
        >
          {races.map(race => {
            const isActive = clickedRace?.id === race.id
            const isHovered = hoveredRace?.id === race.id
            const isBouncing = isActive || isHovered

            return (
              <MarkerF
                key={race.id}
                position={{
                  lat: race.coordinates.lat,
                  lng: race.coordinates.lng,
                }}
                onClick={() => setClickedRace(race)}
                onMouseOver={() => setHoveredRace(race)}
                animation={getMarkerAnimation(isBouncing)}
                icon={getMarkerIcon(isActive)}
              />
            )
          })}

          {clickedRace && (
            <InfoWindowF
              position={{
                lat: clickedRace.coordinates.lat,
                lng: clickedRace.coordinates.lng,
              }}
              onCloseClick={() => setClickedRace(null)}
              options={getInfoWindowOptions()}
            >
              <div className='max-w-xs space-y-2'>
                <h3 className='text-sm font-semibold text-gray-900 leading-tight'>
                  {clickedRace.title}
                </h3>
                <p className='text-xs text-gray-600 leading-relaxed'>{clickedRace.description}</p>
              </div>
            </InfoWindowF>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  )
}
