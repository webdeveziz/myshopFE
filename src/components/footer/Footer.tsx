import styles from './Footer.module.scss'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__item}>
        <Link to={'/products'}>Products</Link>
      </div>
      <div className={styles.footer__item}>
        Shop written by Eziz Kurbannazarov
      </div>
      <div className={styles.footer__item}>
        <a href="#">+7 000 000-00-00</a>
      </div>
    </div>
  )
}

export default Footer
