import AppRoute from './AppRoute'
import Loadable from 'react-loadable'
import { FC, lazy, Suspense } from 'react'
import { Loader, Login, Product, Products, SignUp } from './components'
import { Route, Routes } from 'react-router-dom'
import './App.css'

const Carts = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'Carts' */ './components/cart/Carts'),
  loading: Loader,
})

const AboutUs = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'AboutUs' */ './components/aboutUs/AboutUs'),
  loading: Loader,
})

const Bookmark = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'Bookmark' */ './components/bookmark/Bookmark'),
  loading: Loader,
})

const NotFound = lazy(() =>
  import(
    /* webpackChunkName: 'NotFound' */ './components/notFaund/NotFound'
  ).then((expr) => ({
    default: expr.NotFound,
  })),
)

const Contacts = lazy(
  () =>
    import(/* webpackChunkName: 'Contacts' */ './components/contacts/Contacts'),
)

const App: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<AppRoute />}>
          <Route path="/" element={<Products />} />
          <Route path="products/*" element={<Products />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="us" element={<AboutUs />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="cart" element={<Carts />} />
          <Route path="bookmark" element={<Bookmark />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
