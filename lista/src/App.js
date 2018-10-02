import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const numbers = [1, 1, 2, 3, 4, 5, 6, 7];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          { numbers.map((number, index) => {
            return <p key={index}> soy el numero {number} </p>
          })}

        </header>
      </div>
    );
  }
}

export default App;
