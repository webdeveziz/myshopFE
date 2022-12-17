import { createSlice } from '@reduxjs/toolkit'
import { RootStateTypes } from '../createStore'

interface PaginSliceTypes {
  entities: number
  isLoading: boolean
}

const initialState: PaginSliceTypes = {
  entities: 1,
  isLoading: true,
}

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    set(state, action) {
      state.entities = action.payload
      state.isLoading = false
    },
  },
})

const {
  actions: { set },
  reducer: paginationReducer,
} = paginationSlice

// thunk creators
export const setCurrentPageThCr = (page: number) => (dispatch: any) => {
  dispatch(set(page))
}

// selectors
export const getCurrentPageSel = () => (state: RootStateTypes) =>
  state.pagination.entities

export default paginationReducer
