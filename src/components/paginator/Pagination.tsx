import _ from 'lodash'
import styles from './Pagination.module.css'
import { FC } from 'react'

type PaginationPropsTypes = {
  itemsCount: number
  pageSize: number
  currentPage: number
  onChangePage: any
}

const Pagination: FC<PaginationPropsTypes> = ({
  itemsCount,
  pageSize,
  currentPage,
  onChangePage,
}) => {
  const countPages: any =
    Math.ceil(itemsCount / pageSize) <= 1
      ? null
      : Math.ceil(itemsCount / pageSize)

  const pages = _.range(1, countPages + 1)

  return (
    <nav>
      <ul className={styles.pagination}>
        {pages.map((page) => {
          return (
            <li
              className={
                styles.list + ' ' + (currentPage === page && styles.active)
              }
              key={page}
              onClick={() => onChangePage(page)}
            >
              {page}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Pagination
