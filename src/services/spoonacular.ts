import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {
  InlineResponse2006,
  InlineResponse2006Recipes,
} from '../../spoonacular-sdk'

interface RandomRecipes extends InlineResponse2006 {
  recipes: InlineResponse2006Recipes[]
}

export const spoonacularApi = createApi({
  reducerPath: 'spoonacularApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getRandomRecipes: builder.query<
      RandomRecipes,
      { tag: string; page: number }
    >({
      query: ({ tag, page }) => `getRandomRecipe?tag=${tag}&page=${page}`,
    }),
  }),
})

export const { useGetRandomRecipesQuery } = spoonacularApi
