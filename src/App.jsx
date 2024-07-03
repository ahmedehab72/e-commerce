// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Carts from './components/Carts/Carts'
import Categories from './components/Categories/Categories'
import Products from './components/Products/Products'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import NotFound from './components/NotFound/NotFound'
import CounterContextProvider from './Context/CounterContext'
import Brands from './components/Brands/Brands'
import UserContextProvider from './Context/UserContext'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import ProductDetails from './components/ProductDetails/ProductDetails'
import {  QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import CartContextProvider from './Context/CartContext'
import { Toaster } from 'react-hot-toast'
import UserAdress from './components/UserAdress/UserAdress'
import BrandDetails from './components/BrandDetails/BrandDetails'
import CategoriesDetails from './components/CategoriesDetails/CategoriesDetails'

function App() {
  let query =new QueryClient();


 let router = createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<ProtectedRoute><Home/></ProtectedRoute>},
    {path:'carts',element:<ProtectedRoute><Carts/></ProtectedRoute>},
    {path:'brands',element:<ProtectedRoute><Brands/></ProtectedRoute>},
    {path:'branddetails/:id',element:<ProtectedRoute><BrandDetails/></ProtectedRoute>},
    {path:'categories',element:<ProtectedRoute><Categories/></ProtectedRoute>},
    {path:'categoriesdetails/:id/:category' , element:<ProtectedRoute><CategoriesDetails /></ProtectedRoute>},
    {path:'products',element:<ProtectedRoute><Products/></ProtectedRoute>},
    {path:'productdetails/:id/:category',element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
    {path:'address',element:<ProtectedRoute><UserAdress/></ProtectedRoute>},
    {path:'register',element:<Register/>},
    {path:'login',element:<Login/>},
    {path:'*',element:<NotFound/>},
  ]}
 ])
  
  return <CartContextProvider>
               <QueryClientProvider client={query}>
                  <UserContextProvider>
                    <CounterContextProvider>
                      <RouterProvider router={router} ></RouterProvider>
                      <Toaster/>
                      <ReactQueryDevtools/>
                    </CounterContextProvider>
                  </UserContextProvider>
                </QueryClientProvider>
           </CartContextProvider>
 
   
}

export default App
