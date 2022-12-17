import { useEffect } from 'react'
import { useState } from 'react'
import TextField from '../textField/TextField'
import styles from './Login.module.css'

const Login = () => {
  const [data, setData] = useState({ email: '', pass: '', name: '' })
  const [errors, setErrors] = useState({ email: '', pass: '', name: '' })

  useEffect(() => {
    validate()
  }, [data])

  const handleChange = ({ target }) => {
    setData((p) => ({ ...p, [target.name]: target.value }))
  }

  const validate = () => {
    const error = {}
    for (const key in data) {
      if (data[key].trim() === '') {
        error[key] = `${key} обязательно для заполнения!`
      } else if (data[key].trim().length < 3) {
        error[key] = `${key} должен содержать 3 и более букв!`
      }
    }
    setErrors(error)

    return Object.keys(error).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const isValid = validate()
    if (!isValid) return
    console.log('our data:', data)
  }

  return (
    <form className={styles.login} onSubmit={handleSubmit}>
      <TextField
        label="What is your name"
        name="name"
        value={data.name}
        onChange={handleChange}
        error={errors.name}
      />
      <TextField
        label={'Your email'}
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextField
        label="Your password"
        name="pass"
        type="password"
        value={data.pass}
        onChange={handleChange}
        error={errors.pass}
      />
      <button>Send</button>
    </form>
  )
}

export default Login
