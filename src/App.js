import React from 'react';
import './App.css';
import FrozenDept from './components/FrozenDept';
import ProduceDept from './components/ProduceDept';
import MeatDept from './components/MeatDept';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
        <div className="App">
            <Route path="/" component={NavBar} />
            <Route path="/frozen-dept" component={FrozenDept}/>
            <Route path="/produce-dept" component={ProduceDept}/>
            <Route path="/meat-dept" component={MeatDept}/>
        </div>
    </Router>
  );
}

export default App;
