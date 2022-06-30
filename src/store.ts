import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { recipeSearch } from './reducers/recipe-search'

export const getStore = () => {
  const store = configureStore({
    reducer: {
      [recipeSearch.name]: recipeSearch.reducer,
    },
  })

  setupListeners(store.dispatch)

  return store
}

type Store = ReturnType<typeof getStore>

export type RootState = ReturnType<Store['getState']>
export type AppDispatch = Store['dispatch']
