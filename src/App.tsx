import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Installation } from './components/Installation';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Header />
      <main>
        <Hero />
        <Features />
        <Installation />
      </main>
      <Footer />
    </div>
  );
}

export default App;