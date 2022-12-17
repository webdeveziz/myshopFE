import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import SubHeader from './components/subHeader/SubHeader'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const AppRoute: FC = () => {
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default AppRoute
