import { rest } from 'msw'
import { getRandomRecipe } from '../../../mock-data'
import { arrMap } from '../../utils/arrMap'

export const successRandomRecipe = rest.get(
  '/api/getRandomRecipe',
  (_, res, ctx) => {
    return res(
      ctx.json({
        recipes: arrMap(6, getRandomRecipe),
      })
    )
  }
)

export const successRandomRecipeNoImage = rest.get(
  '/api/getRandomRecipe',
  (_, res, ctx) => {
    return res(
      ctx.delay(1000),
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
  '/api/getRandomRecipe',
  (_, res, ctx) => {
    return res(
      ctx.delay(1500),
      ctx.status(500),
      ctx.json({ message: 'there was an error' })
    )
  }
)

export const handlers = [successRandomRecipeNoImage]
