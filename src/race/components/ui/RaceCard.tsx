import { useAtom } from 'jotai'

import { clickedRaceAtom, hoveredRaceAtom } from '@/race/contexts/race.atoms'
import { type RaceType } from '@/race/types/race.types'

type Props = { race: RaceType }

export const RaceCard = (props: Props) => {
  const { race } = props

  const [hoveredRace, setHoveredRace] = useAtom(hoveredRaceAtom)
  const [clickedRace, setClickedRace] = useAtom(clickedRaceAtom)

  const isSelected = clickedRace?.id === race.id
  const isHovered = hoveredRace?.id === race.id

  const isActive = isSelected || isHovered

  return (
    <button
      key={race.id}
      onClick={() => setClickedRace(race)}
      onMouseEnter={() => setHoveredRace(race)}
      onMouseLeave={() => setHoveredRace(null)}
      style={isActive ? { backgroundColor: 'black', color: 'white' } : undefined}
      className={`w-full rounded-2xl border p-4 text-left transition-all duration-200 shadow-sm hover:shadow-md ${
        isActive ? 'border-black bg-black text-white' : 'border-gray-200 bg-white text-gray-900'
      }`}
    >
      <div className={`mt-1 text-lg ${isActive ? 'font-bold' : 'font-semibold'}`}>{race.title}</div>
      <div className='mt-1 text-sm opacity-80'>
        {race.country}, {race.address}
      </div>
      <p className='mt-2 text-sm opacity-90'>{race.description}</p>
    </button>
  )
}
