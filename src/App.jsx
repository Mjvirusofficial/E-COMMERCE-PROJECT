import React from 'react'
import About from './Pages/About.css/About'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import Service from './Pages/Services/Service'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import Auth from './Auth/Auth'
import Product from './Pages/Product/Product'
import SingleProduct from './Pages/SingleProduct/SingleProduct'
import Cart from './Pages/Cart/Cart'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
    
      <div>
      <ToastContainer position='top-center'/>

      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/auth' element={<Auth/>}/>
            <Route path='/products' element={<Product/>}/>
            <Route path='/products/:name' element={<Product/>}/>
            <Route path='/products/:name/:productId' element={<SingleProduct/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Footer/>
        </div>
    </div>
  )
}

export default App;