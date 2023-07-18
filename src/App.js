import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'remixicon/fonts/remixicon.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from './components/Header/Header';
import Hero from './components/UI/Hero';
import Counter from './components/UI/Counter';
import Services from './components/UI/Services';
import Team from './components/UI/Team';
import Testmonials from './components/UI/Testmonials';
import NewsLetter from './components/UI/NewsLetter';
import Footer from './components/UI/Footer';
import Gallery from './components/UI/Gallery';
import ProductView from './components/UI/ProductView';

function App() {
  const [theme, setTheme] = useState('');

  const toggleTheme = () => {
    theme === '' ? setTheme('light-theme') : setTheme('');
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<ProductView />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Counter />
      <Services />
      <Team />
      <NewsLetter />
      <Testmonials />
      <Gallery />
    </>
  );
}

export default App;