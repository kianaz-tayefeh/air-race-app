export const isString = (variable: unknown): variable is string => typeof variable === 'string'

// We can think more for a better name here, like findInString or ...
export const isInString = (source: string = '', query: string = ''): boolean => {
  // In real world scenario, we should also check if they are both strings
  if (!query || !source || !isString(query) || !isString(source)) {
    return true
  }

  return source.toLowerCase().includes(query.trim().toLowerCase())
}
