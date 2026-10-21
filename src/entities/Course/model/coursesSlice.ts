import { createSlice } from '@reduxjs/toolkit'

import type { Course } from '../types'
import { COURSES_MOCK } from './mock'

interface CoursesState {
  list: Course[]
}

const initialState: CoursesState = {
  list: COURSES_MOCK,
}

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  selectors: {
    selectCourses: (state) => state.list,
    selectCourseById: (state, id: Course['id']) => state.list.find((course) => course.id === id),
  },
})

export const { selectCourses, selectCourseById } = coursesSlice.selectors
export const coursesReducer = coursesSlice.reducer
