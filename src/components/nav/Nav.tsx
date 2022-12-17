import adv from '../../assets/img/adv.png'
import MainMenu from '../mainMenu/MainMenu'
import PropTypes from 'prop-types'
import styles from './Nav.module.css'
import { FC, memo, useCallback, useEffect, useState } from 'react'
import { selectCategoryProducts } from '../../store/slices-reducers/products'
import { upperCase } from '../../utils/upperCase'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import {
  catAsyncThunk,
  getCategoriesSel,
} from '../../store/slices-reducers/categories'
import { useAppDispatch } from '../../store/createStore'
import { useWhyDidYouUpdate } from 'use-why-did-you-update'

const Nav: FC = memo(() => {
  const { pathname } = useLocation()

  useWhyDidYouUpdate('Nav', { pathname })

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(catAsyncThunk())
  }, [])

  const [currentCategory, setCurrentCategory] = useState()
  const categories = useSelector(getCategoriesSel())
  const error = useSelector((state: any) => state.categories.error)

  const handleSelectCategory = useCallback((cat: any) => {
    setCurrentCategory(cat)
    dispatch(selectCategoryProducts(cat))
  }, [])

  // console.log('Эта компонента Nav')

  return (
    <div className={styles.nav}>
      <MainMenu />
      <hr />
      {categories && (pathname === '/products' || pathname === '/') ? (
        <div className={styles.cat}>
          <div className={styles.catTitle}>Категории товаров</div>
          <ul className={styles.catList}>
            {categories.map((category: any) => {
              return (
                <li
                  key={category}
                  onClick={() => handleSelectCategory(category)}
                  className={
                    styles.catItem +
                    ' ' +
                    (category === currentCategory ? styles.active : '')
                  }
                >
                  {upperCase(category)}
                </li>
              )
            })}
          </ul>
        </div>
      ) : (
        <div className={styles.adv}>
          <img src={adv} alt="Adv" />
        </div>
      )}
      {error && <h2>{error}</h2>}
    </div>
  )
})

Nav.propTypes = {
  categories: PropTypes.oneOfType([PropTypes.array, PropTypes.any]),
  onSelectCategory: PropTypes.func,
  currentCategory: PropTypes.string,
}

export default Nav
