import styles from './Amount.module.css'
import { FC } from 'react'

type AmountPropsTypes = {
  amount: number
}

const Amount: FC<AmountPropsTypes> = ({ amount }) => {
  const handleAmountd = () => {}

  return (
    <>
      <div className={styles.amount}>
        <span>
          Amount: <span className={styles.count}>{amount}</span>
        </span>
      </div>
    </>
  )
}

export default Amount
