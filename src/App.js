import React from 'react';
import './App.css';
import FrozenDept from './components/FrozenDept';
import ProduceDept from './components/ProduceDept';
import MeatDept from './components/MeatDept';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <FrozenDept/>
        <ProduceDept/>
        <MeatDept/>
      </div>
    </Router>
  );
}

export default App;
