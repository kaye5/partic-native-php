import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import './App.css';
import MainRoute from './MainRoute/MainRoute'
import ScrollToTop from './MainRoute/ScrollRestoration';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <React.Fragment>
    <div className="App">
    <Router>
      <Navbar />
        
          <ScrollToTop />
          <div className="container-fluid app-container">
          <MainRoute />  
          </div>

      <Footer/>
      </Router>
    </div>
    
    </React.Fragment>
  );
}

export default App;
