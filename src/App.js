import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';

import './App.css';
import Contact from './components/Contact/Contact';

// functional components and class components
function App() {
  const [cartProducts, setCartProducts] = React.useState([]);
  
  function addProductToCart (productToAdd) {
    const existingProduct = cartProducts.find(product => product.id === productToAdd.id);
    if(existingProduct !== undefined) {
      // increase the quantity of the product that already exists in the cart
      existingProduct.quantity += 1;
      const newCartProductsArray = cartProducts.map(product => 
        product.id === existingProduct.id ? 
          {...productToAdd, quantity: existingProduct.quantity} 
        : 
        product
      )
      setCartProducts(newCartProductsArray)
    } else {
      // if the product does not exist in the array inject with a quantity of 1
      console.log('before quantity',productToAdd)
      setCartProducts([...cartProducts, {...productToAdd, quantity: 1}])
    }
  }

  function removeProductFromCart (productToBeRemoved) {
    const newCartProductsArray = cartProducts.filter(product => product.id !== productToBeRemoved.id);
    setCartProducts(newCartProductsArray)
  }

  return (
    // JSX
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/products' element={<Homepage />}/>
          {/* example http://localhost:3000/products/12 */}
          <Route path='/products/:id' element={<ProductDetail addProductToCart={addProductToCart} />} />
          <Route path='/cart' element={<Cart cartProducts={cartProducts} addProductToCart={addProductToCart}  removeProductFromCart={removeProductFromCart} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<Navigate to="/products" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
