import Cart from './Cart'
import EmtyCart from './EmptyCart'
import styles from './Cart.module.css'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  clearCartThCr,
  deleteCardFromCartThCr,
  getCartSel,
  getTotalPriceSel,
} from '../../store/slices-reducers/cart'
import { useAppDispatch } from '../../store/createStore'

const Carts: FC = () => {
  const productsInCart = useSelector(getCartSel())
  const totalPrice = useSelector(getTotalPriceSel())
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleDelete = (id: number) => {
    if (window.confirm('Ты действительно хочешь удалить товар?'))
      dispatch(deleteCardFromCartThCr(id))
  }

  const clearCart = () => {
    if (window.confirm('Очистить корзину?')) dispatch(clearCartThCr())
  }

  const onGoBack = () => {
    navigate(-1)
  }

  return (
    <div className={styles.cart}>
      <h3>Cart</h3>
      <button className={styles.productBack} onClick={onGoBack}>
        Вернуться назад
      </button>

      <div className={styles.cartBlocks}>
        <div className={styles.cartCount}>
          {productsInCart.length > 0 ? (
            <>
              {productsInCart.map((item: any) => {
                return <Cart key={item.id} {...item} onDelete={handleDelete} />
              })}
              <button onClick={clearCart} className={styles.clearBtn}>
                Очистить корзину
              </button>
            </>
          ) : (
            <div className={styles.freeCart}>
              <EmtyCart />
            </div>
          )}
        </div>
        <div className={styles.cartBalance}>
          <div className={styles.cartRightBlockItog}>Итого:</div>
          <div className={styles.cartRightBlockSum}>
            <span>{totalPrice.toFixed(2)}</span>
            <b> $</b>
          </div>
          <button className={styles.cartRightBlockBtn}>Оформить заказ</button>
        </div>
      </div>
    </div>
  )
}

export default Carts
