import styles from './SignUp.module.css'
import { FC } from 'react'

const SignUp: FC = () => {
  return (
    <form className={styles.signup}>
      <div className={styles.formGroup}>
        <label htmlFor="w">
          Name:
          <input type="text" id="w" />
        </label>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="h">
          Email:
          <input type="text" id="h" />
        </label>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="k">
          Password:
          <input type="password" id="k" />
        </label>
      </div>
      <div className={styles.formGroup2}>
        <label htmlFor="l">
          Remember me:
          <input type="checkbox" id="l" />
        </label>
      </div>
      <div className={styles.formBtn}>
        <button>Send</button>
      </div>
    </form>
  )
}

export default SignUp
