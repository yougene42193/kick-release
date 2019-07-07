import React, { Component } from 'react'
import { Section } from '../utils/utils'
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
      <Section className='RegistrationPage'>
        <RegisterForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </Section>
    )
  }
}