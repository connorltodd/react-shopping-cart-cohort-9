import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';

import './App.css';
import Contact from './components/Contact/Contact';

// functional components and class components
function App() {
  return (
    // JSX
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/products' element={<Homepage />}/>
          {/* example http://localhost:3000/products/12 */}
          <Route path='/products/:id' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<Navigate to="/products" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
