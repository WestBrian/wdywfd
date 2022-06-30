import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import {
  InlineResponse2006,
  InlineResponse2006Recipes,
} from '../../spoonacular-sdk'
import keyBy from 'lodash/keyBy'
import mapValues from 'lodash/mapValues'
import { RootState } from '../store'

const tags = [
  'all',
  'beef',
  'chicken',
  'turkey',
  'vegetarian',
  'fish',
  'pasta',
  'dessert',
  'asian',
  'mexican',
] as const

interface RandomRecipes extends InlineResponse2006 {
  recipes: InlineResponse2006Recipes[]
}

type RecipeTag = typeof tags[number]

interface RecipeSearch {
  query: string
  selectedTag: RecipeTag
  lastSelectedTag: RecipeTag
  tags: typeof tags
  randomRecipes: { [x: string]: InlineResponse2006Recipes[] }
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

export const fetchRandomRecipes = createAsyncThunk<RandomRecipes, RecipeTag>(
  'recipes/random',
  async (tag, thunkApi) => {
    try {
      const response = await fetch(`/api/getRandomRecipe?tag=${tag}`)
      if (response.ok) {
        return response.json()
      }
      throw new Error(response.statusText)
    } catch (err) {
      return thunkApi.rejectWithValue(err.message)
    }
  },
  {
    condition: (tag, { getState }) => {
      const state = getState() as RootState
      const lastSelectedTag = state.recipeSearch.lastSelectedTag
      const isLoading = state.recipeSearch.loading === 'pending'

      /* istanbul ignore next */
      if (isLoading && lastSelectedTag === tag) {
        return false
      }
    },
  }
)

const initialState: RecipeSearch = {
  query: '',
  selectedTag: 'all',
  lastSelectedTag: 'all',
  tags,
  randomRecipes: mapValues(keyBy([...tags]), () => []),
  loading: 'idle',
}

export const recipeSearch = createSlice({
  name: 'recipeSearch',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload
    },
    setTag: (state, action: PayloadAction<RecipeTag>) => {
      const oldTag = state.selectedTag
      state.selectedTag = action.payload
      state.lastSelectedTag = oldTag
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRandomRecipes.pending, (state) => {
      state.loading = 'pending'
    }),
      builder.addCase(fetchRandomRecipes.fulfilled, (state, action) => {
        const tag = action.meta.arg
        state.randomRecipes[tag] = [
          ...state.randomRecipes[tag],
          ...action.payload.recipes,
        ]
        state.loading = 'succeeded'
      }),
      builder.addCase(fetchRandomRecipes.rejected, (state) => {
        state.loading = 'failed'
      })
  },
})

export const { setQuery, setTag } = recipeSearch.actions
