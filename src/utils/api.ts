import type { SearchOptions } from '../lib/spoonacular'
import mapValues from 'lodash/mapValues'
import type {
  GetRandomRecipes200Response,
  SearchRecipes200Response,
} from 'spoonacular-js-sdk'

export async function get<T = any>(path: string): Promise<T> {
  const res = await fetch(path)
  if (!res.ok) {
    const contentType = res.headers.get('content-type')
    if (contentType && contentType.includes('application/json')) {
      const err = await res.json()
      if (err.isOverLimit) {
        throw new Error('over limit')
      }
    }
    throw new Error(res.statusText)
  }
  return await res.json()
}

export function searchRecipes(options: SearchOptions) {
  const urlParams = new URLSearchParams(
    mapValues(options, (value) => String(value))
  )
  return get<SearchRecipes200Response>(
    `/api/searchRecipes?${urlParams.toString()}`
  )
}

export function getRandomRecipes(tag: string) {
  const urlParams = new URLSearchParams({ tag })
  return get<GetRandomRecipes200Response>(
    `/api/getRandomRecipes?${urlParams.toString()}`
  )
}
