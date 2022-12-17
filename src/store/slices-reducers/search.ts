import { createSlice } from '@reduxjs/toolkit'
import { RootStateTypes } from '../createStore'

interface SearchSliceTypes {
  entities: string
  isLoading: boolean
}

const initialState: SearchSliceTypes = { entities: '', isLoading: true }

const searchSlice = createSlice({
  name: 'search',
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
  reducer: searchReducer,
} = searchSlice

export const setSearchThCr = (str: string) => (dispatch: any) => {
  dispatch(set(str))
}

export const getsearchSel = () => (state: RootStateTypes) =>
  state.search.entities

export default searchReducer
