import Amount from '../../amount/Amount'
import heart from '../../../assets/img/heart.png'
import heartFull from '../../../assets/img/heartFull.png'
import Payloader from '../../payloader/Payloader'
import styles from './Card.module.css'
import { addCardToCartThCr } from '../../../store/slices-reducers/cart'
import { cssColor } from '../../../utils/cssUtil'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { readMore } from '../../../utils/readMore'
import { useDispatch, useSelector } from 'react-redux'
import {
  addFavoriteElemThCr,
  deleteFavElemThCr,
} from '../../../store/slices-reducers/favorite'
import {
  ProductTypes,
  RootStateTypes,
  useAppDispatch,
} from '../../../store/createStore'

const Card: FC<ProductTypes> = ({
  image,
  title,
  description,
  price,
  rating,
  id,
  category,
}) => {
  const product: ProductTypes = {
    id,
    image,
    title,
    price,
    description,
    category,
    rating,
  }
  const [isRedHeart, setIsHeart] = useState<boolean>(false)
  const [isMore, setIsMore] = useState(true)
  const dispatch = useAppDispatch()

  const addedSameProduct = useSelector((state: RootStateTypes) =>
    state.cart.entities.find((produc) => produc.id === id),
  )

  const handleIsMore = () => {
    setIsMore((prevState) => !prevState)
  }

  const handleAddProductCart = () => {
    dispatch(addCardToCartThCr(product))
  }

  const handleAddProductToFav = () => {
    dispatch(addFavoriteElemThCr(product))
    setIsHeart((prevFavorite) => !prevFavorite)
  }

  const handleDeleteFav = () => {
    dispatch(deleteFavElemThCr(Number(id)))
    setIsHeart((prevFavorite) => !prevFavorite)
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardLeft}>
        <div className={styles.cardImg}>
          {image ? (
            <Link to={String(id)}>
              <img src={image} />
            </Link>
          ) : (
            <Payloader />
          )}
          <div className={styles.cardRight}>
            <div className={styles.btn}>
              <button onClick={handleAddProductCart}>
                <span> + </span> Добавить{' '}
                {addedSameProduct?.count && (
                  <strong>{addedSameProduct.count}</strong>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className={styles.cardText}>
          <div className={styles.title}>{title}</div>
          <div className={styles.rate}>Rating {cssColor(rating.rate)}/5</div>
          <div className={styles.price}>
            <span className={styles.somePrice}>{price} $</span>
            <img
              onClick={isRedHeart ? handleDeleteFav : handleAddProductToFav}
              src={isRedHeart ? heartFull : heart}
              alt="Favorite"
            />
            <Amount {...{ amount: rating.count }} />
          </div>
          <div className={styles.description}>
            {readMore(description, isMore)}
            {isMore ? (
              <button onClick={handleIsMore} className={styles.readMore}>
                show more
              </button>
            ) : (
              <button onClick={handleIsMore} className={styles.readMore}>
                show less
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
