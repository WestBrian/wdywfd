import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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

interface TagPages {
  tag: typeof tags[number]
  pages: number
}

interface RecipeSearch {
  query: string
  selectedTag: typeof tags[number]
  tags: typeof tags
  tagPages: TagPages[]
}

const initialState: RecipeSearch = {
  query: '',
  selectedTag: 'all',
  tags,
  tagPages: tags.map((tag) => ({ tag, pages: 1 })),
}

export const recipeSearch = createSlice({
  name: 'recipeSearch',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload
    },
    setTag: (state, action: PayloadAction<typeof tags[number]>) => {
      state.selectedTag = action.payload
    },
    setTagPages: (state, action: PayloadAction<TagPages>) => {
      const index = state.tagPages.findIndex(
        (tagPage) => tagPage.tag === action.payload.tag
      )
      state.tagPages[index].pages = action.payload.pages
    },
  },
})

export const { setQuery, setTag, setTagPages } = recipeSearch.actions
