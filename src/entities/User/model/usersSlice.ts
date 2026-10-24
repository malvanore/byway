import { createSlice } from '@reduxjs/toolkit'

import type { User } from '../types'
import { USERS_MOCK } from './mock'

interface UserState {
  list: User[]
}

const initialState: UserState = {
  list: USERS_MOCK,
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  selectors: {
    selectUsers: (state) => state.list,
    selectUserById: (state, id: User['id']) => state.list.find((user) => user.id === id),
  },
})

export const usersReducer = usersSlice.reducer
export const { selectUsers, selectUserById } = usersSlice.selectors
