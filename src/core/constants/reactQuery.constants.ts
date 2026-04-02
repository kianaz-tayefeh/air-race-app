// import { handleClientExceptions } from '@/utils/exception/clientExceptions.helper'
import { QueryClient } from '@tanstack/react-query'

// I dont want to spend more time on it, but we need a centralized object for handling query keys
export const QUERY_KEYS = {
  races: {
    list: 'races list',
  },
}

// We need to move this and above constant to a more global scope in project
export const QUERY_CLIENT = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: true,
      staleTime: 600000,
    },
    mutations: {
      // onError: error => handleClientExceptions(error, 'mutation'),
    },
  },
})
