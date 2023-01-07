import { useContext } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import path from './constants/path'
import { AppContext } from './context/App.context'
import MainLayout from './layouts/MainLayout'
import RegisterLayout from './layouts/RegisterLayout'
import Login from './pages/Login'
import ProductList from './pages/ProductList'
import Profile from './pages/Profile'
import Register from './pages/Register'

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
          <ProductList />
        </MainLayout>
      )
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: path.profile,
          element: (
            <MainLayout>
              <Profile />
            </MainLayout>
          )
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
              <Login />
            </RegisterLayout>
          )
        },
        {
          path: path.register,
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        }
      ]
    }
  ])
  return routeElement
}
