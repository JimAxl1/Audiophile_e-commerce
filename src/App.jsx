import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'
import Header from "./components/Header";
import Home from "./pages/Home";
import Product from './pages/Product'
import Checkout from "./pages/Checkout";
import Category from "./pages/Category/Category";
import data from './data.json'

function App() {
  let x = localStorage.getItem("cart");
  let y;
  if (x === null){
    y = []
  } else{
    y = JSON.parse(localStorage.getItem("cart"))
  }
  const [cart, setCart] = useState(y)

  const updateCart = (item) => {
    let y = false
    let newCart = cart.map((product) => {
      if (item.id === product.id){
        y = true
        product.quantity = product.quantity + item.quantity
      }
      return product
    })

    if (y === false){
      setCart([...cart, item])
    }else{
      setCart(newCart)
    }
    alert(`${item.product} added to cart`)
  }

  const updateQuantity = (quantity, id) => {
    let x;
    if (quantity === 0){
      x = cart.filter((item) => {
        return item.id !== id
      })
    }else{
      x = cart.map((item) => {
        if (item.id === id){
          item.quantity = quantity;
        }
        return item
      })
    }
    setCart(x)
  }

  const removeAll = () => {
    setCart([])
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header cart={cart} removeAll={() => removeAll()} updateCart={(x, y) => updateQuantity(x, y)} />}>
          <Route index element={<Home />} />
          <Route path="checkout" element={<Checkout cart={cart} deleteItems={() => removeAll()}/>} />
          <Route path="headphones" element={<Category data={data} category='headphones' />} />
          <Route path="speakers" element={<Category data={data} category='speakers' />} />
          <Route path="earphones" element={<Category data={data} category='earphones' />} />
          {data.map((item) => {
            return <Route path={item.slug} key={item.id} element={<Product data={item} handleFunction={(x) => updateCart(x)}/>} />
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;