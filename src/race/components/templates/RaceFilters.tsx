import { type ChangeEvent, useEffect, useState } from 'react'
import { useAtom } from 'jotai'

import { DEFAULT_DEBOUNCE_TIME } from '@/core/constants/debounce.constants'
import { RACE_DEFAULT_FILTERS, racesFiltersAtom } from '@/race/contexts/race.atoms'
import type { RaceCategoryFilterType } from '@/race/types/race.types'

export const RaceFilters = () => {
  const [raceFilters, setRaceFilters] = useAtom(racesFiltersAtom)

  const [query, setQuery] = useState(raceFilters.query ?? '')

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as RaceCategoryFilterType

    setRaceFilters(prev => ({
      ...prev,
      category: value,
    }))
  }

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRaceFilters(prev => ({
        ...prev,
        query,
      }))
    }, DEFAULT_DEBOUNCE_TIME)

    return () => clearTimeout(timeout)
  }, [query, setRaceFilters])

  const handleReset = () => {
    setRaceFilters(RACE_DEFAULT_FILTERS)
    setQuery('')
  }

  return (
    <div className='flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm md:flex-row md:items-end'>
      <div className='flex flex-col gap-1.5'>
        <label htmlFor='category' className='text-sm font-medium text-gray-700'>
          Category
        </label>
        <select
          id='category'
          value={raceFilters.category ?? ''}
          onChange={handleCategoryChange}
          className='rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
        >
          <option value=''>All categories</option>
          <option value='A'>Category A</option>
          <option value='B'>Category B</option>
        </select>
      </div>

      <div className='flex flex-1 flex-col gap-1.5'>
        <label htmlFor='title' className='text-sm font-medium text-gray-700'>
          Search by title or description
        </label>
        <input
          id='title'
          type='text'
          value={query}
          onChange={handleQueryChange}
          placeholder='Search title and description'
          className='w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
        />
      </div>
      <button
        onClick={handleReset}
        className='self-start rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:border-gray-400 md:self-auto'
      >
        Reset
      </button>
    </div>
  )
}
