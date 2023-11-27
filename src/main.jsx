import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Error from './pages/Error.jsx'
import Menu from './pages/Menu.jsx'
import Restaurants from './pages/Restaurants.jsx'
import Gallery from './pages/Gallery.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    
    path: '/',
    element: <App/>,
    children: [
      {path: '/', element: <Home/> },
      {path: '/menu', element: <Menu/>},
      {path: '/restaurants', element: <Restaurants/>},
      {path: '/gallery', element: <Gallery/>},
    ]
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
