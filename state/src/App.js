import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Contador extends Component {
  constructor(props) {
    super(props)
    this.state = { contador: this.props.contadorInicial }
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1})
    }, 1000)

  }
  render(){
    return <ContadorNumero numero={this.state.contador} />
  }
}
Contador.defaultProps = {
  contadorInicial: 0
}
class ContadorNumero extends Component {
  render () {
    console.log(' entra al render ContadorNumero'+ this.props.numero );
    return <span>{ this.props.numero }</span>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <Contador contadorInicial={100}/>
        </p>
      </div>
    );
  }
}

export default App;
