import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { categoriesReducer } from '@/entities/Category'
import { coursesReducer } from '@/entities/Course'
import { usersReducer } from '@/entities/User'

const rootReducer = combineReducers({
  categories: categoriesReducer,
  courses: coursesReducer,
  users: usersReducer,
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
