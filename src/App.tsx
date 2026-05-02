import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import OpeningAnimation from './components/OpeningAnimation';
import StickyCallStrip from './components/StickyCallStrip';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Products from './pages/Products';
import Brands from './pages/Brands';
import WhyUs from './pages/WhyUs';
import Knowledge from './pages/Knowledge';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  const handleAnimationComplete = () => {
    localStorage.setItem('superSteelsAnimationSeen', 'true');
    setShowAnimation(false);
    setTimeout(() => setAnimationComplete(true), 800);
  };

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {showAnimation && (
          <OpeningAnimation key="animation" onComplete={handleAnimationComplete} />
        )}
      </AnimatePresence>

      {animationComplete && (
        <>
          <StickyCallStrip />
          <Header />
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/products" element={<Products />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/why-us" element={<WhyUs />} />
              <Route path="/knowledge" element={<Knowledge />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </>
      )}
    </Router>
  );
}

export default App;
