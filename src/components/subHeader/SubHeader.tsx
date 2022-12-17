import cartIcon from '../../assets/img/cart.png'
import closeIcon from '../../assets/img/close.png'
import debounce from 'lodash.debounce'
import heart from '../../assets/img/bookmark.png'
import search from '../../assets/img/search.png'
import styles from './SubHeader.module.css'
import {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { getCartSel } from '../../store/slices-reducers/cart'
import { getFavoriteSel } from '../../store/slices-reducers/favorite'
import { Link } from 'react-router-dom'
import { setCurrentPageThCr } from '../../store/slices-reducers/pagination'
import { setSearchThCr } from '../../store/slices-reducers/search'
import { useAppDispatch } from '../../store/createStore'
import { useSelector } from 'react-redux'

const SubHeader: FC = () => {
  const [value, setValue] = useState<string>('')
  const dispatch = useAppDispatch()
  const isMount = useRef(false)

  const productsInCart = useSelector(getCartSel())
  const favoriteProducts = useSelector(getFavoriteSel())

  useEffect(() => {
    if (isMount.current) {
      const json = JSON.stringify(productsInCart)
      localStorage.setItem('cart', json)
    }
    isMount.current = true
  }, [productsInCart])

  const totalCount = productsInCart.reduce(
    (acc: number, product: any) => acc + product.count,
    0,
  )
  const inputRef = useRef<HTMLInputElement>(null)

  const debounc = useCallback(
    debounce((valueInput) => {
      dispatch(setSearchThCr(valueInput))
      dispatch(setCurrentPageThCr(1))
    }, 500),
    [],
  )

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    debounc(value)
    setValue(event.target.value)
  }

  const handleClearInput = () => {
    dispatch(setSearchThCr(''))
    setValue('')
    inputRef.current?.focus()
  }

  return (
    <div className={styles.subHeader}>
      <div className={styles.search}>
        <input
          ref={inputRef}
          value={value}
          type="text"
          placeholder="Поиск товара по названию ..."
          onChange={handleChange}
        />
        <img className={styles.searchIcon} src={search} />
        {value && (
          <img
            className={styles.closeIcon}
            src={closeIcon}
            onClick={handleClearInput}
          />
        )}
      </div>

      <div className={styles.bookmark}>
        <div className={styles.bookmarkFav}>
          <span className={styles.bookmarkFavCount}>
            {favoriteProducts?.length}
          </span>
          <Link to="bookmark">
            <img src={heart} alt="Favorite" />
          </Link>
        </div>

        <div className={styles.cartIcon}>
          <span className={styles.cartIconCount}>{totalCount}</span>
          <Link to="cart">
            <img src={cartIcon} alt="Cart icon" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SubHeader
