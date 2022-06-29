import * as SpoonacularApi from '../../spoonacular-sdk'

const defaultClient = SpoonacularApi.ApiClient.instance
const apiKeyScheme = defaultClient.authentications['apiKeyScheme']
apiKeyScheme.apiKey = process.env.SPOONACULAR_API_KEY

export const recipeApi = new SpoonacularApi.RecipesApi()
