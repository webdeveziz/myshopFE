import { createSlice } from '@reduxjs/toolkit'
import { ProductTypes, RootStateTypes } from '../createStore'

interface FavSliceTypes {
  entities: ProductTypes[]
  isLoading: boolean
}
const initialState: FavSliceTypes = {
  entities: [],
  isLoading: true,
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    add(state, action) {
      const tempArr: ProductTypes[] = []
      const newState = [...state.entities, action.payload]
      for (let i = 0; i < newState.length; i++) {
        const product = newState[i]
        if (tempArr.some((prod) => prod.id === product.id)) {
          continue
        } else {
          tempArr.push(product)
        }
      }
      state.entities = tempArr
      console.log('r', state.entities)
    },
    deleted(state, action) {
      state.entities = state.entities.filter(
        (prod) => prod.id !== action.payload,
      )
    },
  },
})

const {
  actions: { add, deleted },
  reducer: favoriteReducer,
} = favoriteSlice

// thunk creators
export const addFavoriteElemThCr =
  (product: ProductTypes) => (dispatch: any) => {
    dispatch(add(product))
  }

export const deleteFavElemThCr = (id: number) => (dispatch: any) => {
  dispatch(deleted(id))
}

// selectors
export const getFavoriteSel = () => (state: RootStateTypes) =>
  state.favorite.entities

export default favoriteReducer
