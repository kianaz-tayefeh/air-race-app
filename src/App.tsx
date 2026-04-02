import { QueryClientProvider } from '@tanstack/react-query'

import { QUERY_CLIENT } from '@/core/constants/reactQuery.constants'
import { RacePage } from '@/race/components/RacePage'

import './App.css'

function App() {
  return (
    <QueryClientProvider client={QUERY_CLIENT}>
      <RacePage />
    </QueryClientProvider>
  )
}

export default App
