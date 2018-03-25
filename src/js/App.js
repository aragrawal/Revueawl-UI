import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Reveuawl</h1>
        </header>
        <p className="App-intro">
          Reveuawl - Your one stop for all the reviews.
        </p>
      </div>
    );
  }
}

export default App;
