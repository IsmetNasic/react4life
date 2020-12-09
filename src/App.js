import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import About from './components/pages/About/About';
import Footer from './components/pages/Footer.js/Footer';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/about' component={About} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

