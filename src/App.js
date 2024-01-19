import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Consulting from './components/Consulting';
import Footer from './components/Footer';
import {BrowserRouter,Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Consulting />
      <Footer />
    </div>
  );
}

export default App;
