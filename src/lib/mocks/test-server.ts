import { setupServer } from 'msw/lib/node'
import { successRandomRecipe } from './handlers'

export const defaultServer = setupServer(successRandomRecipe)
