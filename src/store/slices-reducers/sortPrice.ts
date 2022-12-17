import { createSlice } from '@reduxjs/toolkit'
import { RootStateTypes } from '../createStore'

type SortOrder = {
  iter: string
  order: string
}

interface SortSliceTypes {
  entities: SortOrder
  isLoading: boolean
}

const initialState: SortSliceTypes = {
  entities: { iter: 'price', order: 'asc' },
  isLoading: true,
}

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    set(state, action) {
      state.entities = { iter: action.payload[0], order: action.payload[1] }
      state.isLoading = false
    },
  },
})

const {
  actions: { set },
  reducer: sortReducer,
} = sortSlice

// thunk creators
export const setSortThCr = (arr: string[]) => (dispatch: any) => {
  console.log('arr', arr)
  dispatch(set(arr))
}

// selectors
export const getSortSel = () => (state: RootStateTypes) => state.sort.entities

export default sortReducer
