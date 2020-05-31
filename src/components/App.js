import React from 'react';
import '../App.css';

import ProductNav from './ProductNav';
import MainNav from './MainNav';
import Hero from './Hero';
import Slider from './Slider';
import Library from './Library';
import Equipment from './Equipment';
import Footer from './Footer';

function App() {
  return (
    <div>
      <ProductNav />
      <MainNav />
      <Hero />
      <Slider />
      <Library />
      <Equipment />
      <Footer />
    </div>
  );
}

export default App;
