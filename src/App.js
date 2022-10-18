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
  const [productSearchValue, setProductSearchValue] = React.useState('')
  
  function addProductToCart (productToAdd) {
    const existingProduct = cartProducts.find(product => product.id === productToAdd.id);
    if(existingProduct !== undefined) {
      // increase the quantity of the product that already exists in the cart
      handleProductQuantityInCart(existingProduct, true)
    } else {
      // if the product does not exist in the array inject with a quantity of 1
      console.log('before quantity',productToAdd)
      const newCartProducts = [...cartProducts, {...productToAdd, quantity: 1}]
      setCartProducts(newCartProducts);
      window.localStorage.setItem('cartProductsLocalStorage', JSON.stringify(newCartProducts))
    }
    // TODO: Use local storage to handle cart products here
  }

  function handleProductQuantityInCart (productToChangeQuantity, increaseQuantity) {
      if(increaseQuantity) {
        productToChangeQuantity.quantity += 1;
      } else {
        productToChangeQuantity.quantity -= 1;
      }

      const newCartProductsArray = cartProducts.map(product => 
        product.id === productToChangeQuantity.id ? 
          {...productToChangeQuantity, quantity: productToChangeQuantity.quantity} 
        : 
        product
      )
      setCartProducts(newCartProductsArray)
      window.localStorage.setItem('cartProductsLocalStorage', JSON.stringify(newCartProductsArray))
       // TODO: Use local storage to handle cart product quantity here
  }

  function removeProductFromCart (productToBeRemoved) {
    const newCartProductsArray = cartProducts.filter(product => product.id !== productToBeRemoved.id);
    setCartProducts(newCartProductsArray)
    window.localStorage.setItem('cartProductsLocalStorage', JSON.stringify(newCartProductsArray))
    // TODO: Use local storage to remove cart product 
  }

  function handleProductSearch (searchInputValue) {
    setProductSearchValue(searchInputValue)
  }

  function clearCartProducts () {
    setCartProducts([])
    window.localStorage.removeItem('cartProductsLocalStorage')
     // TODO: Use local storage to remove cart product array
  }

  return (
    // JSX
    <div className="App">
      <BrowserRouter>
        <Navbar handleProductSearch={handleProductSearch} />
        <Routes>
          <Route exact path='/products' element={<Homepage productSearchValue={productSearchValue} />}/>
          {/* example http://localhost:3000/products/12 */}
          <Route path='/products/:id' element={<ProductDetail addProductToCart={addProductToCart} />} />
          <Route path='/cart' element={
            <Cart 
              cartProducts={cartProducts} 
              addProductToCart={addProductToCart}  
              removeProductFromCart={removeProductFromCart}
              handleProductQuantityInCart={handleProductQuantityInCart}
              clearCartProducts={clearCartProducts}
              />} 
            />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<Navigate to="/products" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
