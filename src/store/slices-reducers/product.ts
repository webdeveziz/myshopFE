import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { ProductTypes, RootStateTypes } from '../createStore'

interface ProductSliceTypes {
  entities: ProductTypes | null
  isLoading: boolean
  error: object | undefined | null
}

export const productAsyncThunk = createAsyncThunk<ProductTypes, any>(
  'product/productAsyncThunk',
  async function (id, { dispatch, rejectWithValue }) {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`,
      )

      dispatch(set(response.data))

      return response.data
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  },
)

const initialState: ProductSliceTypes = {
  entities: null,
  isLoading: true,
  error: null,
}
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    set(state, action) {
      state.entities = action.payload
      state.isLoading = true
    },
  },
  extraReducers: (builder) => {
    builder.addCase(productAsyncThunk.pending, (state, action) => {
      state.isLoading = false
    })
    builder.addCase(productAsyncThunk.fulfilled, (state, action) => {
      state.isLoading = false
    })
    builder.addCase(productAsyncThunk.rejected, (state, action) => {
      state.isLoading = true
    })
  },
})

const {
  actions: { set },
  reducer: productReducer,
} = productSlice

export const getProductSel = () => (state: any) => state.product.entities

export default productReducer
