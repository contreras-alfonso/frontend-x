import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,Router,RouterProvider } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Login'
import Register from './pages/Register'
import ResetPassword from './pages/ResetPassword'
import ConfirmarUsuario from './pages/ConfirmarUsuario'
import ActualizarPassword from './pages/ActualizarPassword'
import Home from './pages/Home'
import PrivateLayout from './layouts/PrivateLayout'
import Server from './pages/Server'

const router = createBrowserRouter([
  {
    path:'/',
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        index:true,
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'reset-password',
        element:<ResetPassword></ResetPassword>
      },
      {
        path:'confirmar-cuenta/:token',
        element:<ConfirmarUsuario></ConfirmarUsuario>
      },
      {
        path:'actualizar-password/:token',
        element:<ActualizarPassword></ActualizarPassword>
      },
    ]
  },
  {
    path:'/home',
    element: <PrivateLayout></PrivateLayout>,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
    ]
  },
  {
    path:'/server',
    element: <Server></Server>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
