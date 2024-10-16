import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
// Import Router and necessary components
import App from './App.jsx';
import './index.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';


import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { Searchpage } from './pages/Searchpage.jsx'; // Import your new SearchPage component
import PostPage from './pages/PostPage.jsx';
import SignInPage from './pages/SignInPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import ResetPassWord from './pages/ResetPassWord.jsx';
import CartPage from './pages/CartPage.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';

const ConditionalFooter = () => {
  const location = useLocation();
  
  // Check if the current path is not the Cart page
  const isCartPage = location.pathname === '/cart';

  return !isCartPage ? <Footer /> : null;
};

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/search" element={<Searchpage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/reset" element={<ResetPassWord />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <ConditionalFooter />
    </Router>
  </StrictMode>
);
