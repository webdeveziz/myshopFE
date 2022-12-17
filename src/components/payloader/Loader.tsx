import loader from '../../assets/img/payloader.gif';
import styles from './Payloader.module.css';
import { FC } from 'react';

const Loader: FC = () => {
  return (
    <>
      <div className={styles.load}>
        <img src={loader} className={styles.loader} />
      </div>
    </>
  )
}

export default Loader
