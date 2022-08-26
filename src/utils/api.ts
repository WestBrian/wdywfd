import type { SearchOptions } from '../lib/spoonacular'
import mapValues from 'lodash/mapValues'
import type {
  InlineResponse200,
  InlineResponse2006,
  InlineResponse2006Recipes,
  InlineResponse200Results,
} from '../../spoonacular-sdk'

interface SearchRecipesResult extends InlineResponse200 {
  results: InlineResponse200Results[]
}

interface RandomRecipesResult extends InlineResponse2006 {
  recipes: InlineResponse2006Recipes[]
}

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
  return get<SearchRecipesResult>(`/api/searchRecipes?${urlParams.toString()}`)
}

export function getRandomRecipes(tag: string) {
  const urlParams = new URLSearchParams({ tag })
  return get<RandomRecipesResult>(
    `/api/getRandomRecipes?${urlParams.toString()}`
  )
}
