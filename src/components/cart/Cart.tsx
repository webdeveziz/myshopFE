import styles from './Cart.module.css'
import { addPlusMinusThCr, Payload } from '../../store/slices-reducers/cart'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootStateTypes, useAppDispatch } from '../../store/createStore'

type CartProductPropsTypes = {
  id: number
  title: string
  image: string
  price: number
  onDelete: (id: number) => void
  count: number
}

const Cart: FC<CartProductPropsTypes> = ({
  id,
  title,
  image,
  price,
  onDelete,
  count,
}) => {
  const dispatch = useAppDispatch()

  const addedSameProduct = useSelector((state: RootStateTypes) =>
    state.cart.entities.find((product) => product.id === id),
  )

  const incDecCountCarts = (payload: Payload) => {
    dispatch(addPlusMinusThCr(payload))
  }

  return (
    <div className={styles.cartRow}>
      <div className={styles.block}>
        <img src={image} />
        <div className={styles.cartSmall}>
          <span className={styles.cartTitle}>{title}</span>
          <span className={styles.cartId}>
            Код товара: <strong>{id}</strong>
          </span>
        </div>
      </div>
      <div className={styles.cartV}>
        <button onClick={() => incDecCountCarts({ id, isInc: false })}>
          -
        </button>
        <span> {addedSameProduct?.count} </span>
        <button onClick={() => incDecCountCarts({ id, isInc: true })}>+</button>
      </div>
      <div className={styles.cartPrice}>
        <span>{(price * count).toFixed(2)} </span>
        <b>$</b>
      </div>
      <button className={styles.delete} onClick={() => onDelete(id)}>
        x
      </button>
    </div>
  )
}

export default Cart
