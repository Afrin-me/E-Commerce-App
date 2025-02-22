import React from 'react'
import Navbar from './components/Navbar'
import { Container } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import Cart from './components/Cart'

const App = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route />
        </Routes>
      </Container>
    </div>
  );
}

export default App