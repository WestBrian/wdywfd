import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { spoonacularApi } from './services/spoonacular'
import { recipeSearch } from './reducers/recipe-search'

export const setupStore = () => {
  const store = configureStore({
    reducer: {
      [spoonacularApi.reducerPath]: spoonacularApi.reducer,
      [recipeSearch.name]: recipeSearch.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(spoonacularApi.middleware),
  })

  setupListeners(store.dispatch)

  return store
}

type Store = ReturnType<typeof setupStore>

export type RootState = ReturnType<Store['getState']>
export type AppDispatch = Store['dispatch']

// export const store = configureStore({
//   reducer: {
//     [spoonacularApi.reducerPath]: spoonacularApi.reducer,
//     [recipeSearch.name]: recipeSearch.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(spoonacularApi.middleware),
// })

// setupListeners(store.dispatch)

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
