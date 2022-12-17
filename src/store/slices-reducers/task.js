import { createAction, createReducer, createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'Task 1', completed: false },
  { id: '2', title: 'Task 2', completed: false },
  { id: '11', title: 'Task 11', completed: false },
  { id: '22', title: 'Task 22', completed: true },
]

const taskSlice = createSlice({
  name: 'Task',
  initialState,
  reducers: {
    updated(state, action) {
      const findIndex = state.findIndex((el) => el.id === action.payload.id)
      state[findIndex] = {
        ...state[findIndex],
        ...action.payload,
      }
    },
    deleted(state, action) {
      state = state.filter((el) => el.id !== action.payload.id)
      return state
    },
  },
})

const {actions, reducer: taskReducer} = taskSlice
const { updated, deleted } = actions

export const taskCompletedAC = (id) => {
  return updated({ id, completed: true })
}

export const titleChangeAC = (id, title) => {
  return updated({ id, title })
}

export const taskDeletedAC = (id) => {
  return deleted({ id })
}

export default taskReducer
