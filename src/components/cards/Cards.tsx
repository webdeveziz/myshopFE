import _ from 'lodash'
import Card from './card/Card'
import Pagination from '../paginator/Pagination'
import Payloader from '../payloader/Payloader'
import s from './Cards.module.css'
import { FC, useEffect } from 'react'
import { getsearchSel } from '../../store/slices-reducers/search'
import { getSortSel } from '../../store/slices-reducers/sortPrice'
import { paginate } from '../../utils/paginate'
import { useDispatch, useSelector } from 'react-redux'
import {
  getCurrentPageSel,
  setCurrentPageThCr,
} from '../../store/slices-reducers/pagination'
import {
  getProductsSel,
  setProductsThCr,
} from '../../store/slices-reducers/products'
import { useAppDispatch } from '../../store/createStore'

const Cards: FC = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setProductsThCr())
  }, [])

  const products = useSelector(getProductsSel())
  const currentPage = useSelector(getCurrentPageSel())

  const sortBy = useSelector(getSortSel())

  const searchElem = useSelector(getsearchSel())

  const handleChangePage = (page: any) => {
    dispatch(setCurrentPageThCr(page))
  }

  const pageSize = 10
  // @ts-ignore
  const sortProducts = _.orderBy(products, [sortBy.iter], [sortBy.order])

  const searchElems = sortProducts.filter((product: any) => {
    if (product.title.toLowerCase().includes(searchElem.toLowerCase()))
      return true
    else return false
  })

  const productsCrop = paginate(searchElems, currentPage, pageSize)
  // console.log("Эта компонента Cards");

  return (
    <>
      {productsCrop.length > 0 ? (
        <>
          <div className={s.cards}>
            {productsCrop.map((card) => {
              return <Card key={card.id} {...card} />
            })}
          </div>
          <Pagination
            itemsCount={products.length}
            pageSize={pageSize}
            onChangePage={handleChangePage}
            currentPage={currentPage}
          />
        </>
      ) : (
        <Payloader />
      )}
    </>
  )
}

export default Cards
