export const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''
export const ACTIVE_MARKER_SIZE = 50
export const DEFAULT_MARKER_SIZE = 35
export const MAP_ZOOM = 13
export const INFO_WINDOW_OFFSET_Y = -60

// I have better idea to always render the center based on the average of all races marker
// also we can customize the zoom level too based on the distance between markers.
export const MAP_DEFAULT_CENTER = {
  lat: 48.137154,
  lng: 11.576124,
}

export const MAP_DEFAULT_OPTIONS = {
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
}

export const MAP_CONTAINER_STYLE = {
  width: '100%',
  height: '560px',
}

export const MAP_MARKER_ICON_URL = 'https://maps.google.com/mapfiles/kml/shapes/airports.png'
