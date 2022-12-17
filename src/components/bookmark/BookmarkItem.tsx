import styles from './Bookmark.module.scss'
import Amount from '../amount/Amount'
import { readMore } from '../../utils/readMore'
import { FC, useState } from 'react'
import { addCardToCartThCr } from '../../store/slices-reducers/cart'
import { useDispatch } from 'react-redux'
import { deleteFavElemThCr } from '../../store/slices-reducers/favorite'
import { ProductTypes, useAppDispatch } from '../../store/createStore'

type BookmarkItemPropsTypes = {
  id: string
  title: string
  image: string
  price: number
  description: string
  rating: any
  category: string
}

const BookmarkItem: FC<BookmarkItemPropsTypes> = ({
  id,
  title,
  image,
  price,
  description,
  rating,
  category,
}) => {
  const [isMore, setIsMore] = useState<boolean>(true)
  const dispatch = useAppDispatch()

  const handleIsMore = () => {
    setIsMore((prevState) => !prevState)
  }

  const handleAddProductCart = () => {
    const product: ProductTypes = {
      id,
      image,
      title,
      price,
      description,
      category,
      rating,
    }
    dispatch(addCardToCartThCr(product))
  }

  const handleDeleteFav = (id: number) => {
    dispatch(deleteFavElemThCr(id))
  }

  return (
    <div className={styles.bookmarkCol}>
      <button
        className={styles.delete}
        onClick={() => handleDeleteFav(Number(id))}
      >
        x
      </button>
      <img src={image} />
      <h3>{title}</h3>
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
      <div className={styles.btn}>
        <button onClick={handleAddProductCart}>
          <span> + </span> Добавить
        </button>
      </div>
      <div className={styles.price}>
        <span className={styles.somePrice}>{price} $</span>
        <Amount {...{ amount: rating.count }} />
      </div>
    </div>
  )
}

export default BookmarkItem
