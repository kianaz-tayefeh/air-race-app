export const DataNotFound = () => {
  return (
    <div className='flex h-full flex-col items-center justify-center gap-4 rounded border border-gray-300 bg-white p-6 shadow'>
      <h2 className='text-2xl font-semibold text-gray-800'>No data found</h2>
      <p className='text-gray-600'>Try adjusting your filters or check back later.</p>
    </div>
  )
}
