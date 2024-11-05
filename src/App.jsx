import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NoMatch from './Components/NoMatch/NoMatch.jsx'
import Homepage from './Components/HomePage/Homepage'
import Shop from './Components/Shop/Shop.jsx'
import About from './Components/About/About.jsx'
import Cart from './Components/Cart/Cart'
import NavBar from './Components/NavBar/NavBar.jsx'
import CardFull from './Components/CardFull/CardFull.jsx'
import ShopIndex from './Components/ShopIndex/ShopIndex.jsx'

function App() {
  const [cardInfo, setCardInfo] = useState(null);

  function handleCardChange(info) {
    setCardInfo(info);
  }


  return (
    <div>
      < NavBar />
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='shop' element={<Shop />} >
        <Route index element={< ShopIndex handleCardChange={handleCardChange}/>} />
        <Route path='item' element={cardInfo && <CardFull 
                          url={cardInfo.url}
                          desc={cardInfo.desc}
                          title={cardInfo.title}
                          price={cardInfo.price}
                          />}>

        </Route>
      </Route>
      <Route path='about' element={<About />} />
      <Route path='cart' element={<Cart />} />
      <Route path='*' element={<NoMatch />}></Route>
    </Routes>
    </div>
  )
}

export default App
