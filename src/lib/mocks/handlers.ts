import { rest } from 'msw'
import { getRandomRecipe } from '../../../mock-data'
import { arrMap } from '../../utils/arrMap'

export const successRandomRecipe = rest.get(
  '/api/getRandomRecipes',
  (_, res, ctx) => {
    return res(
      ctx.json({
        recipes: arrMap(6, getRandomRecipe),
      })
    )
  }
)

export const successRandomRecipeNoImage = rest.get(
  '/api/getRandomRecipes',
  (_, res, ctx) => {
    return res(
      ctx.json({
        recipes: arrMap(6, getRandomRecipe).map((recipe) => ({
          ...recipe,
          image: undefined,
        })),
      })
    )
  }
)

export const failRandomRecipe = rest.get(
  '/api/getRandomRecipes',
  (_, res, ctx) => {
    return res(
      ctx.delay(250),
      ctx.status(500),
      ctx.json({ message: 'there was an error' })
    )
  }
)

export const successBackendRecipeNoImage = rest.get(
  'https://api.spoonacular.com/recipes/:id/information',
  (_, res, ctx) => {
    const recipe = getRandomRecipe()

    return res(ctx.json({ ...recipe, image: undefined }))
  }
)

export const failBackendRecipeNoImage = rest.get(
  'https://api.spoonacular.com/recipes/:id/information',
  (_, res, ctx) => {
    return res(
      ctx.delay(1500),
      ctx.status(500),
      ctx.json({ message: 'there was an error' })
    )
  }
)

export const successSearchRecipe = rest.get(
  '/api/searchRecipes',
  (_, res, ctx) => {
    return res(
      ctx.json({
        offset: 0,
        number: 6,
        totalResults: 200,
        results: arrMap(6, getRandomRecipe),
      })
    )
  }
)

export const failSearchRecipe = rest.get(
  '/api/searchRecipes',
  (_, res, ctx) => {
    return res(
      ctx.delay(250),
      ctx.status(500),
      ctx.json({ message: 'there was an error' })
    )
  }
)

export const failOverLimitRandomRecipe = rest.get(
  '/api/getRandomRecipes',
  (_, res, ctx) => {
    return res(ctx.delay(250), ctx.status(500), ctx.json({ isOverLimit: true }))
  }
)

export const handlers = [
  successRandomRecipeNoImage,
  successBackendRecipeNoImage,
]
