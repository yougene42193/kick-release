import React, { Component } from 'react';
import LoginForm from '../LoginForm/LoginForm';

export default class LoginRoute extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => {},
        }
    }

    handleLoginSuccess = () => {
        const { location, history } = this.defaultProps
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