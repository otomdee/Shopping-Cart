import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NoMatch from './Components/NoMatch/NoMatch.jsx'
import Homepage from './Components/HomePage/Homepage'
import Shop from './Components/Shop/Shop'
import About from './Components/About/About.jsx'
import Cart from './Components/Cart/Cart'
import NavBar from './Components/NavBar/NavBar.jsx'

function App() {

  return (
    <div>
      < NavBar />
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='shop' element={<Shop />} />
      <Route path='about' element={<About />} />
      <Route path='cart' element={<Cart />} />
      <Route path='*' element={<NoMatch />}></Route>
    </Routes>
    </div>
  )
}

export default App
