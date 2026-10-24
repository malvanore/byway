import { createSlice } from '@reduxjs/toolkit'

import type { Category } from '../types'
import { CATEGORIES_MOCK } from './mock'

interface CategoriesState {
  list: Category[]
}

const initialState: CategoriesState = {
  list: CATEGORIES_MOCK,
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  selectors: {
    selectCategories: (state) => state.list,
    selectCategoryById: (state, id: Category['id']) => state.list.find((category) => category.id === id),
  },
})

export const { selectCategories, selectCategoryById } = categoriesSlice.selectors
export const categoriesReducer = categoriesSlice.reducer
