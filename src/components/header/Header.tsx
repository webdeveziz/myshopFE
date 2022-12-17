import facebook from '../../assets/img/facebook.png';
import instagram from '../../assets/img/instagram.png';
import login from '../../assets/img/login.png';
import signup from '../../assets/img/signup.png';
import styles from './Header.module.css';
import telegram from '../../assets/img/telegram.png';
import twitter from '../../assets/img/twitter.png';
import youtube from '../../assets/img/youtube.png';
import { FC } from 'react';
import { Link } from 'react-router-dom';


const Header:FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.contact}>
        <Link to={'/'}>
          <div className={styles.logo}>
            <img src="https://api.freelogodesign.org/assets/thumb/logo/5072150_400.png?t=637946206510000000" />
          </div>
        </Link>
      </div>

      <div className={styles.social}>
        <span>
          <a href="#">
            <img src={telegram} />
          </a>
        </span>
        <span>
          <a href="#">
            <img src={instagram} />
          </a>
        </span>
        <span>
          <a href="#">
            <img src={twitter} />
          </a>
        </span>
        <span>
          <a href="#">
            <img src={youtube} />
          </a>
        </span>
        <span>
          <a href="#">
            <img src={facebook} />
          </a>
        </span>
      </div>

      <div className={styles.log}>
        <Link to="login" className={styles.logItems}>
          <img src={login} />
          <span>Вход </span>
        </Link>

        <Link to="signup" className={styles.logItems}>
          <img src={signup} />
          <span>Регистрация</span>
        </Link>
      </div>
    </div>
  )
}

export default Header
