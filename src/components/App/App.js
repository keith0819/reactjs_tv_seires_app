import React, { Component } from 'react';
import 'whatwg-fetch'
import Series from '../containers/Series'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV SERIES LIST</h1>
        </header>
        <Series />
      </div>
    );
  }
}

export default App;
