import { createSlice } from '@reduxjs/toolkit'
import productsService from '../../services/products.service'
import { ProductTypes, RootStateTypes } from '../createStore'

interface ProductsSliceTypes {
  entities: ProductTypes[]
  isLoading: boolean
  error: object | undefined | null
}

const initialState: ProductsSliceTypes = {
  entities: [],
  isLoading: true,
  error: null,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    set(state, action) {
      state.entities = action.payload
      state.isLoading = false
    },
    selectCategory(state, action) {
      state.entities = action.payload
    },
  },
})

const {
  actions: { set, selectCategory },
  reducer: productsReducer,
} = productsSlice

export const setProductsThCr = () => async (dispatch: any) => {
  try {
    const data = await productsService.fetch()
    dispatch(set(data))
  } catch (error) {
    console.log(error)
  }
}

export const selectCategoryProducts =
  (catName: string) => async (dispatch: any) => {
    try {
      const data = await productsService.getProductsByCat(catName)
      dispatch(selectCategory(data))
    } catch (error) {
      console.log(error)
    }
  }

export const getProductsSel = () => (state: RootStateTypes) =>
  state.products.entities

export default productsReducer
