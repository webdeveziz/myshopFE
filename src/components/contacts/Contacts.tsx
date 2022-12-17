import { FunctionComponent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Contacts.module.css'

const Contacts: FunctionComponent = () => {
  useEffect(() => {
    return function () {
      console.log('Component Umer! ')
    }
  }, [])

  const navigate = useNavigate()

  const navig = () => {
    navigate('/', { replace: true })
  }

  return (
    <div className={styles.contacts}>
      <h1>Our Contacts </h1>
      <button onClick={navig}>Home</button>
      <hr />
      <hr />
      <h2>Как правильно оформить страницу контакты</h2>
      <p>
        Наличие страницы <strong style={{ color: 'red' }}>«Контакты»</strong> —
        один из важных коммерческих факторов ранжирования. Несмотря на это,
        правильное оформление контактной информации часто упускается.
      </p>
      <h2>Расположение</h2>
      <h3>г. Москва</h3>
      <h3>ул. Радио</h3>
      <h3>дом 22</h3>
      <p>
        Ссылка на страницу с контактной информацией должна располагаться на
        видном месте, таким образом, чтобы с любой страницы сайта посетитель мог
        попасть на нее, совершив только один клик. Предпочтительное расположение
        — в главном меню.
      </p>
      <hr />
      <h3>Мы находимся тут</h3>
      <iframe src="https://yandex.ru/maps/-/CCU6b-GZ9A"></iframe>
    </div>
  )
}

export default Contacts
