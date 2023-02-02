import { useContext, lazy, Suspense } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import path from './constants/path'
import { AppContext } from './context/App.context'
import CartLayout from './layouts/CartLayout'
import MainLayout from './layouts/MainLayout'
import RegisterLayout from './layouts/RegisterLayout'
// import Cart from './pages/Cart'
// import Login from './pages/Login'
// import NotFound from './pages/NotFound/NotFound'
// import ProductDetail from './pages/ProductDetail'
// import ProductList from './pages/ProductList'
// import Register from './pages/Register'
import UserLayout from './pages/User/layout/UserLayout'
// import ChangePassword from './pages/User/pages/ChangePassword'
// import HistoryPurchase from './pages/User/pages/HistoryPurchase'
// import Profile from './pages/User/pages/Profile'

const Cart = lazy(() => import('./pages/Cart'))
const Login = lazy(() => import('./pages/Login'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))
const ProductList = lazy(() => import('./pages/ProductList'))
const Register = lazy(() => import('./pages/Register'))
const ChangePassword = lazy(() => import('./pages/User/pages/ChangePassword'))
const HistoryPurchase = lazy(() => import('./pages/User/pages/HistoryPurchase'))
const Profile = lazy(() => import('./pages/User/pages/Profile'))

export default function useRouteElements() {
  const { isAuthenticated } = useContext(AppContext)

  function ProtectedRoute() {
    return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
  }

  function RejectedRoute() {
    return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
  }
  const routeElement = useRoutes([
    {
      path: path.home,
      index: true,
      element: (
        <MainLayout>
          <Suspense>
            <ProductList />
          </Suspense>
        </MainLayout>
      )
    },
    {
      path: path.productDetail,
      element: (
        <MainLayout>
          <Suspense>
            <ProductDetail />
          </Suspense>
        </MainLayout>
      )
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: path.cart,
          element: (
            <CartLayout>
              <Suspense>
                <Cart />
              </Suspense>
            </CartLayout>
          )
        },
        {
          path: path.user,
          element: (
            <MainLayout>
              <UserLayout />
            </MainLayout>
          ),
          children: [
            {
              path: path.profile,
              element: (
                <Suspense>
                  <Profile />
                </Suspense>
              )
            },
            {
              path: path.changePassword,
              element: (
                <Suspense>
                  {' '}
                  <ChangePassword />
                </Suspense>
              )
            },
            {
              path: path.historyPurChase,
              element: (
                <Suspense>
                  <HistoryPurchase />
                </Suspense>
              )
            }
          ]
        }
      ]
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: path.login,
          element: (
            <RegisterLayout>
              <Suspense>
                <Login />
              </Suspense>
            </RegisterLayout>
          )
        },
        {
          path: path.register,
          element: (
            <RegisterLayout>
              <Suspense>
                <Register />
              </Suspense>
            </RegisterLayout>
          )
        }
      ]
    },
    {
      path: '*',
      element: (
        <Suspense>
          <NotFound />
        </Suspense>
      )
    }
  ])
  return routeElement
}
