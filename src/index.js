import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import "bulma";
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

render(
    <Router>
        <App />
    </Router>, 
    document.getElementById('root'));
