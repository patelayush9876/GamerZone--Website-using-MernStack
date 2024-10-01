import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/home/Home'
import About from './components/aboutus/Aboutus'
import Contact from './components/contact/Contact'
import User from './components/User/User'
import Products from './components/Products/Products'
import Login from './components/login/Login'
import UserLogin from './components/login/userLogin'
import DataProvider from './components/Context/Context'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "Contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

//OR USE THE ABOVE METHOD ...Below one is more prefered
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='' element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='user/:userId' element={<User />} />
      <Route path='Products' element={<Products/>} />
      <Route path='Login' element={<Login/>} />
      <Route path='UserLogin' element={<UserLogin/>} />

    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </StrictMode>,
)
