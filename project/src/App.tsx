import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TeaTypes from './components/TeaTypes';
import TeaBenefits from './components/TeaBenefits';
import TeaProducts from './components/TeaProducts';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f0] overflow-hidden">
      <Header />
      <main>
        <Hero />
        <TeaTypes />
        <TeaBenefits />
        <TeaProducts />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;