import styles from './Login.module.css'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: 'onBlur' })

  const onSubmit = (data: any) => {
    console.log(data)
    reset()
  }

  return (
    <form className={styles.login} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formGroup}>
        <label htmlFor="h">
          Email:
          <input
            type="text"
            id="h"
            {...register('email', {
              required: 'Поле Email обязательно к заполнению!!',
              minLength: { value: 6, message: 'Мин символов 6' },
              maxLength: { value: 30, message: 'Мах символов 30' },
              pattern: {
                value: /^[A-Za-z]\S+@\S+\.\S+$/g,
                message: 'Пароль или емаил введен неверно!',
              },
            })}
          />
        </label>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="k">
          Password:
          <input
            type="password"
            id="k"
            {...register('password', {
              required: 'Поле Password обязательно к заполнению!!',
              minLength: { value: 8, message: 'Мин символов 8' },
              maxLength: { value: 20, message: 'Мах символов 20' },
            })}
          />
        </label>
      </div>
      <div className={styles.formGroup2}>
        <label htmlFor="l">
          Remember me:
          <input
            type="checkbox"
            id="l"
            {...register('check', { required: false })}
          />
        </label>
      </div>
      {errors?.email && (
        <p className={styles.error}>
          {/* @ts-ignore */}
          {errors?.email?.message || 'Поле Email обязательно к заполнению!'}
        </p>
      )}
      {errors?.password && (
        <p className={styles.error}>
          {/* @ts-ignore */}
          {errors?.password?.message ||
            'Поле Password обязательно к заполнению!'}
        </p>
      )}
      <div className={styles.formBtn}>
        <button disabled={true}>Send</button>
      </div>
    </form>
  )
}

export default Login

// 1 - самая старшая карта из всех 5.
// 2 - пара - 2 одинаковых карт любой масти.
// 3 - две пары - 2 одинаковых карт
// 4 - тройки - три одинаковых карт
// 5 - стрит - по возрастанию. 12345
// 6 - флеш -  одинаковые карты по масти
// 7 - фулл-хаус - 3один. карт + 2 один. карт.
// 8 - карэ - 4 карты одного достойнства.
// 9 - стрит флеш - возрастание карт одной масти.
// 10 - Покер - 4 одинаковых карт + Joker
