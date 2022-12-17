import { FC } from 'react'
import { Link } from 'react-router-dom'

import imgCart from '../../assets/img/cart.jpg'

const EmtyCart: FC = () => {
  return (
    <>
      <h2>Ваша корзина пуста </h2>
      <Link to="/products">Давайте за покупками </Link>
      <img src={imgCart} alt="Cart" />
    </>
  )
}

export default EmtyCart
