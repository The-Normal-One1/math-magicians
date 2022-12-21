import React, { Component } from 'react';
import './App.css';
// import Calculator from './components/Calculator';
import Home from './pages/homePage';
import Math from './pages/calculatorPage';
import Quote from './pages/quotePage';
import NavBar from './components/navBar/navBar';
import { Route, Routes } from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route>
            <Math />
          </Route>
          <Route>
            <Home />
          </Route>
          <Route>
            <Quote />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
