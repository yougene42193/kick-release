import React, { Component } from 'react'
import RegisterForm from '../RegisterForm/RegisterForm'

export default class RegisterRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = user => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <section className='RegistrationPage'>
        <h2>Register</h2>
        <RegisterForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </section>
    )
  }
}