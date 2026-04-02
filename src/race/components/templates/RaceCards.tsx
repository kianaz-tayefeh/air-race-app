import { Loader } from '@/race/components/ui/Loader'
import { RaceCard } from '@/race/components/ui/RaceCard'
import { useFetchRaces } from '@/race/hooks/race.hooks'
import { DataNotFound } from '@/race/components/ui/DataNotFound'

export const RaceCards = () => {
  const { data: races = [], isFetching: isFetchingRaces, error: fetchRacesError } = useFetchRaces()

  return (
    <div>
      <div className='mb-4'>
        {isFetchingRaces && <Loader />}
        {fetchRacesError && (
          <span className='ml-2 text-xs text-red-500'>{fetchRacesError?.message}</span>
        )}
      </div>

      <div className='space-y-3'>
        {!races.length && !isFetchingRaces && !fetchRacesError && <DataNotFound />}
        {races.map(race => {
          return <RaceCard key={race.id} race={race} />
        })}
      </div>
    </div>
  )
}
