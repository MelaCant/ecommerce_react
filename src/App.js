import React from 'react';
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {NavBar, ItemListContainer, ItemDetailContainer, CartWidget} from './components/index'
import CartProvider from './context/CartContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route exact path='/' element={<ItemListContainer />}/>
            <Route exact path='/category/:categoriaId' element={<ItemListContainer />}/>
            <Route exact path='/item/:detalleId' element={<ItemDetailContainer />}/>
            <Route exact path='/cart' element={<CartWidget />}/>
          </Routes>
        </CartProvider> 
      </BrowserRouter> 
    </> 
  );
}

export default App;
