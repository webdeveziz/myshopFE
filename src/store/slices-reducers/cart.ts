import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductTypes, RootStateTypes, useAppDispatch } from '../createStore'

export type Payload = {
  id: number
  isInc: boolean
}

type CartItemTypes = {
  id: number
  title: string
  image: string
  price: number
  count: number
}

interface CartSliceTypes {
  entities: CartItemTypes[]
  totalPrice: number
  isLoading: boolean
}

// const cardsInCart: CartItemTypes[] | any = localStorage.getItem('cart')

const initialState: CartSliceTypes = {
  entities: [],
  isLoading: true,
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      const product = state.entities.find(
        (product) => product.id === action.payload.id,
      )
      if (product && product.count > 0) {
        product.count += 1
      } else {
        state.entities = [
          ...state.entities,
          {
            ...action.payload,
            count: 1,
          },
        ]
      }
      state.totalPrice = state.entities.reduce(
        (acc, el) => acc + el.price * el.count,
        0,
      )
    },
    addOrRemoveCountCarts(state, action: PayloadAction<Payload>) {
      const product = state.entities.find(
        (product) => product.id === action.payload.id,
      )
      if (product) {
        if (product.count > 0) {
          if (action.payload.isInc) {
            product.count += 1
          } else {
            product.count -= 1
            if (product.count <= 0) {
              state.entities = state.entities.filter(
                (item) => item.id !== action.payload.id,
              )
            }
          }
        }
      }
      state.totalPrice = state.entities.reduce(
        (acc, el) => acc + el.price * el.count,
        0,
      )
    },
    deleted(state, action) {
      state.entities = state.entities.filter(
        (product) => product.id !== action.payload,
      )
      state.totalPrice = state.entities.reduce(
        (acc, el) => acc + el.price * el.count,
        0,
      )
    },
    clear(state) {
      state.entities = []
      state.totalPrice = 0
    },
  },
})

const {
  actions: { add, deleted, addOrRemoveCountCarts, clear },
  reducer: cartReducer,
} = cartSlice

// thunk creators
export const addCardToCartThCr = (product: ProductTypes) => (dispatch: any) => {
  dispatch(add(product))
}

export const addPlusMinusThCr = (obj: Payload) => (dispatch: any) => {
  dispatch(addOrRemoveCountCarts(obj))
}

export const clearCartThCr = () => (dispatch: any) => {
  dispatch(clear())
}

export const deleteCardFromCartThCr = (id: number) => (dispatch: any) => {
  dispatch(deleted(id))
}

// selectors
export const getCartSel = () => (state: RootStateTypes) => state.cart.entities
export const getTotalPriceSel = () => (state: RootStateTypes) =>
  state.cart.totalPrice

export default cartReducer
