import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {mouseX: 0, mouseY: 0 }
  }

  handleMouseMove = (e) => {
    const { clientX, clientY } = e
    this.setState({mouseX: clientX, mouseY: clientY})
  }

  render() {
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
        </header>
        <div>
          <h4>Eventos</h4>
          <button onClick={() => alert('hi there !!!!!!')}>hi there !!!!</button>
          <div onMouseMove={this.handleMouseMove} style={{ border : '1px solid #000', marginTop: 10, padding: 10 }}>
            <p>{ this.state.mouseX } , { this.state.mouseY }</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
