import BookmarkItem from './BookmarkItem'
import styles from './Bookmark.module.scss'
import valentine from '../../assets/img/valentine.png'
import { FC, memo } from 'react'
import { getFavoriteSel } from '../../store/slices-reducers/favorite'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useWhyDidYouUpdate } from 'use-why-did-you-update'

const Bookmark: FC = memo(() => {
  const favoriteProducts = useSelector(getFavoriteSel())
  useWhyDidYouUpdate('Bookmark', favoriteProducts)

  return (
    <div className={styles.root}>
      <div className={styles.subRoot}>
        <div className={styles.leftBlock}>
          <h1>Любимый продукт </h1>
          <div className={styles.fav}>
            <span>
              Любимый продукт — это выбранный вами товар, который будет доступен
              со скидкой 20% в течение недели.
            </span>
            <Link to="/products">За покупками</Link>
          </div>
          <h3>Как получать скидку 20%?</h3>
        </div>
        <div className={styles.rightBlock}>
          <img src={valentine} alt="favorite" />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.bookmarkRow}>
          {favoriteProducts.map((item: any) => {
            return <BookmarkItem key={item.id} {...item} />
          })}
        </div>
      </div>
      <footer></footer>
    </div>
  )
})

export default Bookmark
