import styles from './MainMenu.module.css'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const MainMenu: FC = () => {
  return (
    <div className={styles.mainMenu}>
      <div className={styles.menuTitle}>Меню сайта</div>

      <div className={styles.menu}>
        <div className={styles.item}>
          <Link to="products">Home</Link>
        </div>
        <div className={styles.item}>
          <Link to="products">Products</Link>
        </div>
        <div className={styles.item}>
          <Link to="us">About Us</Link>
        </div>
        <div className={styles.item}>
          <Link to="contacts">Contacts</Link>
        </div>
        <div className={styles.item}>
          <Link to="bookmark">Favorite</Link>
        </div>
      </div>
    </div>
  )
}

export default MainMenu
