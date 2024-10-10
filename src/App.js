import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className='scroll-smooth'>
        <AppRouter />
      </main>
      <Footer />
    </Router>
  )
}

export default App