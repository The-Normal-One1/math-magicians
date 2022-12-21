import React, { Component } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/homePage';
import Math from './pages/calculatorPage';
import Quote from './pages/quotePage';
import NavBar from './components/navBar/navBar';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Calculator" element={<Math />} />
            <Route path="/Quote" element={<Quote />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
