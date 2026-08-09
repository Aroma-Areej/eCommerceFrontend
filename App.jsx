import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import Search from './pages/Search';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail';
import Login from './customer/Login'; // <-- Yahan path theek kar diya hai

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCartDrawer = () => setIsCartOpen(true);

  return (
    <Provider store={store}>
      <Router>
        <Navbar setIsCartOpen={setIsCartOpen} />
        
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home openCartDrawer={openCartDrawer} />} />
          
          {/* Login Route */}
          <Route path="/login" element={<Login />} />
          
          {/* Product Detail Route */}
          <Route path="/product/:id" element={<ProductDetail openCartDrawer={openCartDrawer} />} />

          {/* Search Results Route */}
          <Route path="/search" element={<Search />} />

          {/* Wishlist Route */}
          <Route path="/wishlist" element={<Wishlist openCartDrawer={openCartDrawer} />} />

          {/* Checkout Route */}
          <Route path="/checkout" element={<Checkout />} />

          {/* Dynamic Category Route */}
          <Route path="/:categorySlug" element={<CategoryPage openCartDrawer={openCartDrawer} />} />
          
          {/* Fallback routing */}
          <Route path="*" element={<div className="text-center py-20 font-serif text-[#5B142B]">Page Under Construction</div>} />
        </Routes>

        <Footer />
      </Router>
    </Provider>
  );
}

export default App;