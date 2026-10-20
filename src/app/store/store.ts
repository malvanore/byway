import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { categoriesReducer } from '@/entities/Category'

const rootReducer = combineReducers({
  categories: categoriesReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const makeStore = (preloadedState?: Partial<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  })

export const store = makeStore()

export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']
