import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
          <Route exact path='/' element={<Homepage />}/>
          <Route path='/detail' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
