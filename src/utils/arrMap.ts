/**
 * Create a new array of a certain size and call a map function on it
 */
export function arrMap<T>(length: number, mapFn: () => T) {
  return Array.from(new Array(length)).map(mapFn)
}
