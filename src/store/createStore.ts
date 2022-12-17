import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productsReducer from './slices-reducers/products'
import categoriesReducer from './slices-reducers/categories'
import searchReducer from './slices-reducers/search'
import cartReducer from './slices-reducers/cart'
import sortReducer from './slices-reducers/sortPrice'
import paginationReducer from './slices-reducers/pagination'
import favoriteReducer from './slices-reducers/favorite'
import productReducer from './slices-reducers/product'
import { useDispatch } from 'react-redux'

type Rating = {
  rate: number
  count: number
}

export interface ProductTypes {
  id: number | string
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

export enum Status {
  LADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  search: searchReducer,
  cart: cartReducer,
  sort: sortReducer,
  pagination: paginationReducer,
  favorite: favoriteReducer,
  product: productReducer,
})

function createStore() {
  return configureStore({ reducer: rootReducer })
}

export type RootStateTypes = ReturnType<typeof rootReducer>

const store = createStore()

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default createStore
