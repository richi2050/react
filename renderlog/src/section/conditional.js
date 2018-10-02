import React, { Component } from 'react';

class LogginButton extends Component {
  render() {
    return <button>Iniciar Sesión</button>
  }
}

class LogoutButton extends Component {
  render() {
    return (
      <div>
        <p>Bienvenido Usuario</p>
        <button>Cerrar sesion</button>
      </div>
    )
  }
}


export default class ConditionalSection extends Component {
  constructor () {
    super()
    this.state = { isUserLog: false }
  }
  render() {
    return (

      <div>
        <h4>Conditional Rendering</h4>
        { this.state.isUserLog ? <LogoutButton /> : <LogginButton /> }
      </div>
    )
  }
}
