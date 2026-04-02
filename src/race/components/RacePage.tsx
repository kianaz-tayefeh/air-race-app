import { RaceCards } from '@/race/components/templates/RaceCards'
import { RaceFilters } from '@/race/components/templates/RaceFilters'
import { RaceMap } from '@/race/components/templates/RaceMap'

export const RacePage = () => {
  return (
    <div className='grid grid-cols-1 gap-6 p-4 lg:grid-cols-[380px_1fr]'>
      <div className='rounded-3xl bg-gray-50 p-4 shadow-sm'>
        <h2 className='text font-bold '>International Air Race event</h2>
        <p className='mt-1 text-sm text-gray-600'>
          Click an race in the list or a marker on the map to highlight it.
        </p>
      </div>
      <RaceFilters />
      <RaceCards />
      <RaceMap />
    </div>
  )
}
