import React, { Component } from 'react';
import './App.css';
// import Calculator from './components/Calculator';
import Home from './pages/homePage';
import Math from './pages/calculatorPage';
import Quote from './pages/quotePage';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <Math />
        <Home />
        <Quote />
      </div>
    );
  }
}

export default App;
