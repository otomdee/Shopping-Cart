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
  const [cartItems, setCartItems] = useState([]);

  function handleCardChange(info) {
    setCardInfo(info);
  }

  function handleCartChange(idObj) {
    let newItems = [...cartItems];
    //check if item is already in cart
    let includes = false;
    newItems.forEach((item) => {
      if (item.id === idObj.id) {
        includes = true;
        item.quantity += idObj.quantity
      }
    })

    includes ? null : newItems.push(idObj);

    setCartItems(newItems);
  }

  function handleCartDelete(id) {
    let newItems = [...cartItems];

    newItems = newItems.filter((item) => {
      return item.id !== id
    })

    setCartItems(newItems);
  }

  return (
    <div>
      < NavBar />
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='shop' element={<Shop />} >
        <Route index element={< ShopIndex handleCardChange={handleCardChange}/>} />
        <Route path='item' element={cardInfo && <CardFull
                          id={cardInfo.id} 
                          url={cardInfo.url}
                          desc={cardInfo.desc}
                          title={cardInfo.title}
                          price={cardInfo.price}
                          handleCartChange={handleCartChange}
                          />}>

        </Route>
      </Route>
      <Route path='about' element={<About />} />
      <Route path='cart' element={<Cart cartItems={cartItems} handleCartDelete={handleCartDelete}/>} />
      <Route path='*' element={<NoMatch />}></Route>
    </Routes>
    </div>
  )
}

export default App
