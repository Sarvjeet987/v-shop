import React from 'react'
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Shop from './Pages/Shop/Shop';
import Cart from './Pages/Cart/Cart';
import Contact from './Pages/Contact/Contact';

const App = () => {
  return (
    <div>
      {/* aisa component jo har page me show ho */}
      <BrowserRouter>
        <Nav />
        {/* in done ke bich ka contenet */}
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
        {/* in done ke bich ka contenet */}
        <Footer />
      </BrowserRouter>

    </div>
  )
}
export default App;
