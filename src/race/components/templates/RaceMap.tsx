import { useMemo } from 'react'
import { GoogleMap, InfoWindowF, LoadScript, MarkerF } from '@react-google-maps/api'
import { useAtom } from 'jotai'

import {
  GOOGLE_MAPS_API_KEY,
  MAP_CONTAINER_STYLE,
  MAP_DEFAULT_CENTER,
  MAP_DEFAULT_OPTIONS,
  MAP_OPTIONS,
} from '@/race/constants/race.constants'
import { clickedRaceAtom, hoveredRaceAtom } from '@/race/contexts/race.atoms'
import { useFetchRaces } from '@/race/hooks/race.hooks'
import { getMapMarkerAnimation, getMapMarkerIcon } from '@/race/helpers/race.helpers'

export const RaceMap = () => {
  const { data: races = [] } = useFetchRaces()

  const [clickedRace, setClickedRace] = useAtom(clickedRaceAtom)
  const [hoveredRace, setHoveredRace] = useAtom(hoveredRaceAtom)

  const center = useMemo(() => {
    if (!clickedRace) return MAP_DEFAULT_CENTER

    return { lat: clickedRace.coordinates.lat, lng: clickedRace.coordinates.lng }
  }, [clickedRace])

  return (
    <div className='overflow-hidden rounded-3xl shadow-sm'>
      <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={MAP_CONTAINER_STYLE}
          center={center}
          zoom={MAP_OPTIONS.zoom}
          options={MAP_DEFAULT_OPTIONS}
        >
          {races.map(race => {
            const isClicked = clickedRace?.id === race.id
            const isHovered = hoveredRace?.id === race.id

            return (
              <MarkerF
                key={race.id}
                position={{ lat: race.coordinates.lat, lng: race.coordinates.lng }}
                onClick={() => setClickedRace(race)}
                onMouseOver={() => setHoveredRace(race)}
                onMouseOut={() => setHoveredRace(null)}
                animation={getMapMarkerAnimation(isClicked, isHovered)}
                icon={getMapMarkerIcon(isClicked)}
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
              options={{
                pixelOffset: window?.google
                  ? new window.google.maps.Size(0, MAP_OPTIONS.infoWindow.offsetY)
                  : undefined,
              }}
            >
              <div className='max-w-xs'>
                <div className='text-base font-semibold'>{clickedRace.title}</div>
                <p className=' text-sm text-gray-600'>{clickedRace.description}</p>
              </div>
            </InfoWindowF>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  )
}
