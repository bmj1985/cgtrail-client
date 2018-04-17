import React, { Component } from 'react';
import logo from './DUShield.png';
import './App.css';

class App extends Component {
  render() {
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Crimson and Gold Trail Project</h1>
        </header>
        <main>
        <iframe className="Google-Map" src="https://www.google.com/maps/d/embed?mid=1_edBFlfORquGE8gCCZqCjaV037AnLQnN" />
        </main>
      </div>;
  }
}

export default App;
