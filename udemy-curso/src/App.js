import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function Hello (props) {
//     return <h2>{props.title}</h2>;
// }

class Hello extends Component {
  render () {
    return <h2>{this.props.title}</h2>;
  }
}
class Text extends Component {
  render() {
const TextSeguro = this.props.boolean ? 'Cierto' : 'Falso'
  return   <div>
              <p>{this.props.title}</p>
              <p>{this.props.number}</p>
              <p>{TextSeguro}</p>

            </div>;
  }
}

class App extends Component {
    render() {

        return (
          <div className = "App">
            <header className = "App-header">
              <img src = { logo } className = "App-logo" alt = "logo" / >
            <Hello title="Bienvenidosdfd"/>

            </header>
            <p className = "App-intro" >Vamos a aprender REACT </p>
            <p> Estoy trabajando con React </p>

            <Text number ={2} title="este es de texto" boolean={true}/>
          </div>
        );
    }
}

export default App;
