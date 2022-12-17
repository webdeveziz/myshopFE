import Cards from '../cards/Cards'
import SortPrice from './SortPrice'
import styles from './Products.module.css'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const Products: FC = () => {
  return (
    <>
      <div className={styles.main}>
        <Outlet />
        <SortPrice />
        <Cards />
      </div>
    </>
  )
}

export default Products
