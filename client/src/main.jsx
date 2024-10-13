import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router and necessary components
import App from './App.jsx';
import './index.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { Searchpage } from './pages/Searchpage.jsx'; // Import your new SearchPage component

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/search" element={<Searchpage />} /> {/* Define the search page route */}
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
