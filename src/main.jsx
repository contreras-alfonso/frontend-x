import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,Router,RouterProvider } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Login from './components/Login'

const router = createBrowserRouter([
  {
    path:'/',
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        index:true,
        element:<Login></Login>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
