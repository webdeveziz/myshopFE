import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootStateTypes } from '../createStore'

interface CartSliceTypes {
  entities: string[]
  isLoading: boolean
  error: object | undefined | null
}

export const catAsyncThunk = createAsyncThunk(
  'categories/catAsyncThunk',
  async function (_, { dispatch, rejectWithValue }) {
    try {
      const response = await axios.get(
        'https://fakestoreapi.com/products/categories',
      )

      if (response.data.length <= 0) {
        throw new Error('Ошибка! Сервер не отвечает!')
      }

      dispatch(set(response.data))

      return response.data
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  },
)

const initialState: CartSliceTypes = {
  entities: [],
  isLoading: true,
  error: null,
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    set(state, action) {
      state.entities = action.payload
      state.isLoading = false
    },
  },
  extraReducers: (builder) => {
    builder.addCase(catAsyncThunk.pending, (state, action) => {
      state.isLoading = false
    })
    builder.addCase(catAsyncThunk.fulfilled, (state, action) => {
      state.isLoading = false
    })
    builder.addCase(catAsyncThunk.rejected, (state, action) => {
      state.isLoading = true
    })
  },
})

const {
  actions: { set },
  reducer: categoriesReducer,
} = categoriesSlice

export const getCategoriesSel = () => (state: RootStateTypes) =>
  state.categories.entities

export default categoriesReducer
