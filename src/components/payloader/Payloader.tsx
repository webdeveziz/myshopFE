import Scleton from '../scleton/Scleton'
import styles from './Payloader.module.css'
import { FC } from 'react'

const Payloader: FC = () => {
  return (
    <>
      <div className={styles.payload}>
        {[...new Array(6)].map((_, index) => {
          return <Scleton key={index} />
        })}
      </div>
    </>
  )
}

export default Payloader
