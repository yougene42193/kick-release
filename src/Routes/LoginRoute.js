import React, { Component } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { Section } from '../utils/utils';

export default class LoginRoute extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => {},
        }
    }

    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).form || '/list'
        history.push(destination)
    }

    render() {
        return(
            <section className='LoginPage'>
                <LoginForm
                    onLoginSuccess={this.handleLoginSuccess}
                />
            </section>
        )
    }
}