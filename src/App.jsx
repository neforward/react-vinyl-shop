import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import WhatWeDo from './pages/WhatWeDo.jsx'
import About from './pages/About.jsx'
import Cart from "./pages/Cart.jsx"
import Checkout from "./pages/Checkout.jsx"
import Product from "./pages/Product.jsx"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doing" element={<WhatWeDo />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  )
}

export default App

