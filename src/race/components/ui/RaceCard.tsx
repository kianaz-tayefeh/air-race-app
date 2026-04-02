import { useAtom } from 'jotai'

import { clickedRaceAtom, hoveredRaceAtom } from '@/race/contexts/race.atoms'
import type { RaceType } from '@/race/types/race.types'

type Props = { race: RaceType }

export const RaceCard = (props: Props) => {
  const { race } = props

  const [hoveredRace, setHoveredRace] = useAtom(hoveredRaceAtom)
  const [clickedRace, setClickedRace] = useAtom(clickedRaceAtom)

  const isSelected = clickedRace?.id === race.id
  const isHovered = hoveredRace?.id === race.id

  const classname = isSelected
    ? 'border-black bg-black text-white'
    : isHovered
      ? 'border-gray-300 bg-gray-200 text-gray-900'
      : 'border-gray-200 bg-white text-gray-900'

  return (
    <button
      key={race.id}
      onClick={() => setClickedRace(race)}
      onMouseEnter={() => setHoveredRace(race)}
      onMouseLeave={() => setHoveredRace(null)}
      className={`w-full cursor-pointer rounded-2xl border p-4 text-left shadow-sm transition hover:shadow-md active:scale-[0.98] ${
        classname
      }`}
    >
      <div className='mt-1 text-lg font-semibold'>{race.title}</div>
      <div className='mt-1 text-sm opacity-80'>
        {race.country}, {race.address}
      </div>
      <p className='mt-2 text-sm opacity-90'>{race.description}</p>
    </button>
  )
}
