import * as SpoonacularApi from 'spoonacular-js-sdk'

const defaultClient = SpoonacularApi.ApiClient.instance
const apiKeyScheme = defaultClient.authentications['apiKeyScheme']
apiKeyScheme.apiKey = process.env.SPOONACULAR_API_KEY

export const recipeApi = new SpoonacularApi.RecipesApi()

export type SearchOptions = Partial<
  Parameters<typeof recipeApi.searchRecipes>[0]
>
