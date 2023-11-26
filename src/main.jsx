import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Error from './pages/Error.jsx'
import Menu from './pages/Menu.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/menu',
    element: <Menu/>
  },
  {
    path: '*',
    element: <Error/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
