import React from 'react';
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {NavBar, ItemListContainer, ItemDetailContainer, CartWidget} from './components/index'


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer />}/>
          <Route exact path='/category/:categoriaId' element={<ItemListContainer />}/>
          <Route exact path='/item/:detalleId' element={<ItemDetailContainer />}/>
          <Route exact path='/cart' element={<CartWidget />}/>
        </Routes> 
      </BrowserRouter> 
    </> 
  );
}

export default App;
