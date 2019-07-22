import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
    <div className="section">
      <div className="container">
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
      </div>
    </div>
    
    
  </div>
);

export default App;
