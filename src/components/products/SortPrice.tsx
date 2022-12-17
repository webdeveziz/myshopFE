import { FC, useEffect, useRef, useState, MouseEvent } from 'react'
import { useAppDispatch } from '../../store/createStore'
import { setSortThCr } from '../../store/slices-reducers/sortPrice'
import styles from './Products.module.css'

const SortPrice: FC = () => {
  const dispatch = useAppDispatch()
  const [isToggle, setIsToggle] = useState(false)
  const sortRef = useRef<HTMLDivElement>(null)

  const handleSort = (arr: string[]) => {
    dispatch(setSortThCr(arr))
    setIsToggle((prev) => !prev)
  }

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const _event = event as MouseEvent & {
        path: Node[]
      }
      if (sortRef.current && !_event.path.includes(sortRef.current)) {
        setIsToggle(false)
      }
    }
    // @ts-ignore
    document.body.addEventListener('click', handleClick)

    return () => {
      // @ts-ignore
      document.body.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <div className={styles.sort}>
      <div
        className={styles.sortOption + ' ' + (!isToggle ? styles.no : '')}
        ref={sortRef}
      >
        <span
          className={styles.sortList + ' ' + (isToggle ? styles.displayN : '')}
          onClick={() => setIsToggle((prev) => !prev)}
        >
          Сортировка товаров (по стоимости)
        </span>
        <div
          className={styles.sortOpt + ' ' + (!isToggle ? styles.displayN : '')}
        >
          <span
            className={styles.sortList}
            onClick={() => handleSort(['price', 'asc'])}
          >
            По возрастанию
          </span>
          <span
            className={styles.sortList}
            onClick={() => handleSort(['price', 'desc'])}
          >
            По убыванию
          </span>
        </div>
      </div>
    </div>
  )
}

export default SortPrice
