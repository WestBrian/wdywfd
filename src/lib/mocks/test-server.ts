import { setupServer } from 'msw/node'
import { successRandomRecipe, successSearchRecipe } from './handlers'

export const defaultServer = setupServer(
  successRandomRecipe,
  successSearchRecipe
)
