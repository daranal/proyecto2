import React, { useEffect, useReducer, useState } from 'react';
import { ctx } from "./context"
import { reducerFn, initialState } from './reducer';
import { Home } from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Layout } from './layout';



function App(): JSX.Element {
  const [state, dispatch] = useReducer(reducerFn, initialState)

  console.log("State", state)
  document.title = "Proyecto 2";

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => dispatch({ type: "ADD_PRODUCTS", payload: data }))
  }, [])

  return (
    <ctx.Provider value={state}>
      <div className='App'>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path='/' element={<Home dispatch={dispatch}/>} />
                <Route path='products/:title' element={<ProductDetail dispatch={dispatch}/>} />
                <Route path='cart' element={<Cart dispatch={dispatch} />} />
              </Routes>
            </Layout>
          </BrowserRouter>
      </div>
    </ctx.Provider>

  );
}

export default App;
