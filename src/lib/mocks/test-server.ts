import { setupServer } from 'msw/lib/node'
import { successRandomRecipe, successSearchRecipe } from './handlers'

export const defaultServer = setupServer(
  successRandomRecipe,
  successSearchRecipe
)
